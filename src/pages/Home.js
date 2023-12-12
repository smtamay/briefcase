import React, { Fragment, useState } from 'react'

//Assets
import '../assets/css/home.css'
import Perfil from '../assets/images/perfil.png'
import Draw from '../assets/images/draw.svg'
import Code from '../assets/images/code.svg'

import { FaGithub, FaGlobe, FaCode, FaLinkedin, FaInstagram, FaFacebookSquare, FaBars, FaDiscord, FaEnvelope, FaRegTimesCircle, FaPhoneAlt, FaPhoneSquareAlt } from 'react-icons/fa'

const Home = () => {

    const [open, setOpen] = useState(false)

    return (
        <Fragment>
            <div className="wrapper">
                <header>
                    <nav className="navbar">
                        <div className="brand">
                            <h2>S<span>T</span></h2>
                        </div>
                        <ul className={`menu ${open ? "open" : "close"}`} id='menu'>
                            <li ><a className="active" href="#">Home</a></li>
                            <li><a href="#">About me</a></li>
                            <li><a href="#">Portafolio</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                        <div className='toogle-menu'>
                            {
                                open
                                    ? <i className='fa-close' id='toogle_close' onClick={() => setOpen(false)}><FaRegTimesCircle /></i>
                                    : <i className='fa-bars' id='toogle_open' onClick={() => setOpen(true)}><FaBars /></i>
                            }
                        </div>
                    </nav>
                </header>
                <main className="main">
                    <div className="info-content">
                        <span className='info-content__subtitle'>Jr. Full stack Developer Elixir | React </span>
                        <h1>Hi, I'm<span> Sandra</span> Tamay</h1>
                        <div className='sotial-network'>
                            <a href='https://www.linkedin.com/in/sandra-marveli-tamay-dzul-480298200' target="_blank"><FaLinkedin /></a>
                            <a href='https://github.com/smtamay' target="_blank"><FaGithub /></a>
                        </div>
                        <p className='info-content__p'>I am currently focusing my career as a full stack Elixir | react. I am an organized, responsible person, I like teamwork. I really enjoy learning new things, I like to share my experience and at the same time add new knowledge.</p>
                        <a download href="#">
                            <a href='https://drive.google.com/file/d/18fZ1MbLlpN9GnrE_4sBbJsu5xGFM33HL/view?usp=share_link' className="download-cv">Download CV</a>
                        </a>
                    </div>
                    <img src={Perfil} alt="Sandra Tamay" className="responsive" />
                </main>
            </div>
            <div className="about">
                <img src={Draw}alt="sandratamay image" />

                <div className="about-info">
                    <h2>About me</h2>
                    <div className="divider"></div>
                    <p>I am 23 years old, I am from Mexico, I am studying computer systems, 
                        I am focusing on being full stack, I work with the phoenix framework with elixir, 
                        GraphQL in the fontend, I have knowledge in react js for the integration of backend with Apollo client.</p>
                    <button className="download-cv">Read more</button>
                </div>
            </div>
            <div className="portafolio">
                <div className="portafolio-headings">
                    <h2>My Portafolio</h2>
                    <div className="divider"></div>
                </div>
                <div className="container">
                    <div className="card">
                        <div className="card__img">
                        </div>
                        <div className="card__title">
                            <h2>Project Description</h2>
                        </div>
                        <div className="card_projects-links">
                            <a href="https://github.com/smtamay" target="_blank">
                                <FaGithub />
                            </a>
                            <a href="">
                                <FaGlobe />
                            </a>
                            <a href="">
                                <FaCode />
                            </a>
                        </div>
                        <div className='proyect-details-content'>
                            <button className='project-details download-cv'>
                                <a href=''>
                                    Project details
                                </a>
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card__img">
                        </div>
                        <div className="card__title">
                            <h2>Project Description</h2>
                        </div>
                        <div className="card_projects-links">
                            <a href="https://github.com/smtamay" target="_blank">
                                <FaGithub />
                            </a>
                            <a href="">
                                <FaGlobe />
                            </a>
                            <a href="">
                                <FaCode />
                            </a>
                        </div>
                        <div className='proyect-details-content'>
                            <button className='project-details download-cv'>
                                <a href=''>
                                    Project details
                                </a>
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card__img">
                        </div>
                        <div className="card__title">
                            <h2>Project Description</h2>
                        </div>
                        <div className="card_projects-links">
                            <a href="https://github.com/smtamay" target="_blank">
                                <FaGithub />
                            </a>
                            <a href="">
                                <FaGlobe />
                            </a>
                            <a href="">
                                <FaCode />
                            </a>
                        </div>
                        <div className='proyect-details-content'>
                            <button className='project-details download-cv'>
                                <a href=''>
                                    Project details
                                </a>
                            </button>
                        </div>
                    </div>

                </div>
                <div className='contact-section'>
                    <div className='contact-heading'>
                        <h2>Keep in touch</h2>
                        <div className='divider'></div>
                    </div>
                    <div className='container-contact'>
                        <ul>
                            <li> <FaPhoneSquareAlt className='spacing'/> +52 982 126 8294</li>
                            <li>< FaDiscord className='spacing'/> Sandra Tamay</li>
                            <li> <FaEnvelope className='spacing'/> tm1947417@gmail.com</li>
                        </ul>
                        
                    </div>
                </div>
            </div>
            <footer className='footer'>
                <div className='footer-content'>
                    <h2>Sandra Tamay</h2>
                    <h5>Jr. Full stack developer Elixir | React</h5>

                </div>
                <div className='sotial-networkt'>
                <a href='https://www.linkedin.com/in/sandra-marveli-tamay-dzul-480298200' target="_blank"><FaLinkedin /></a>
                <a href='https://github.com/smtamay' target="_blank"><FaGithub /></a>
                </div>
            </footer>
        </Fragment>

    )
}

export { Home }