import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>

            <p> I am currently doing my final year of postgraduation in Computing and Innovation at the University Of Adelaide, SA. I have been previously employed by Cognizant Technology Solutions, Chennai where I worked as a software developer.</p>

            <p>I have experience making web application in React, Java(STRUTS and Spring).</p>

            <p>I hold an undergraduate degree in Electronics and Communication Engineering. The love for coding(that initially started while working in Raspberry Pi and Arduino) kicked me off to a journey that started at 770 kilometres away from my home in Chennai, India and currently more than 10 times that distance here in the beautiful city of Adelaide, Australia.</p>

            <p>Here's my LinkedIn profile with all my experiences <a href="https://www.linkedin.com/in/alanpallath/" target="_blank" rel="noopener noreferrer">here</a>!</p>

            <p>I love sports and click photos. Here's my Instagram profile. Feel free to connect <a href="https://www.instagram.com/aaalaaaaan/" target="_blank" rel="noopener noreferrer">here</a></p>
            </Content>
        </div>
    );

}

export default AboutPage;