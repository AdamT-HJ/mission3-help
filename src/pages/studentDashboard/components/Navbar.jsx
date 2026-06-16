import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../../assets/NavBar/LevelUpWorks-blue.png'

export default function Navbar(props) {
  return (
    <>
      <div>Navbar</div>

      <div className={styles.navbar}>

        <img src={logo} alt="logo" />

        <div>
          <div>
              <p>{props.projectTitle}</p>
              <p>{props.subTitle}</p>
          </div>
          <div>{props.dotmap}</div>
        </div>

      </div>
    </>
  )
}
