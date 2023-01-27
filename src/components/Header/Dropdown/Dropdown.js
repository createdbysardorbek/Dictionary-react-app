import React, { useState } from 'react'
import './Dropdown.scss'
import { Span, Div } from './Dropdown.styled'
import { BiDownArrowAlt } from 'react-icons/bi'

function Dropdown(props) {

  let [isOpen, setIsOpen] = useState(false)

  let { dark, font, changeFont } = props

  return (
    <div className='dropdown' onClick={() => setIsOpen(!isOpen)}>
      <Span dark={dark} font={font}>Sans Serif <span className='arrow'><BiDownArrowAlt color={'#A445ED'} /></span>
        <Div dark={dark} isOpen={isOpen} onClick={(e) => changeFont(e.target.dataset.font)}>
          <Span data-font='sans-serif' dark={dark} font={font}>Sans Serif</Span>
          <Span data-font='serif' dark={dark} font={font}>Serif</Span>
          <Span data-font='monospace' dark={dark} font={font}>Mono</Span>
        </Div>
      </Span>
    </div>
  )
}

export default Dropdown
