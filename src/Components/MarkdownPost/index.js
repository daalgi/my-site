import {useState, useEffect} from 'react'
import ReactMarkdown from 'react-markdown'

export default ({ file }) => {
    const [markdown, setMarkdown] = useState("")

    useEffect(() => {
        fetch(file)
        .then(res => res.text())
        .then(text => setMarkdown(text))
    })
    return <ReactMarkdown >{markdown}</ReactMarkdown>
}

