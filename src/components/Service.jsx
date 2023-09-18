import { useEffect } from "react";
import { useState } from "react";
import ServiceCart from "./ServiceCart";


const Service = () => {
    const [services, setService] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className="mt-10">
            <div className="text-center">
                <h1 className="text-3xl text-orange-400 font-semibold">Our Service Area</h1>
                <p className="py-6">the majority have suffered alteration in some form, by injected humour,<br /> or randomised words which dont look even slightly believable.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-5 px-8 md:px-24 lg:px-4 mt-5">
                {
                    services.map(cart => <ServiceCart
                        key={cart._id}
                        cart={cart}
                    ></ServiceCart>)
                }
            </div>
        </div>
    );
};

export default Service;