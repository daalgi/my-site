import { Link } from 'react-router-dom'
import MarkdownPost from '../MarkdownPost'

// import posts from '../posts.js'
import './styles.css'

const PREVIEW_NUM_CHAR = 113

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
                <MarkdownPost
                        file={post.file}
                        postId={post.id}
                        maxCharacters={PREVIEW_NUM_CHAR}
                        components={{
                            h1: PostPreviewH1,
                        }}
                    />
                <Link to={post.path} className="blog-post-read-more">
                    Read more
                </Link>
                {/* <br className="blog-separator" /> */}
            </div>
        )}
    </div>
}
