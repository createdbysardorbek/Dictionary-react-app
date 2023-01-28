import React, { useState } from "react";
import classNames from "classnames";
import './App.scss'
import Header from "../Header/Header";
import Search from "../Search/Search";

const App = () => {

    let [theme, setTheme] = useState(false);
    let [font, setFont] = useState('sans-serif')

    function changeTheme () {
        setTheme(!theme)
    }

    function changeFont (font) {
        setFont(font)
    }


    return (
        <div className={classNames(`body`, {dark: theme})}>
            <Header changeFont={changeFont} changeTheme={changeTheme} theme={theme} font={font} />
            <Search theme={theme} font={font} />
        </div>
    )

}

export default App