import React from 'react'
import styles from './StudentDashboard.module.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

export default function StudentDashboard() {
  return (
    <>
        <div>StudentDashboard</div>
    
        <Navbar></Navbar>

        <Navbar 
            projectTitle="Project"
            subTitle="Introduction"
            dotmap="⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫"
        />


        <Sidebar></Sidebar>
    </>
  )
}
