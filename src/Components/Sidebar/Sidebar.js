import React from 'react';
import styles from './Sidebar.module.css';


const Sidebar = () => {
    

    return (
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
    );
};



export default Sidebar;