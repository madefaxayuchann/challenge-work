import React from 'react'
import { Dropdown } from 'react-bootstrap'
import './DropdownTodo.css'

const DropdownTodo = ({ value, onChangeValue }) => {
  return (
    <Dropdown data-cy="todo-sort-button">
      <Dropdown.Toggle className="toggle">
        <img src="/assets/sort.svg" data-cy="tabler:arrows-sort" />
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu">
        <Dropdown.Item
          data-cy="sort-latest"
          name="new"
          onClick={event => onChangeValue(event.currentTarget.name)}
        >
          <div className="menu-wrapper">
            <div className="menu-wrapper-left">
              <img src="/assets/sort-new.svg" />
              <p className="dropdown-title">Terbaru</p>
            </div>
            {value === 'new' && <img src="/assets/active.svg" />}
          </div>
        </Dropdown.Item>
        <Dropdown.Divider />

        <Dropdown.Item
          name="old"
          data-cy="sort-selection"
          onClick={event => onChangeValue(event.currentTarget.name)}
        >
          <div className="menu-wrapper">
            <div className="menu-wrapper-left">
              <img src="/assets/sort-old.svg" />
              <p className="dropdown-title">Terlama</p>
            </div>
            {value === 'old' && <img src="/assets/active.svg" />}
          </div>
        </Dropdown.Item>
        <Dropdown.Divider />

        <Dropdown.Item
          name="a-z"
          data-cy="sort-az"
          onClick={event => onChangeValue(event.currentTarget.name)}
        >
          <div className="menu-wrapper">
            <div className="menu-wrapper-left">
              <img src="/assets/sort-a-z.svg" />
              <p className="dropdown-title">A-Z</p>
            </div>
            {value === 'a-z' && <img src="/assets/active.svg" />}
          </div>
        </Dropdown.Item>
        <Dropdown.Divider />

        <Dropdown.Item
          name="z-a"
          data-cy="sort-za"
          onClick={event => onChangeValue(event.currentTarget.name)}
        >
          <div className="menu-wrapper">
            <div className="menu-wrapper-left">
              <img src="/assets/sort-z-a.svg" />
              <p className="dropdown-title">Z-A</p>
            </div>
            {value === 'z-a' && <img src="/assets/active.svg" />}
          </div>
        </Dropdown.Item>
        <Dropdown.Divider />

        <Dropdown.Item
          name="not-complete"
          data-cy="sort-unfinished"
          onClick={event => onChangeValue(event.currentTarget.name)}
        >
          <div className="menu-wrapper">
            <div className="menu-wrapper-left">
              <img src="/assets/sort-not-complete.svg" />
              <p className="dropdown-title">Belum Selesai</p>
            </div>
            {value === 'not-complete' && <img src="/assets/active.svg" />}
          </div>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropdownTodo
