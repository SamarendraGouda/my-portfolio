import React from 'react';
import styles from './ActivityBar.module.css';
import Sidebar from '../Sidebar/Sidebar';
import Panel from '../Panel/Panel';


const ActivityBar = () => {
    

    return (
        <div className={styles.bigcontainer}>
        <div className={styles.container}>
            <div className={styles.subcontainer}>
            <img  className={styles.icon} src='/assets/icons/files.png' alt=''/>
            <img className={styles.icon} src='/assets/icons/search.png' alt=''/>
            <img className={styles.icon} src='/assets/icons/source.png' alt=''/>
            <img className={styles.icon} src='/assets/icons/debug.png' alt=''/>
            </div>
            
            <div className={styles.subcontainer}>
            <img className={styles.icon} src='/assets/icons/profile-circle.png' alt=''/>
            <img className={styles.icon} src='/assets/icons/settings-gear.png' alt=''/>
            </div>
        </div>
        <Sidebar />
        <Panel />
        </div>
    );
};



export default ActivityBar;