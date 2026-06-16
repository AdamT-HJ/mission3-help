import React from 'react'
import styles from './Sidebar.module.css'
import { useState } from 'react'
import star from '../../../assets/Home/star.png'
import animation from '../../../assets/Home/animation.png'

export default function Sidebar() {

    const [isActive, setIsActive] = useState(false)

    function toggleSidebar(){
        setIsActive(!isActive)
    }

  return (
    <>
        <div>Sidebar</div>

        <div className={`${styles.sidebar} ${isActive ? styles.isActive : ""}`}>

            <div>
                <ul>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                </ul>
            </div>
            <img src={isActive ? star : animation} alt="image" />
            
            <button onClick={toggleSidebar}>TOGGLE</button>

        </div>



    </>
  )
}
