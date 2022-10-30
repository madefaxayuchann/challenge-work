import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'
import './ModalDelete.css'

const ModalDelete = props => {
  return (
    <Modal
      {...props}
      dialogClassName="modal-90w"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="modal-delete-wrapper" data-cy="modal-delete">
          <img
            src="/assets/modal-delete-icon.svg"
            data-cy="modal-delete-icon"
          />
          <p className="modal-delete-title" data-cy="modal-delete-title">
            Apakah anda yakin menghapus {props.type}{' '}
            <strong>"{props.title}"</strong>
          </p>
          <div className="modal-delete-button-wrapper">
            <Button
              data-cy="modal-delete-cancel-button"
              className="modal-delete-cancel-button"
              onClick={props.onHide}
            >
              <p className="modal-delete-cancel-button-text">Batal</p>
            </Button>
            <Button
              data-cy="modal-delete-confirm-button"
              className="modal-delete-confirm-button"
              onClick={props.onDelete}
            >
              <p className="modal-delete-confirm-button-text">Hapus</p>
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ModalDelete
