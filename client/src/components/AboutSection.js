import React from 'react'
import './AboutSection.css'

function AboutSection() {
  return (
    <div>
        <h1 className='about-section-title'>How Dev Groupie Works</h1>
        <h3 className='about-section-description'>
           Meet new people by developing projects together. Creating an account is free!
        </h3>
        <div className='about-container'>
            <div className='about-container-one'>
                <h3>Join a group</h3>
                <p>
                    Meet developers who are already working on a project.
                    You never know who you might meet!
                </p>
            </div>
            <div className='about-container-two'>
                <h3>Start a group</h3>
                <p>
                    Be the one to create a group and determine what tech stack
                    you want your project to use. 
                </p>
            </div>
            <div className='about-container-three'>
                <h3>Find your group</h3>
                <p>
                    List your preferences to help us find you a group. What
                    tech stack do you want? Who do you want to work with?
                </p>
            </div>
        </div>
    </div>
    )
}

export default AboutSection;

