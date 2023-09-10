import person from '../assets/images/about_us/person.jpg'
import parts from '../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mt-6">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative scale-95 duration-500 hover:scale-100'>
                <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                <img src={parts} className="w-1/2 absolute right-5 top-1/2 rounded-lg shadow-2xl border-4 border-teal-300" />
                </div>
                <div className='lg:w-1/2 mt-24 md:mt-16'>

                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <p>
                        the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.
                    </p>
                    <button className="btn btn-primary mt-5">Get More Info</button>

                </div>
            </div>
        </div>

    );
};

export default About;
