import React, { useState } from 'react'
import './WordAudioPro.scss'
import { Word, Audio, Pronounce } from './WordAudioPro.styled'
import { GrPlayFill } from 'react-icons/gr'
import { BsPauseFill } from 'react-icons/bs'

function WordAudioPro(props) {

    let [isPlay, setIsPlay] = useState(false)


    let { font, theme } = props

    return (
        <div className='audioSec'>
            <div className='words'>
                <Word font={font} dark={theme}>keyboard</Word>
                <Pronounce font={font}>/ˈkiːbɔːd/</Pronounce>
            </div>
            <div className='audio'>
                <div className='audioPlay' onClick={() => {
                    setIsPlay(true)
                    setTimeout(() => {
                        setIsPlay(false)
                    }, 1000)
                }}>
                    {isPlay ? <BsPauseFill size={30} color='#7c07d5' /> : <GrPlayFill size={21} color='#7c07d5' />}
                </div>
            </div>
        </div>
    )
}

export default WordAudioPro
