import React, { useRef, useState } from 'react'

import {
  SearchInput,
  SearchContainter,
  SearchButton,
  CleanButton,
  CloseButton,
} from './Search'

import SearchIcon from '../../static/searchIcon.svg'
import CloseIcon from '../../static/closeIcon.svg'
import CleanIcon from '../../static/CleanIcon.svg'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import { useEffect } from 'react'

const Search = () => {
  const [searchOpen, setOpenSearch] = useState(false)
  const [textOnInput, setTextOnInput] = useState('')
  const [display, setDisplay] = useState(false)
  const ref = useRef(null)

  useOutsideClick(ref, setOpenSearch)

  useEffect(() => {
    textOnInput !== '' ? setDisplay(true) : setDisplay(false)
  }, [textOnInput])

  const handleChange = (e) => {
    setTextOnInput(e.target.value)
  }

  return (
    <SearchContainter ref={ref} open={searchOpen}>
      <SearchButton onClick={() => setOpenSearch(true)} src={SearchIcon} />
      <SearchInput
        onChange={handleChange}
        open={searchOpen}
        placeholder='Buscar'
      />
      <CleanButton
        data-testid='clean'
        onClick={() => setTextOnInput('')}
        show={display}
        type='reset'
        open={searchOpen}
        src={CleanIcon}
      />
      <CloseButton
        onClick={() => setOpenSearch(false)}
        open={searchOpen}
        src={CloseIcon}
      />
    </SearchContainter>
  )
}

export default Search
