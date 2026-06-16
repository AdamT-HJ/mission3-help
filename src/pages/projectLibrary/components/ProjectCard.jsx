import React from 'react'

export default function ProjectCard({index, title, src}) {
  return (
    <>
        <div>ProjectCard</div>
        <div key={index}>{title}</div>
        <img src={src} alt="image" />
    
    </>
  )
}
