import LaunchIcon from '@material-ui/icons/Launch'
import GitHubIcon from '@material-ui/icons/GitHub'

import projects from './projects'
import './styles.css'
// import Card from './Card'

const Button = ({ text = "", icon = "", url = null }) =>
    <a href={url} target="_blank" className="card-button">
        {text}
    </a>

const Card = ({ ...props }) =>
    <div className="card">
        <div className="card-header">
            <div className="card-title">{props.title}</div>
            <div className="card-tags">
                {props?.tags.map((tag, index) =>
                    <div key={index} className="card-tag">{tag}</div>
                )}
            </div>
        </div>

        <div className="card-description">{props.description}</div>

        {/* <p>Technologies: </p> */}
        <div className="card-technologies">
            {props?.technologies.map((tech, index) =>
                <div key={index} className="card-technology">{tech}</div>
            )}
        </div>
        <div className="card-buttons">
            {props.post && <Button text="Details" />}
            {props.github && <Button text="Github" url={props.github} />}
            {props.web && <Button text="Web" url={props.web} />}
        </div>

    </div>

export default () => {
    // console.log(projects)
    return (
        <>
            <h2>Portfolio</h2>
            <div className="cards-grid">
                {projects.map((props, index) =>
                    <Card key={index} {...props} />
                )}
            </div>
        </>

    )
}
