import React from 'react';
import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa'; // Import close icon
import './CompanyMaster.css'; // Import the CSS file for styling

const CompanyModal = ({ isOpen, onRequestClose, selectedRow, setSelectedRow, isEditMode, handleSave }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={isEditMode ? 'Edit Company' : 'Add Company'}
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      {selectedRow && (
        <div>
          <div className="modal-header">
            <h2>{isEditMode ? 'Edit Company' : 'Add Company'}</h2>
            <FaTimes className="close-icon" onClick={onRequestClose} />
          </div>
          <form>
            <label>
              Company Name:
              <input
                type="text"
                value={selectedRow.col1}
                onChange={e => setSelectedRow({ ...selectedRow, col1: e.target.value })}
              />
            </label>
            <br />
            <label>
              Address:
              <input
                type="text"
                value={selectedRow.col2}
                onChange={e => setSelectedRow({ ...selectedRow, col2: e.target.value })}
              />
            </label>
            <br />
            <label>
              Contact Number:
              <input
                type="text"
                value={selectedRow.col3}
                onChange={e => setSelectedRow({ ...selectedRow, col3: e.target.value })}
              />
            </label>
            <br />
            <div className="modal-buttons">
              <button type="button" onClick={handleSave}>
                Save
              </button>
              <button type="button" onClick={onRequestClose}>
                Discard
              </button>
            </div>
          </form>
        </div>
      )}
    </Modal>
  );
};

export default CompanyModal;
