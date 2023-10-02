import React from 'react'

// css import
import styles from './styles/SearchBox.module.scss'

const SearchBox = () => {
  return (
    <form action="#">
      <label>
        <input type="text" placeholder="keyward" />
      </label>
      <button type="submit" aria-label="go"></button>
    </form>
  )
}

export default SearchBox
