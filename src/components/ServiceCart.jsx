import { Link } from "react-router-dom";


const ServiceCart = ({ cart }) => {
    const { _id, title, img, price } = cart;
    //console.log(_id)

    return (
        <div className="card w-96 bg-indigo-100 ">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body text-xl">
                <h2 className="card-title">{title}</h2>
                <p>{price}</p>
                <div className="card-actions">
                    <Link to={`/cheekout/${_id}`}>
                        <button className="btn btn-error">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCart;