import React from "react"
import { Link } from 'react-router-dom'
import "./Home.scss"
import Footer from "../components/Footer"
const Home = () => {
    window.scroll(0, 0)
    return (
        <React.Fragment>
            <div className="homeContainer">
                <div className="background1">
                    <div className="text-wrapper">
                        <div className="leftQuote">
                            <h1 className="frontQuote">"Prior preparation prevents poor performance"</h1>
                            <h3>Whatever your goal is, we'll get you there.</h3>
                        </div>
                        <div className="rightNav">
                            <div className="subtitle">
                                <h3>Try it free by clicking the following links:</h3>
                            </div>

                            <ul>
                                {/* <li><Link to={`${process.env.PUBLIC_URL}/tutorial`} className="link gray ">Tutorial</Link></li> */}
                                <li><Link to={`${process.env.PUBLIC_URL}/input`} className="link gray">Input</Link></li>
                                <li><Link to={`${process.env.PUBLIC_URL}/resources`} className="link gray">Resources</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="background2">
                    <div className="descriptionContainer">
                        <div className="introText">
                            <p>HKDSE E-Learning Platform is a combination of University Score Calculator, HKDSE tutorial and learning materials online platform.</p>
                        </div>

                        <div className="featuresText">
                            <h3 className="intro">This platform provides the following functions:</h3>
                            <p>1: University Score Calculator</p>
                            <p>Generate all possible University courses based on your HKDSE Score on One Click</p>
                            <div className="imgContainer">
                                <img src="https://i.imgur.com/kOeI9ZQ.jpg" alt="HKDSE Score Calculator" ></img>
                                <div className="imgTextContainer">
                                    <span>HKDSE Calculator: List all course available</span>
                                </div>
                            </div>
                            <div className="imgContainer">
                                <img src="https://i.imgur.com/r2nttnx.png" alt="HKDSE Score Calculator" ></img>
                                <div className="imgTextContainer">
                                    <span>HKDSE Calculator: Grade Point Distrubtion </span>
                                </div>
                            </div>
                            <div className="imgContainer">
                                <img src="https://i.imgur.com/tFOmO5m.png" alt="HKDSE Score Calculator" ></img>
                                <div className="imgTextContainer">
                                    <span>HKDSE Calculator: Applcation Statistics</span>
                                </div>
                            </div>
                            

                            <p>2. HKDSE Tutorial</p>
                            <p>Mainly covers DSE Mathematics, suitable for all level of students</p>
                            <div className="imgContainer">
                                <img src="https://i.imgur.com/kORAaDY.png" alt="HKDSE Score Calculator" ></img>
                                <div className="imgTextContainer">
                                    <span>HKDSE Tutorial</span>
                                </div>
                            </div>
                            <div className="imgContainer">
                                <img src="https://i.imgur.com/TfxOZqP.png" alt="HKDSE Score Calculator" ></img>
                                <div className="imgTextContainer">
                                    <span>HKDSE Tutorial</span>
                                </div>
                            </div>


                            <p>3. Learning materials</p>
                            <p>Include study notes, subject cut-off score reference, HKEAA official documents, and experience sharing </p>
                            <div className="imgContainer">
                                <img src="https://i.imgur.com/UMC3Nxi.png" alt="HKDSE Score Calculator" ></img>
                                <div className="imgTextContainer">
                                    <span>HKDSE Learning materials</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="background3">
                    <div className="motivateContainer">
                        <div className="motivateBox">
                            <div className="imgContainer">
                                <img src="https://www.blog.400contacts.com/wp-content/uploads/2017/03/compoundposter.jpg" alt="poster" ></img>

                            </div>
                            <div className="motivateRight">
                                <p>Be prepared for your future, and one day you will thank yourself for the hard work you'vs done. </p>
                            </div>
                        </div>
                        <ul >
                            {/* <li><Link to={`${process.env.PUBLIC_URL}/tutorial`} className="link gray ">Tutorial</Link></li> */}
                            <li><Link to={`${process.env.PUBLIC_URL}/input`} className="link gray">Input</Link></li>
                            <li><Link to={`${process.env.PUBLIC_URL}/resources`} className="link gray">Resources</Link></li>
                        </ul>


                    </div>
                </div>
                <Footer />
            </div>


        </React.Fragment>
    )
}
export default Home;