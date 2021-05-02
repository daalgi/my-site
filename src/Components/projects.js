/**
 * project object structure:
 *  { title, description, post, github, web, certificate, tags, technologies }
 */
const projects = [
    {
        title: "Engineering Toolbag",
        description: "Apps to help with some simple, but yet sometimes tedious, tasks for engineers",
        web: "https://engineertoolbag.web.app/",
        tags: [
            "web-app",
            "engineering"
        ],
        technologies: [
            "html",
            "css",
            "javascript",
            "react"
        ]
    },
    {
        title: "Sudoku",
        description: "Sudoku game with different difficulty levels and cool highlighting",
        web: "https://daalgi.github.io/react-sudoku/",
        tags: [
            "web-app",
            "game"
        ],
        technologies: [
            "html",
            "css",
            "javascript",
            "react"
        ]
    },
    {
        title: "Engineering portfolio map",
        description: "Summary of the projects that I've participated in by country and shown in a world map",
        web: "https://daalgi.github.io/engineering-portfolio-map/",
        tags: [
            "visualization"
        ],
        technologies: [
            "html",
            "css",
            "javascript",
            "react"
        ]
    },
    {
        title: "Compounding",
        description: "Calculator to estimate the compounding effect on your investments",
        web: "https://daalgi.github.io/compounding/",
        tags: [
            "web-app",
            "finance"
        ],
        technologies: [
            "html",
            "css",
            "javascript",
            "react"
        ]
    },
    {
        title: "Algorithms",
        description: "Collection of algorithms in python for self-study",
        github: "https://github.com/daalgi/algorithms",
        tags: [
            "computer science"
        ],
        technologies: [
            "python"
        ]
    },
    {
        title: "Data structures",
        description: "Collection of data structures in python for self-study",
        github: "https://github.com/daalgi/data-structures",
        tags: [
            "computer science"
        ],
        technologies: [
            "python"
        ]
    },
    {
        title: "My site",
        description: "This site",
        github: "https://github.com/daalgi/my-site",
        tags: [
            "blog", "portfolio"
        ],
        technologies: [
            "html",
            "css",
            "javascript",
            "react",
            "markdown"
        ]
    },
    {
        title: "py-sudoku",
        description: "Library to read, generate and solve sudokus",
        github: "https://github.com/daalgi/py-sudoku",
        tags: [
            "library",
        ],
        technologies: [
            "python"
        ]
    },
    {
        title: "snm-js",
        description: "Simple Numerical Methods Javascript library (snm-js). It contains a set of useful numerical methods for the development of engineering projects",
        github: "https://github.com/daalgi/snm-js",
        tags: [
            "library",
        ],
        technologies: [
            "javascript"
        ]
    },
    {
        title: "freeCodeCamp",
        description: "Full Stack Certification by freeCodeCamp",
        certificate: "https://www.freecodecamp.org/certification/daalgi/full-stack",
        tags: [
            "certification"
        ],
        technologies: [
            "html", "css", "javascript", "react", "d3", "node", "mongodb"
        ]
    },
    {
        title: "Deep Learning Specialization",
        description: "Deep Learning Specialization certificate by DeepLearning.AI",
        certificate: "https://www.coursera.org/account/accomplishments/specialization/certificate/7HBQM9VJP9FH",
        tags: [
            "certification"
        ],
        technologies: [
            "machine learning", "deep learning", "python", "tensor-flow"
        ]
    },
    {
        title: "Cable-stayed bridge",
        description: "Parametric study and design of a cable-stayed bridge for the thesis of my master's degree in Civil Engineering",
        post: "/blog/post/001/",
        tags: [
            "structural engineering"
        ],
        technologies: [
            "ansys", "excel", "vba", "octave"
        ]
    },
]

export default projects