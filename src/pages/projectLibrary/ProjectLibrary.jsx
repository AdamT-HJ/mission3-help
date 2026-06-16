import React from 'react'
import star from '../../assets/Home/star.png'
import ProjectCard from './components/ProjectCard'

export default function ProjectLibrary() {

    const SDProjectLibraryData = [
        {
            title: "Introduction",
            level: "Beginner",
            activity_type: "Animation",
            src: "/images/projects/Project01.png"
        },
        {
            title: "Introduction",
            level: "Beginner",
            activity_type: "Animation",
            src: "/images/projects/Project02.png"
        },
    ]


  return (
    <>
        <div>ProjectLibrary</div>
        <img src={star} alt="star image" />

        {SDProjectLibraryData.map((project, index)=>{
            return (
                <>
                    <div key={index}>{project.title}</div>
                    <img src={project.src} alt="image" />
                </>
            )
        })}

       {SDProjectLibraryData.map((project, index)=>{
            return (
                <ProjectCard index={index} title={project.title} src={project.src}/>
            )
       })} 
    
    </>
  )
}
