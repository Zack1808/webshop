import React from 'react'
import { Link } from 'react-router-dom'
import { UilInstagramAlt, UilFacebook, UilGithub, UilEnvelopeOpen, UilPhone, UilCopyright, UilLinkedin} from '@iconscout/react-unicons'

// Importing the style file
import '../assets/css/Footer.css';

const Footer = ({ social }) => {

    // Function that will return the icon and the the text
    const renderLink = (title) => {
        if(title === "Instagram") return (
            <div className="icon">
                <UilInstagramAlt />
                <p>{title}</p>
            </div>
        )
        if(title === "GitHub") return (
            <div className="icon">
                <UilGithub />
                <p>{title}</p>
            </div>
        )
        if(title==="Facebook") return (
            <div className="icon">
                <UilFacebook />
                <p>{title}</p>
            </div>
        )
        return (
            <div className="icon">
                <UilLinkedin />
                <p>{title}</p>
            </div>
        )
    }

    return (
        <div className='footer-container'>
           <div className="footer-information">
                <div className="social-media">
                    {social.map(soc => {
                        return <a target="_blank" href={soc.link} key={soc.title}>{renderLink(soc.title)}</a>
                    })}
                </div>
                <div className="footer-contact-information">
                    <div className="info"><UilEnvelopeOpen /> &nbsp; jeanpierrenovak21@gmail.com</div>
                    <div className="info"><UilPhone /> &nbsp; +385 91 946 5331</div>
                </div>
           </div>
           <div className="copyright">
                <UilCopyright /> &nbsp; Copyright by Jean-Pierre Novak
           </div>
        </div>
    ) 
}

export default Footer