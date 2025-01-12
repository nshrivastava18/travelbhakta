import React, { useState } from 'react';
import { useTable } from 'react-table';
import { useSelector, useDispatch } from 'react-redux';
import './CompanyMaster.css'; // Import the CSS file for styling
import { FaEdit, FaTrash } from 'react-icons/fa'; // Import edit and trash icons
import CompanyModal from './CompanyModal'; // Import CompanyModal component
import ConfirmationModal from './ConfirmationModal'; // Import ConfirmationModal component
import { updateCompany, addCompany, deleteCompany } from '../../../../redux/actions/companyActions'; // Import actions

const CompanyMaster = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [confirmationModalIsOpen, setConfirmationModalIsOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector(state => state.company.data);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Company Name',
        accessor: 'col1',
      },
      {
        Header: 'Address',
        accessor: 'col2',
      },
      {
        Header: 'Contact Number',
        accessor: 'col3',
      },
      {
        Header: 'Edit',
        Cell: ({ row }) => (
          <FaEdit
            className="icon"
            onClick={() => {
              setSelectedRow(row.original);
              setIsEditMode(true);
              setModalIsOpen(true);
            }}
          />
        ),
      },
      {
        Header: 'Delete',
        Cell: ({ row }) => (
          <FaTrash
            className="icon"
            onClick={() => {
              setSelectedRow(row.original);
              setConfirmationModalIsOpen(true);
            }}
          />
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  const handleSave = () => {
    if (isEditMode) {
      dispatch(updateCompany(selectedRow));
    } else {
      dispatch(addCompany(selectedRow));
    }
    setModalIsOpen(false);
  };

  const handleAddCompany = () => {
    setSelectedRow({ col1: '', col2: '', col3: '' });
    setIsEditMode(false);
    setModalIsOpen(true);
  };

  const handleDelete = () => {
    dispatch(deleteCompany(selectedRow.col1));
    setConfirmationModalIsOpen(false);
  };

  return (
    <div className="table-container">
      <button className="add-company-button" onClick={handleAddCompany}>
        Add Company
      </button>
      <table {...getTableProps()} className="styled-table">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <CompanyModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        selectedRow={selectedRow}
        setSelectedRow={setSelectedRow}
        isEditMode={isEditMode}
        handleSave={handleSave}
      />

      <ConfirmationModal
        isOpen={confirmationModalIsOpen}
        onRequestClose={() => setConfirmationModalIsOpen(false)}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default CompanyMaster;