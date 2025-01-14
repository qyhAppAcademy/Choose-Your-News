import Jeffrey from './Jeffrey.png'
import Ishtahad from './Ishtahad.jpg'
import Daniel from './Daniel.png'
import Qiao from './Qiao.png'
import Github from './github.png'
import LinkedIn from './LinkedIn.png'
import AngelList from './AngelList.png'
import './AboutUs.css'

function AboutUs() {
    return (
        <div className="about-us-container">
            <h1 className='title-about-us'>About</h1>
            <p className='about-project'>With so much news going on everyday, it's impossible to keep track of it all, and looking at the New York Times homepage can be overwhelming.  Choose Your News is designed to help with that by letting you just get news about the figures you choose to follow.  Our filters give you custom news feeds for specific figures, groups of figures, or anyone you're interested in, and you can save particularly interesting articles for later.  News is pulled live from the NY Times Articles API.</p>
            <ul>
                <div id='about-person-list'>
                <div className="about-us-person" id="Jeffrey">
                    <img id='profile-pic-about-us' src={Jeffrey} />
                    <div className='about-us-info'>
                        <p className='about-us-name'>Jeffrey Cheng</p>
                        <p className='about-us-title'>Team Lead</p>
                        <div className="Job-Links">
                            <a href='https://github.com/jeffreych6' target="_blank"><img className="Github" src={Github} /></a>
                            <a href='https://www.linkedin.com/in/jeffrey-cheng-38338290/' target="_blank"><img className="LinkedIn" src={LinkedIn} /></a>
                            <a href="https://angel.co/u/jeffrey-cheng-15" target="_blank"><img class="icons" src={AngelList}/></a>
                        </div>
                        <div id='project-links'>
                            <p>Other projects:</p>
                            <a href='https://jeffreych6.github.io/income_tax_by_state/' target="_blank">Income Tax by State</a>
                            <a href='https://rarebnb.onrender.com/' target="_blank">RareBnb</a>
                        </div>
                    </div>
                    
                </div>
                <div className="about-us-person" id="Ishtahad">
                    <img id='profile-pic-about-us' src={Ishtahad} />
                    <div className='about-us-info'>
                        <p className='about-us-name'>Ishtahad Ahmed</p>
                        <p className='about-us-title'>Frontend Lead</p>
                        {/* <p>I'm Ishtahad, etc.</p> */}
                        <div className="Job-Links">
                            <a href='https://github.com/IshsGit/' target="_blank"><img className="Github" src={Github} /></a>
                            <a href='https://www.linkedin.com/in/iahmed93/' target="_blank"><img className="LinkedIn" src={LinkedIn} /></a>
                            <a href="https://angel.co/u/ishtahad-ahmed" target="_blank"><img class="icons" src={AngelList}/></a>
                        </div>
                            <div id='project-links'>
                                <p>Other projects:</p>
                                <a href='https://ishsgit.github.io/FindYourKetoRedux/' target="_blank">Find Your Keto</a>
                                <a href='https://amazon-clone-uls3.onrender.com/' target="_blank">Amazish</a>
                            </div>
                    </div>
                    
                </div>
                <div className="about-us-person" id="Daniel">
                    <img id='profile-pic-about-us' src={Daniel} />
                    <div className='about-us-info'>
                        <p className='about-us-name'>Daniel Kalla</p>
                        <p className='about-us-title'>Backend Lead</p>
                        {/* <p>I'm Daniel, etc.</p> */}
                        <div className="Job-Links">
                            <a href='https://github.com/dtkalla' target="_blank"><img className="Github" src={Github} /></a>
                            <a href='https://www.linkedin.com/in/daniel-kalla' target="_blank"><img className="LinkedIn" src={LinkedIn} /></a>
                            <a href="https://angel.co/u/daniel-thomas-kalla" target="_blank"><img class="icons" src={AngelList}/></a>
                        </div>
                            <div id='project-links'>
                                <p>Other projects:</p>
                                <a href='https://dtkalla.github.io/JavaScript-Project-Disease-Tracker/' target="_blank">Disease Tracker</a>
                                <a href='https://waterbnb.onrender.com/' target="_blank">WaterBnb</a>
                            </div>
                    </div>
                    
                </div>
                <div className="about-us-person" id="Qiao">
                    <img id='profile-pic-about-us' src={Qiao} />
                    <div className='about-us-info'>
                        <p className='about-us-name'>Qiao Yang Han</p>
                        <p className='about-us-title'>Flex</p>
                        {/* <p>I'm Qiao, etc.</p> */}
                        <div className="Job-Links">
                            <a href='https://github.com/qyhAppAcademy' target="_blank"><img className="Github" src={Github} /></a>
                            <a href='https://www.linkedin.com/in/qiao-yang-han-367590257/' target="_blank"><img className="LinkedIn" src={LinkedIn} /></a>
                            <a href="https://angel.co/u/qiaoyanghan" target="_blank"><img class="icons" src={AngelList}/></a>
                        </div>
                            <div id='project-links'>
                                <p>Other projects:</p>
                                <a href='https://qyhappacademy.github.io/portugal_trade_data_visualization/' target="_blank">Portugal Trade Data Visualization</a>
                                <a href='https://qelp.onrender.com/' target="_blank">Qelp</a>
                            </div>
                    </div>
                    
                </div>
                </div>
                
            </ul>
        </div>        
    )
}

export default AboutUs