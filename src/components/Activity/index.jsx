import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createActivity } from '../../redux/todo/todoSlice'

import Alert from '../Alert'
import CardActivity from '../CardActivity'
import './Activity.css'

const Activity = ({ data }) => {
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.todo.createActivity.isLoading)

  const [alertShow, setAlertShow] = useState(false)

  const onAddActivity = () => {
    const payload = { title: 'New Activity', email: 'ivan@skyshi.com' }
    dispatch(createActivity(payload))
  }

  const onShowAlert = () => {
    setAlertShow(true)
    setTimeout(() => {
      setAlertShow(false)
    }, 1000)
  }

  return (
    <div className="container">
      <div className="activity-container">
        <div className="activity-wrapper">
          <p className="activity-title" data-cy="activity-title">
            Activity
          </p>
          <button
            className="activity-add-button"
            data-cy="activity-add-button"
            disabled={isLoading}
            onClick={onAddActivity}
          >
            {isLoading ? (
              <img src="/assets/spinner.svg" width={35} height={35} />
            ) : (
              <>
                <img src="/assets/plus.svg" data-cy="tabler:plus" />
                <p className="activity-add-text" data-cy="Tambah">
                  Tambah
                </p>
              </>
            )}
          </button>
        </div>
        {data?.length === 0 ? (
          <div
            className="activity-image"
            data-cy="activity-empty-state"
            onClick={onAddActivity}
          >
            <img src="/assets/activity-empty-state.png" />
          </div>
        ) : (
          <div className="activity-list">
            {data?.map((activity, index) => (
              <CardActivity
                key={activity.id}
                id={activity.id}
                title={activity.title}
                date={activity.created_at}
                index={index}
                onShowAlert={onShowAlert}
              />
            ))}
          </div>
        )}
      </div>

      <Alert show={alertShow} data="modal-information" />
    </div>
  )
}

export default Activity
