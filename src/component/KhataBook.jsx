import React, { useEffect } from "react"
import Button from '@mui/material/Button';
import { useState } from "react";


const KhataBook = () => {
    const [showNotify , setShowNotify] = useState('');
    useEffect(() => {
        setTimeout(() => {
            setShowNotify('showBar')
            setTimeout(() => {
                setShowNotify('')
            }, 2000);
        }, 3000)
    }, [])

    const getHeaderImg = () => {
        const imgLogo = document.getElementsByClassName('logo');
        console.log('header Logo', imgLogo[0].src);
    }

    return (
        <>
            <header className="header">
                <img src="./reactIcon.svg" alt="logo" className="logo" />
            </header>
            <div className="container">
                <div className="heroBlock">
                    <div className="heroBlock-logo">
                        <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="logo" className="img" />
                    </div>
                    <div className="heroBlock-text">
                        Header Label
                    </div>
                </div>
                <div className="container-body">
                    <Button onClick={getHeaderImg} variant="contained">Contained</Button>
                </div>
            </div>
            <div className={['notify', showNotify].join(' ')} id="notification">Welcome</div>
        </>
    )
};
export default KhataBook;
