import React from 'react';
import styles from './Panel.module.css';
import NavButtons from '../../HelperComponents/NavButtons/NavButtons';


const Panel = () => {

    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <NavButtons fileName={"Home.jsx"} fileType={"jsx"}/>
                <NavButtons fileName={"AboutMe.sol"} fileType={"sol"}/>
                <NavButtons fileName={"ContactMe.js"} fileType={"js"}/>
            </div>
        </div>
    );
};


export default Panel;