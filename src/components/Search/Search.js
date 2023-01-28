import React from 'react'
import './Search.scss'
import { Input } from './Search.styled'
import { BsSearch } from 'react-icons/bs'
import classNames from 'classnames'

function Search(props) {

    let { theme, font } = props

    return (

        <div className={classNames('searchSec', { dark: theme })}>
            <Input placeholder='Search for definition...' font={font} dark={theme} />
            <BsSearch color='#A445ED' size='15px' />
        </div>
    )
}

export default Search
