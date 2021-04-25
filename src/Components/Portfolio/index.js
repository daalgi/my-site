import Card from './Card'
import projects from '../projects'
import './styles.css'


export default () => {
    return (
        <div className="portfolio-container">
            <h1>Portfolio</h1>
            <div className="cards-grid">
                {projects.map((props, index) =>
                    <Card key={index} {...props} />
                )}
            </div>
        </div>
    )
}
