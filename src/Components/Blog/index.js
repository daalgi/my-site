import { Link } from 'react-router-dom'
import MarkdownPost from '../MarkdownPost'

// import posts from '../posts.js'
import './styles.css'

const PREVIEW_NUM_CHAR = 113

const PostPreviewH1 = ({ node, ...props }) =>
    <h1
        style={{
            fontSize: "1.4em",
            margin: "16px auto"
        }}
        {...props} />

const PostPreviewP = ({ node, ...props }) =>
    <p
        style={{
            color: "var(--ctext2)",
            padding: "0 32px",
            margin: "4px auto"
        }}
        {...props}/>

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
                        postId={post.id}
                        maxCharacters={PREVIEW_NUM_CHAR}
                        className="blog-post-preview-markdown"
                        components={{
                            h1: PostPreviewH1,
                            p: PostPreviewP
                        }}
                    />
                </Link>
                <Link to={post.path} className="blog-post-read-more">
                    Read more
                </Link>
                {/* <br className="blog-separator" /> */}
            </div>
        )}
    </div>
}
