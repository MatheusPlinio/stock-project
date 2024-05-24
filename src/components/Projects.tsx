import Carousel from "./Carrousel";

const items = [
    { title: 'Repository', description: 'Description of the repository' },
    { title: 'Project', description: 'Description of the project' },
    { title: 'Other', description: 'Description of the other item' }
];

const slides = [
    {
        project: "localhost",
        link: "/",
        image: "/python.svg"
    }, {
        project: "localhost",
        link: "/",
        image: "/python.svg"
    }, {
        project: "localhost",
        link: "/",
        image: "/python.svg"
    }, {
        project: "localhost",
        link: "/",
        image: "/python.svg"
    }, {
        project: "localhost",
        link: "/",
        image: "/python.svg"
    }, {
        project: "localhost",
        link: "/",
        image: "/python.svg"
    },
    {
        project: "localhost",
        link: "/",
        image: "/python.svg"
    }
]

export default function Projects() {
    return (
        <div>
            <div className="m-2 bg-gray-800 w-2/4 p-5 rounded-e-full">
                <h1 className="text-3xl font-semibold text-white text-end m-2">Projects</h1>
            </div>
            <div className="flex justify-center">
                <Carousel autoSlide autoSlideInterval={10000} slides={slides} />
            </div>
        </div>
    )
}