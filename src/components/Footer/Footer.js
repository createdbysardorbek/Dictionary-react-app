import React from 'react'
import './Footer.scss'
import { Url ,Span } from './Footer.styled'

function Footer(props) {

    let { font, dark } = props

    return (
        <footer>
            <Span font={font} dark={dark}>Source</Span>
            <Url href={'https://en.wiktionary.org/wiki/keyboard'} target='_blank' font={font} dark={dark}>https://en.wiktionary.org/wiki/keyboard</Url>
        </footer>
    )
}

export default Footer
