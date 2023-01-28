import React from 'react'
import Desc from './Desc/Desc'
import './NounFormation.scss'
import { Span, Heading } from './NounFormation.styled'


function NounFormation(props) {


    let { theme, font } = props

    return (
        <div className='nformation'>
            <div className='nounf'>
                <Span dark={theme} font={font}>noun</Span>
                <div className='line'></div>
            </div>
            <div className='description'>
                <Heading font={font}>Meaning</Heading>
            </div>
            <Desc dark={theme} font={font} text={'(etc.) A set of keys used to operate a typewriter, computer etc.'} />
            <Desc dark={theme} font={font} text={'A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.'} />
            <Desc dark={theme} font={font} text={'A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.'} />
        </div>
    )
}

export default NounFormation
