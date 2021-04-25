import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

import './styles.css'


export default ({
    file, maxCharacters = null, components = null, className = null
}) => {
    const [markdown, setMarkdown] = useState("")

    useEffect(() => {
        if (!file) return
        fetch(file)
            .then(res => res.text())
            .then(text => setMarkdown(text))
            .catch(err => console.log(err))
    }, [])

    console.log(markdown)
    return <ReactMarkdown
        className={className || "md-container"}
        components={components}
    >
        {!maxCharacters
            ? markdown
            : markdown.slice(0, maxCharacters) + '...'}
    </ReactMarkdown>
}

