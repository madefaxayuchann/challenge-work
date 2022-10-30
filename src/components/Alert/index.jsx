import React from 'react'
import { Toast } from 'react-bootstrap'
import './Alert.css'

const Alert = ({ show, data }) => {
  return (
    <Toast className="modal-alert" show={show}>
      <Toast.Body data-cy={data}>
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
