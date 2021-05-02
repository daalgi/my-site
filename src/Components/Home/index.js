import { Link } from 'react-router-dom'

import { ReactComponent as LinkedinIcon } from '../../icons/linkedin.svg'
import { ReactComponent as GithubIcon } from '../../icons/github.svg'
import './styles.css'


export default () =>
    <div className="home-container">
        <div className="home-div">
            <h1>Welcome!</h1>
            <p>I'm David, a structural engineer and software developer</p>
        </div>
        <div className="home-curved-div">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 420">
                <path d="M0,224L48,224C96,224,192,224,288,224C384,224,480,224,576,224C672,224,768,224,864,208C960,192,1056,160,1152,138.7C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
                </path>
            </svg>

            {/* <p>You can check some of the projects</p> */}
        </div>

        {/* <div className="home-curved-inverted-div">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
                <path d="M0,224L48,224C96,224,192,224,288,224C384,224,480,224,576,224C672,224,768,224,864,208C960,192,1056,160,1152,138.7C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
                </path>
            </svg>
        </div> */}
        <div className="home-div home-bottom-div">
            <p>I'm passionate about coding, and I do it
            on a daily basis both to automate tasks as a
            structural engineer and to build some side projects.
            </p>
            <p>
                You can have a look at some of the projects 
                I work in on the <Link
                    className="home-underlined-link"
                    to="/portfolio/">Portfolio section</Link> and
                on <a
                    className="home-underlined-link"
                    href="https://github.com/daalgi" target="_blank" >
                    Github
                    <GithubIcon className="nav-item-icon" />
                </a>.
            </p>
            <p>Here's my profile in a couple of coding challenge websites:</p>
            <div className="home-link-div">
                <div className="home-link-div-elem">
                    <a
                        href="https://www.hackerrank.com/dkaifazhe" target="_blank">
                        <img id="feed-intro" src="https://hrcdn.net/community-frontend/assets/brand/logo-new-white-green-a5cb16e0ae.svg" alt="Hackerrank" />
                    </a>
                </div>
                <div className="home-link-div-elem">
                    <a
                        href="https://app.codesignal.com/profile/yinuo_z" target="_blank">
                        <svg width="150" height="32" viewBox="0 0 150 32" fill="red" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M143.807 6.91298L40.8279 6.56978C39.9878 6.5672 39.1516 6.68279 38.3451 6.91298L42.7293 0L22.1007 2.91687L21.4777 5.3687L20.8593 2.91687L0 0L6.69159 10.1188L8.11298 10.3175L11.588 16.0971L14.8184 16.377L21.4316 32L28.1508 16.377L32.5396 15.9978C32.449 20.8465 35.6025 25.1787 40.7864 25.1367L143.807 25.4799C147.157 25.4461 150.008 22.6975 150 19.3436V13.099C150.011 9.73599 147.166 6.9707 143.807 6.91298ZM21.4362 18.5534L18.1919 5.73896L6.15627 3.58513L8.56524 7.30121L15.6122 8.27656L16.3598 10.6967L11.6664 10.1956L13.4755 13.1982L17.232 13.5234L21.4362 26.2068L25.6357 13.5234L29.3969 13.1982L31.2013 10.1956L26.5126 10.6967L27.2556 8.27656L34.3025 7.30121L36.7161 3.58513L24.6758 5.73896L21.4362 18.5534ZM47.9181 19.4367C46.7763 21.0023 45.2367 22.155 42.5553 22.155C39.0953 22.155 36.3101 19.5227 36.3101 15.927V15.8926C36.3101 12.3829 39.0261 9.63013 42.6937 9.63013C45.1675 9.63013 46.759 10.6624 47.8316 12.142L45.3059 14.0861C44.6139 13.2259 43.8181 12.6753 42.6591 12.6753C40.9637 12.6753 39.77 14.1033 39.77 15.8582V15.8926C39.77 17.699 40.9637 19.1098 42.6591 19.1098C43.9219 19.1098 44.6658 18.5249 45.3924 17.6474L47.9181 19.4367ZM60.9723 15.8926C60.9723 19.3507 58.1697 22.155 54.433 22.155C50.6963 22.155 47.9284 19.3851 47.9284 15.927V15.8926C47.9284 12.4345 50.7309 9.63013 54.4676 9.63013C58.2043 9.63013 60.9723 12.4001 60.9723 15.8582V15.8926ZM51.371 15.8926C51.371 17.6302 52.6339 19.1442 54.4676 19.1442C56.3187 19.1442 57.547 17.6646 57.547 15.927V15.8926C57.547 14.1549 56.2841 12.6409 54.433 12.6409C52.5993 12.6409 51.371 14.1205 51.371 15.8582V15.8926ZM61.6996 21.9142H66.3012C70.6607 21.9142 73.2038 19.3335 73.2038 15.8582V15.8238C73.2038 12.3484 70.6953 9.87099 66.3704 9.87099H61.6996V21.9142ZM65.0557 12.8302H66.4223C68.4291 12.8302 69.7611 13.9485 69.7611 15.8754V15.9098C69.7611 17.8539 68.4291 18.955 66.4223 18.955H65.0557V12.8302ZM83.506 21.9142H73.6798V9.87099H83.4195V12.7097H77.0013V14.5334H82.814V17.1657H77.0013V19.0754H83.506V21.9142ZM89.2953 22.1206C92.2362 22.1206 94.191 20.6582 94.191 18.198V18.1636C94.191 15.9098 92.4611 15.0151 89.6758 14.413C87.9978 14.0345 87.5826 13.7936 87.5826 13.2431V13.2087C87.5826 12.7786 87.9805 12.4345 88.7936 12.4345C89.8661 12.4345 91.0771 12.8474 92.1843 13.6216L93.8623 11.2646C92.5476 10.2151 90.9387 9.66454 88.8801 9.66454C85.9737 9.66454 84.1919 11.2818 84.1919 13.5184V13.5528C84.1919 16.0302 86.1813 16.7528 88.759 17.3378C90.4024 17.7163 90.8003 17.9915 90.8003 18.4905V18.5249C90.8003 19.041 90.3159 19.3507 89.4164 19.3507C88.0151 19.3507 86.683 18.8518 85.4894 17.9055L83.621 20.1249C85.1088 21.4496 87.1501 22.1206 89.2953 22.1206ZM98.4717 21.9142H95.0983V9.87099H98.4717V21.9142ZM105.844 22.155C108.041 22.155 109.823 21.3464 111.103 20.2969V14.8775H105.532V17.3206H107.92V18.7829C107.418 19.1098 106.795 19.2819 105.982 19.2819C104.062 19.2819 102.695 17.8883 102.695 15.9442V15.9098C102.695 14.0689 104.044 12.6065 105.792 12.6065C106.985 12.6065 107.85 13.0194 108.715 13.742L110.688 11.385C109.407 10.2839 107.902 9.63013 105.774 9.63013C102.02 9.63013 99.2525 12.3829 99.2525 15.8926V15.927C99.2525 19.5743 102.072 22.155 105.844 22.155ZM115.151 21.9142H111.829V9.87099H114.96L119.942 16.2367V9.87099H123.264V21.9142H120.323L115.151 15.3076V21.9142ZM123.422 21.9142H126.951L127.816 19.7636H132.487L133.369 21.9142H136.968L131.812 9.78497H128.577L123.422 21.9142ZM128.802 17.1657L130.169 13.742L131.518 17.1657H128.802ZM146.456 21.9142H137.235V9.87099H140.591V18.9894H146.456V21.9142Z" fill="white"></path>
                        </svg>
                    </a>
                </div>
            </div>

            <p>If you want to contact me, you can reach me on <a
                className="home-underlined-link"
                href="https://www.linkedin.com/in/davidalegre/" target="_blank">
                Linkedin
                    <LinkedinIcon className="nav-item-icon" />
            </a></p>

            <p>Here's my <a
                className="home-underlined-link"
                href="https://drive.google.com/file/d/1Liy0GpWQWuhBmzpBAqCEuayOqq9kLBu-/view?usp=sharing"
                target="_blank">
                CV</a>
            </p>
        </div>
    </div>
