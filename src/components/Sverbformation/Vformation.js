import React from 'react'
import { Heading } from '../NounFormation/NounFormation.styled'
import './Vformation.scss'
import { Span, Verb } from './Vformation.styled'
import Comp from './Comp/Comp'

function Vformation(props) {

    let { font, theme } = props

    return (
        <>
            <div className='synonym_sec'>
                <Heading font={font}>Synonyms</Heading>
                <Span font={font}>electronic keyboard</Span>
            </div>
            <div className='vform'>
                <Verb font={font} dark={theme}>verb</Verb>
                <div className='line'></div>
            </div>
            <div className='meaning'>
                <Heading font={font}>Meaning</Heading>
            </div>
            <Comp dark={theme} font={font}></Comp>
        </>
    )
}

export default Vformation
