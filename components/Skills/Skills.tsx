import {Icon} from '../Icon/Icon';

export const Skills = () => {
    return (


        <section className="mb-24 mx-4">
            <div className="container px-6 flex justify-between flex-wrap gap-48 w-full -mt-36 py-16 px-12 bg-white text-gray-800 rounded-2xl shadow ">

                <div className="flex flex-col items-center flex-1 text-center">
                    <div className="bg-primary p-4 rounded-full mb-8">
                        <Icon iconName="terminal" className="text-white w-6 h-6"/>
                    </div>
                    <h4 className="mb-4 text-portfolio-blue-dark">Programming</h4>
                    <p className="mb-6">I like to code things from scratch, and enjoy bringing ideas to life in the
                        browser.</p>
                    <h6 className="text-portfolio-blue mb-2">Languages I speak:</h6>
                    <p className="mb-6">HTML, CSS, Sass, Javascript/Typescript, Python, C++, Dart</p>
                    <h6 className="text-portfolio-blue mb-2">Tech Tools</h6>
                    <p className="mb-6">HTML, CSS, Sass, Javascript/Typescript, Python, C++, Dart</p>
                    <h6 className="text-portfolio-blue mb-2">Design Tools</h6>
                    <p className="mb-6">HTML, CSS, Sass, Javascript/Typescript, Python, C++, Dart</p>
                </div>

                <div className="flex flex-col items-center text-center flex-1">
                    <div className="bg-primary p-4 rounded-full mb-8">
                        <Icon iconName="book" className="text-white w-6 h-6"/>
                    </div>
                    <h4 className="mb-4 text-portfolio-blue-dark">Interrests</h4>
                    <p className="mb-6">Beside coding and all the interesting IT topics I like to stay outside</p>
                    <h6 className="text-portfolio-blue mb-2">Tech interests
                    </h6>
                    <p className="mb-6">Tech interests
                        Linux, Flutter, WebDevelopment, React</p>
                </div>


            </div>
        </section>
    )
}





