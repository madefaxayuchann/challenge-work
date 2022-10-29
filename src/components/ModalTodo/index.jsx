import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Modal from 'react-bootstrap/Modal'

import { createTodo, updateTodo } from '../../redux/todo/todoSlice'
import SelectPriority from '../SelectPriority'
import './ModalTodo.css'

const ModalTodo = props => {
  console.log(props)
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [priority, setPriority] = useState('very-high')

  const onChangeValue = value => {
    setPriority(value)
  }

  const onClearTodo = () => {
    setName('')
    setPriority('very-high')
  }

  const onCreateTodo = () => {
    const payload = {
      activity_group_id: props.id,
      title: name,
      priority: priority
    }
    console.log(payload)
    if (props.type === 'create') {
      dispatch(createTodo({ ...payload, is_active: false }))
    }

    if (props.type === 'update' && props.groupId) {
      dispatch(
        updateTodo({
          ...payload,
          id: props.id,
          activity_group_id: props.groupId
        })
      )
    }

    props.onHide()
    onClearTodo()
  }

  useEffect(() => {
    setName(props.title)
    setPriority(props.priority)
  }, [props.title, props.priority])

  return (
    <Modal
      {...props}
      size="lg"
      data-cy="modal-add"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="modal-add-title" data-cy="modal-add-title">
          Tambah List Item
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <label className="modal-add-name-title">NAMA LIST ITEM</label>
        <br />
        <input
          className="modal-add-name-input"
          data-cy="modal-add-name-input"
          placeholder="Tambahkan nama list item"
          value={name || ''}
          onChange={event => setName(event.target.value)}
        />

        <label
          className="modal-add-priority-title"
          data-cy="modal-add-priority-title"
        >
          PRIORITY
        </label>
        <br />
        <SelectPriority defaultValue={priority} onChangeValue={onChangeValue} />
      </Modal.Body>

      <Modal.Footer>
        <button
          className="modal-add-save-button"
          data-cy="modal-add-save-button"
          disabled={!name}
          onClick={onCreateTodo}
        >
          <p className="modal-add-save-title">Simpan</p>
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalTodo
