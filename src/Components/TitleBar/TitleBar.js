import React from 'react';
import styles from './TitleBar.module.css';
import Sidebar from '../Sidebar/Sidebar';


const TitleBar = () => {

    return (
        <div className={styles.container}>
           
            <div className={styles.header}>
                <ul className={styles.titleItems}>
                    <li>File</li>
                    <li>Edit</li>
                    <li>Selection</li>
                    <li>View</li>
                    <li>Go</li>
                    <li>Run</li>
                    <li>Terminal</li>
                    <li>Help</li>
                </ul>
            </div>
            <Sidebar/>
        </div>
    );
};


export default TitleBar;