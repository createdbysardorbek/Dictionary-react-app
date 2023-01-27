import React from 'react'
import './Header.scss'
import { BiBookAlt } from 'react-icons/bi'
import { MdOutlineToggleOff, MdOutlineToggleOn } from 'react-icons/md'
import { BsMoon } from 'react-icons/bs'
import Dropdown from './Dropdown/Dropdown'
import { Line } from './Header.styled'

function Header(props) {




    let { font, theme, changeTheme, changeFont } = props

    return (
        <div className='header'>
            <BiBookAlt color={theme ? '#A445ED' : '#757575'} size={35} />
            <div className='mode'>
                <Dropdown changeFont={changeFont} dark={theme} font={font} />
                <Line theme={theme} ></Line>
                <span className='toggle' onClick={changeTheme}>
                    {theme ? <MdOutlineToggleOn color={theme ? '#A445ED' : '#757575'} size={40} /> : <MdOutlineToggleOff color={theme ? '#A445ED' : '#757575'} size={40} />}
                </span>
                <span className='moon'>
                    <BsMoon size={20} color={theme ? '#A445ED' : '#757575'} />
                </span>
            </div>
        </div>
    )
}

export default Header
