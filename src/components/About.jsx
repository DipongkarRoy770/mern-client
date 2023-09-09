import person from '../assets/images/about_us/person.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="hero-content flex-col lg:flex-row">
                <img className='lg:w-1/2 rounded border-2 border-sky-500 scale-100 duration-500 hover:scale-95' src={person} />
                <div className='lg:w-1/2 mt-4 pl-4'>
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