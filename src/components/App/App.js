import React, { useState } from "react";
import './App.scss'
import Header from "../Header/Header";
import Search from "../Search/Search";
import WordAudioPro from "../Word-audio-pro/WordAudioPro";
import NounFormation from "../NounFormation/NounFormation";
import Vformation from "../Sverbformation/Vformation";
import { Body } from "./App.styled";
import Footer from "../Footer/Footer";

const App = () => {

    let [theme, setTheme] = useState(false);
    let [font, setFont] = useState('sans-serif');



    function changeTheme() {
        setTheme(!theme)
    }

    function changeFont(font) {
        setFont(font)
    }

    return (
        <Body dark={theme}>
            <div className='body'>
                <Header changeFont={changeFont} changeTheme={changeTheme} theme={theme} font={font} />
                <Search theme={theme} font={font} />
                <WordAudioPro font={font} theme={theme} />
                <NounFormation font={font} theme={theme} />
                <Vformation font={font} theme={theme} />
                <Footer font={font} dark={theme} />
            </div>
        </Body>
    )

}

export default App