import React from 'react'
import './Desc.scss'
import { Dot, Paragraph } from './Desc.styled'

function Desc(props) {

    let { text, dark, font } = props

    return (
        <div className='desc'>
            <div className='dot'>
                <Dot />
            </div>
            <div className='paragraph'>
                <Paragraph dark={dark} font={font}>{text}</Paragraph>
            </div>
        </div>
    )
}

export default Desc
