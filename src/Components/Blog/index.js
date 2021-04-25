import { Link } from 'react-router-dom'
import MarkdownPost from '../MarkdownPost'

// import posts from '../posts.js'
import './styles.css'

const PREVIEW_NUM_CHAR = 100

const PostPreviewH1 = ({ node, ...props }) =>
    <h1
        style={{
            fontSize: "1.4em",
        }}
        {...props} />


export default ({ posts }) => {
    // console.log(posts)
    return <div className="blog-container">
        <h1>Blog</h1>
        <br />
        {posts && posts.map((post, index) =>
            <div key={index} className="blog-post-preview">
                <Link to={post.path}>
                    <MarkdownPost
                        file={post.file}
                        maxCharacters={PREVIEW_NUM_CHAR}
                        className="blog-null-class"
                        components={{ h1: PostPreviewH1 }}
                    />
                </Link>
            </div>
        )}
    </div>
}
