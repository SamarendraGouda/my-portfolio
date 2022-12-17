import React from 'react';
import styles from './NavButtons.module.css';

import jsx from './icons_nav/jsx.svg';
import js from './icons_nav/js.svg';
import sol from './icons_nav/sol.svg';


const NavButtons = ({fileName, fileType}) => {

    var icon;
    if (fileType === "jsx"){
        icon = jsx;
    }
    else if (fileType === "js"){
        icon = js;
    }
    else if (fileType === "sol"){
        icon = sol;
    }

    return (
        <div className={styles.button}>
            <img src={icon} alt='icon' />
            {fileName}
        </div>
    );
};


export default NavButtons;