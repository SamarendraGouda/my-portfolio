import React from 'react';
import styles from './Sidebar.module.css';


const Sidebar = () => {
    

    return (
        <div className={styles.container}>
            <img src='/assets/icons/files.png' alt=''/>
            <img src='/assets/icons/search.png' alt=''/>
            <img src='/assets/icons/source.png' alt=''/>
            <img src='/assets/icons/debug.png' alt=''/>
            <img src='/assets/icons/profile-circle.png' alt=''/>
            <img src='/assets/icons/settings-gear.png' alt=''/>
        </div>
    );
};



export default Sidebar;