import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

import './styles.css'


const Image = (postId = null, { node, ...props }) => {
    // console.log(postId, props.src)
    // console.log(`https://raw.githubusercontent.com/daalgi/my-site/main/posts/${postId}/${props.src}`)
    console.log(props.src.includes('https://')
        ? props.src
        : `https://raw.githubusercontent.com/daalgi/my-site/main/posts/${postId}/${props.src}`)
    if (!postId)
        return <img {...props} />

    return <img
        data-loading="lazy"
        {...props}
        src={props.src.includes('https://')
            ? props.src
            : `https://raw.githubusercontent.com/daalgi/my-site/main/posts/${postId}/${props.src}`
            //https://raw.githubusercontent.com/daalgi/my-site/main/posts/001/010-global-fem.png
        }

    />
}

export default ({
    file, postId = null, maxCharacters = null, components = null, className = null
}) => {
    const [markdown, setMarkdown] = useState("")

    useEffect(() => {
        if (!file || !postId) return
        fetch(file)
            .then(res => res.text())
            .then(text => setMarkdown(text))
            .catch(err => console.log(err))
    }, [])

    // console.log(markdown)
    return <div className="md-section">
        <ReactMarkdown
            className={className || "md-container"}
            components={{
                img: ({ node, ...props }) =>
                    Image(postId, { node, ...props }),
                ...components
            }}
        >
            {!maxCharacters
                ? markdown
                : markdown.slice(0, maxCharacters) + '...'}
        </ReactMarkdown>
    </div>
}

