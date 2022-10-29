import React, { Fragment, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import moment from 'moment'

import { deleteActivity } from '../../redux/todo/todoSlice'
import ModalDelete from '../ModalDelete'
import './CardActivity.css'

const CardActivity = ({ id, index, title, date, onShowAlert }) => {
  const dispatch = useDispatch()
  const router = useHistory()

  const [modalShow, setModalShow] = useState(false)

  const formatDate = moment(date).format('DD MMMM YYYY')

  const onToggleModalShow = event => {
    if (event) {
      event.stopPropagation()
    }
    setModalShow(prevValue => !prevValue)
  }

  const onRedirectDetail = event => {
    event.stopPropagation()
    router.push(`detail/${id}`)
  }

  const onDeleteActivity = id => {
    onToggleModalShow()
    dispatch(deleteActivity(id))
  }

  return (
    <Fragment>
      <div onClick={onRedirectDetail} style={{ cursor: 'pointer' }}>
        <div className="activity-item" data-cy={`activity-item${index}`}>
          <p className="activity-item-title" data-cy="activity-item-title">
            {title}
          </p>
          <div className="activity-item-footer">
            <p className="activity-item-date" data-cy="activity-item-date">
              {formatDate}
            </p>
            <img
              src="/assets/trash.svg"
              onClick={onToggleModalShow}
              style={{ cursor: 'pointer' }}
              data-cy="activity-item-delete-button"
            />
          </div>
        </div>
      </div>

      <ModalDelete
        type="activity"
        title={title}
        show={modalShow}
        onHide={onToggleModalShow}
        onDelete={() => {
          onDeleteActivity(id)
          onShowAlert()
        }}
      />
    </Fragment>
  )
}

export default CardActivity
