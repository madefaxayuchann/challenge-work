import React, { useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'

import { deleteTodo, updateTodo } from '../../redux/todo/todoSlice'
import ModalDelete from '../ModalDelete'
import ModalTodo from '../ModalTodo'
import './CardTodo.css'

const CardTodo = ({
  id,
  groupId,
  index,
  title,
  checked,
  priority,
  onShowAlert
}) => {
  const classNamePriority = `card-todo-priority ${priority}`

  const dispatch = useDispatch()
  const transformCheckbox = useMemo(() => {
    if (checked === 1 || checked) return true
    return false
  }, [])

  const [checkbox, setCheckbox] = useState(transformCheckbox)
  const [modalUpdate, setModalUpdate] = useState(false)
  const [modalDelete, setModalDelete] = useState(false)

  const onToggleModalShow = type => {
    if (type === 'update') {
      return setModalUpdate(prevValue => !prevValue)
    }
    if (type === 'delete') {
      return setModalDelete(prevValue => !prevValue)
    }
  }

  const onToggleCheckbox = () => {
    const payload = {
      id: id,
      activity_group_id: groupId,
      is_active: !checkbox,
      type: 'checkbox'
    }

    setCheckbox(prevValue => !prevValue)
    dispatch(updateTodo(payload))
  }

  const onDeleteTodo = () => {
    const payload = {
      id: id,
      groupId: groupId
    }

    dispatch(deleteTodo(payload))
    onToggleModalShow('delete')
  }

  return (
    <div className="card-todo" data-cy={`todo-item${index}`}>
      <div className="card-todo-wrapper">
        <div className="card-todo-wrapper-left">
          <div data-cy="todo-item-checkbox">
            <input
              className="todo-item-checkbox"
              type="checkbox"
              checked={checkbox}
              onChange={onToggleCheckbox}
            />
          </div>
          <div
            className={classNamePriority}
            data-cy="todo-item-priority-indicator"
          />
          <p
            className="todo-item-title"
            data-cy="todo-item-title"
            style={{ textDecoration: checkbox && 'line-through' }}
          >
            {title}
          </p>
          <img
            src="/assets/rename.svg"
            data-cy="todo-item-edit-button"
            onClick={() => onToggleModalShow('update')}
          />
        </div>

        <img
          src="/assets/trash.svg"
          data-cy="todo-item-delete-button"
          style={{ cursor: 'pointer' }}
          onClick={() => onToggleModalShow('delete')}
        />
      </div>

      <ModalTodo
        type="update"
        id={id}
        groupId={groupId}
        title={title}
        priority={priority}
        show={modalUpdate}
        onHide={() => onToggleModalShow('update')}
      />

      <ModalDelete
        type="item"
        title={title}
        show={modalDelete}
        onHide={() => onToggleModalShow('delete')}
        onDelete={() => {
          onDeleteTodo()
          onShowAlert()
        }}
      />
    </div>
  )
}

export default CardTodo
