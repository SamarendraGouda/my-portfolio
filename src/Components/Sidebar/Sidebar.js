import React,{useState} from 'react';
import styles from './Sidebar.module.css';
import threedot from "./assets/three_dot.svg";
import downarrow from "./assets/downarrow.png";
import jsx from './../../HelperComponents/NavButtons/icons_nav/jsx.svg';
import js from './../../HelperComponents/NavButtons/icons_nav/js.svg';
import sol from './../../HelperComponents/NavButtons/icons_nav/sol.svg';

const Sidebar = () => {
    var str;
    const [buttonStatus, setButtonStatus] = useState("expand");
    const toggleView = () =>{
        if(buttonStatus === "expand") {
            setButtonStatus("collapsed");
        }
        else if (buttonStatus == "collapsed"){
            setButtonStatus("expand");
        }
    }

    if (buttonStatus === "expand"){
        str = styles.expand;
    }
    else if (buttonStatus === "collapsed"){
        str = styles.collapsed;
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <div>EXPLORER</div>
                <img src={threedot} alt="" />
            </div>
            <div className={styles.folderName} onClick={toggleView}>
                <img src={downarrow} alt=""/>
                Portfolio
                <div className={str}>
                    <ul>
                        <li><img src={jsx}/>AboutMe.jsx</li>
                        <li><img src={sol}/>Skills.sol</li>
                        <li><img src={js}/>Contact Me.js</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};


export default Sidebar;