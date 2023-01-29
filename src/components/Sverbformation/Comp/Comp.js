import React from 'react'
import './Comp.scss'
import { Dot, Meaning, Example } from './Comp.styled'

function Comp(props) {

    let { dark, font } = props

    return (
        <div className='example'>
            <div className='dot'>
                <Dot />
            </div>
            <div className='descr'>
                <Meaning dark={dark} font={font}>To type on a computer keyboard.</Meaning>
                <Example font={font}>“Keyboarding is the part of this job I hate the most.”</Example>
            </div>
        </div>
    )
}

export default Comp
