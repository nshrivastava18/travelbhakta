import React from 'react';
import Modal from 'react-modal';
import './CompanyMaster.css'; // Import the CSS file for styling

const ConfirmationModal = ({ isOpen, onRequestClose, handleDelete }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Confirm Delete"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div>
        <h2>Confirm Delete</h2>
        <p>Are you sure you want to delete this company?</p>
        <div className="modal-buttons">
          <button type="button" onClick={handleDelete}>
            Yes
          </button>
          <button type="button" onClick={onRequestClose}>
            No
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
