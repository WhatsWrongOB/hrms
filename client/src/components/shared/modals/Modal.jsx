import React from "react";

const Modal = ({ onClose, isConfirm, action }) => {
  return (
    <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div
        id="modal"
        className="border-gray-900 bg-white text-gray-800 p-4 rounded-lg w-[92%] md:w-[400px] max-w-md"
      >
        <h3
          className="text-lg border-b border-gray-300 pb-2 font-bold mb-4"
          id="modal-title"
        >
          Confirmation
        </h3>
        <p id="modal-message">Are you sure you want to {action}?</p>
        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={() => isConfirm()}
            id="modal-confirm"
            className="bg-blue-500 text-sm text-white px-4 py-2 rounded"
          >
            Confirm
          </button>
          <button
            id="modal-cancel"
            className="bg-gray-500 text-sm text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
