import banner1 from '../assets/images/banner/1.jpg'
import banner2 from '../assets/images/banner/2.jpg'
import banner3 from '../assets/images/banner/3.jpg'
import banner4 from '../assets/images/banner/4.jpg'
import banner5 from '../assets/images/banner/5.jpg'
import banner6 from '../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='absolute top-10 md:top-60 left-12'>
                    <h2 className=' text-3xl md:text-6xl font-bold w-1/2 text-white'>Affordable Price For Car Servicing</h2>
                    <p className='mt-5 md:text-xl text-yellow-200'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='flex md:gap-5 mt-6'>
                        <button className="btn btn-error mr-3">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Project</button>
                    </div>
                </div>
                <img src={banner1} className="w-full" />
                <div className="absolute transform -translate-y-1/2 right-6 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
            <div className='absolute top-10 md:top-60 left-12'>
                    <h2 className=' text-3xl md:text-6xl font-bold w-1/2 text-white'>Affordable Price For Car Servicing</h2>
                    <p className='mt-5 md:text-xl text-yellow-200'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='flex md:gap-5 mt-6'>
                        <button className="btn btn-error mr-3">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Project</button>
                    </div>
                </div>
                <img src={banner2} className="w-full" />
                <div className="absolute transform -translate-y-1/2 right-6 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
            <div className='absolute top-10 md:top-60 left-12'>
                    <h2 className=' text-3xl md:text-6xl font-bold w-1/2 text-white'>Affordable Price For Car Servicing</h2>
                    <p className='mt-5 md:text-xl text-yellow-200'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='flex md:gap-5 mt-6'>
                        <button className="btn btn-error mr-3">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Project</button>
                    </div>
                </div>
                <img src={banner3} className="w-full" />
                <div className="absolute transform -translate-y-1/2 right-6 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
            <div className='absolute top-10 md:top-60 left-12'>
                    <h2 className=' text-3xl md:text-6xl font-bold w-1/2 text-white'>Affordable Price For Car Servicing</h2>
                    <p className='mt-5 md:text-xl text-yellow-200'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='flex md:gap-5 mt-6'>
                        <button className="btn btn-error mr-3">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Project</button>
                    </div>
                </div>
                <img src={banner4} className="w-full" />
                <div className="absolute transform -translate-y-1/2 right-6 bottom-0 ">
                    <a href="#slide3" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
            <div className='absolute top-10 md:top-60 left-12'>
                    <h2 className=' text-3xl md:text-6xl font-bold w-1/2 text-white'>Affordable Price For Car Servicing</h2>
                    <p className='mt-5 md:text-xl text-yellow-200'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='flex md:gap-5 mt-6'>
                        <button className="btn btn-error mr-3">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Project</button>
                    </div>
                </div>
                <img src={banner5} className="w-full" />
                <div className="absolute transform -translate-y-1/2 right-6 bottom-0">
                    <a href="#slide5" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
            <div className='absolute top-10 md:top-60 left-12'>
                    <h2 className=' text-3xl md:text-6xl font-bold w-1/2 text-white'>Affordable Price For Car Servicing</h2>
                    <p className='mt-5 md:text-xl text-yellow-200'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='flex md:gap-5 mt-6'>
                        <button className="btn btn-error mr-3">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Project</button>
                    </div>
                </div>
                <img src={banner6} className="w-full" />
                <div className="absolute transform -translate-y-1/2 right-6 bottom-0">
                    <a href="#slide6" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;