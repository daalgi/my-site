import { Link } from 'react-router-dom'

import './styles.css'


const Button = ({
    text = "", icon = "", externalUrl = null, internalUrl = null
}) =>
    internalUrl
        ? <Link className="card-button" to={internalUrl}>{text}</Link>
        : <a href={externalUrl} target="_blank" className="card-button">
            {text}
        </a>

const Card = ({ ...props }) =>
    <div className="card">
        <div className="card-header">
            <div className="card-title">{props.title}</div>
            <div className="card-tags">
                {props?.tags.map((tag, index) =>
                    <div key={index} className="card-chip">{tag}</div>
                )}
            </div>
        </div>

        <div className="card-description">{props.description}</div>

        <div className="card-technologies">
            {props?.technologies.map((tech, index) =>
                <div key={index} className="card-chip">{tech}</div>
            )}
        </div>
        <div className="card-buttons">
            {props.post &&
                <Button text="Post" internalUrl={props.post} />}
            {props.certificate &&
                <Button text="Certificate" externalUrl={props.certificate}/>}
            {props.github &&
                <Button text="Github" externalUrl={props.github} />}
            {props.web &&
                <Button text="Web" externalUrl={props.web} />}
        </div>

    </div>

export default Card