import React from 'react'
import { Toast } from 'react-bootstrap'
import './Alert.css'

const Alert = ({ show }) => {
  return (
    <Toast className="modal-alert" show={show} data-cy="modal-information">
      <Toast.Body>
        <div className="modal-alert-wrapper">
          <img
            src="/assets/modal-information-icon.svg"
            data-cy="modal-information-icon"
          />
          <p
            className="modal-information-title"
            data-cy="modal-information-title"
          >
            Activity berhasil dihapus
          </p>
        </div>
      </Toast.Body>
    </Toast>
  )
}

export default Alert
