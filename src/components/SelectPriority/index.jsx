import ReactSelect from 'react-select'
import './SelectPriority.css'

const SelectPriority = ({ defaultValue, onChangeValue }) => {
  const OPTIONS_PRIORITY = [
    {
      value: 'very-high',
      label: (
        <div className="label-wrapper">
          <div className="label-color very-high" />
          <p className="label-text">Very High</p>
        </div>
      )
    },
    {
      value: 'high',
      label: (
        <div className="label-wrapper">
          <div className="label-color high" />
          <p className="label-text">High</p>
        </div>
      )
    },
    {
      value: 'normal',
      label: (
        <div className="label-wrapper">
          <div className="label-color normal" />
          <p className="label-text">Medium</p>
        </div>
      )
    },
    {
      value: 'low',
      label: (
        <div className="label-wrapper">
          <div className="label-color low" />
          <p className="label-text">Low</p>
        </div>
      )
    },
    {
      value: 'very-low',
      label: (
        <div className="label-wrapper">
          <div className="label-color very-low" />
          <p className="label-text">Very Low</p>
        </div>
      )
    }
  ]

  return (
    <ReactSelect
      name="priority"
      data-cy="modal-add-priority-item"
      defaultValue={OPTIONS_PRIORITY.find(
        priority => priority.value === defaultValue
      )}
      options={OPTIONS_PRIORITY}
      onChange={event => onChangeValue(event.value)}
    />
  )
}

export default SelectPriority
