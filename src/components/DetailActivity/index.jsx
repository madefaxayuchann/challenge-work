import React, { useEffect, useMemo, useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { updateActivity } from '../../redux/todo/todoSlice'
import CardTodo from '../CardTodo'
import DropdownTodo from '../DropdownTodo'
import ModalTodo from '../ModalTodo'
import './DetailActivity.css'

const DetailActivity = ({ id, title, todos }) => {
  const router = useHistory()
  const dispatch = useDispatch()

  const ref = useRef(null)

  const [textEdit, setTextEdit] = useState('')
  const [textEditActive, setTextEditActive] = useState(false)

  const [modalShow, setModalShow] = useState(false)
  const [filter, setFilter] = useState('new')

  const todosFilter = useMemo(() => {
    const todo = todos ? [...todos] : []

    if (filter === 'new') {
      return todo?.sort((a, b) => b.id - a.id)
    }

    if (filter === 'old') {
      return todo?.sort((a, b) => a.id - b.id)
    }

    if (filter === 'a-z') {
      return todo.sort((a, b) => a.title.localeCompare(b.title))
    }

    if (filter === 'z-a') {
      return todo.sort((a, b) => b.title.localeCompare(a.title))
    }

    if (filter === 'z-a') {
      return todo.sort((a, b) => b.title.localeCompare(a.title))
    }

    if (filter === 'not-complete') {
      return todo.sort((a, b) => a.is_active - b.is_active)
    }

    return todo
  }, [todos, filter])

  const onToggleModalShow = () => {
    setModalShow(prevValue => !prevValue)
  }
  const onToggleTextEdit = () => {
    setTextEditActive(prevValue => !prevValue)
  }

  const onRedirectHome = () => {
    router.push('/')
  }

  const onChangeValue = value => {
    setFilter(value)
  }

  const onUpdateTitle = () => {
    const payload = {
      id: id,
      title: textEdit
    }
    onToggleTextEdit()
    dispatch(updateActivity(payload))
  }

  useEffect(() => {
    setTextEdit(title)
  }, [title])

  return (
    <div className="container">
      <div className="activity-detail-container">
        <div className="activity-detail-wrapper">
          <div className="activity-detail-flex">
            <img
              src="/assets/back.svg"
              onClick={onRedirectHome}
              data-cy="todo-back-button"
            />
            {textEditActive ? (
              <input
                ref={ref}
                className="todo-title-input"
                value={textEdit}
                onBlur={() => onUpdateTitle()}
                onChange={event => setTextEdit(event.currentTarget.value)}
                onKeyDown={event => {
                  if (event.code === 'Enter') {
                    onUpdateTitle()
                  }
                }}
              />
            ) : (
              <p
                className="todo-title"
                data-cy="todo-title"
                onClick={() => {
                  setTimeout(() => {
                    ref.current.focus()
                  }, 10)
                  onToggleTextEdit()
                }}
              >
                {textEdit}
              </p>
            )}
            <img
              src="/assets/rename.svg"
              data-cy="todo-title-edit-button"
              onClick={() => {
                setTimeout(() => {
                  ref.current.focus()
                }, 10)
                onToggleTextEdit()
              }}
            />
          </div>

          <div className="activity-detail-flex">
            {todos?.length !== 0 && (
              <DropdownTodo value={filter} onChangeValue={onChangeValue} />
            )}
            <button
              className="todo-add-button"
              data-cy="todo-add-button"
              onClick={onToggleModalShow}
            >
              <img src="/assets/plus.svg" data-cy="tabler:plus" />
              <p className="activity-add-text" data-cy="Tambah">
                Tambah
              </p>
            </button>
          </div>
        </div>

        {todos?.length === 0 ? (
          <div
            className="activity-detail-image"
            onClick={onToggleModalShow}
            data-cy="todo-empty-state.png"
          >
            <img src="/assets/todo-empty-state.png" />
          </div>
        ) : (
          todosFilter?.map((todo, index) => (
            <CardTodo
              key={todo.id}
              id={todo.id}
              groupId={todo.activity_group_id}
              checked={todo.is_active}
              index={index}
              title={todo.title}
              priority={todo.priority}
            />
          ))
        )}
      </div>

      <ModalTodo
        type="create"
        id={id}
        show={modalShow}
        onHide={onToggleModalShow}
      />
    </div>
  )
}

export default DetailActivity
