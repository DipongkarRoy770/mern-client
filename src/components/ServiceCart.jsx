

const ServiceCart = ({ cart }) => {
    const { title, img, price } = cart;

    return (
        <div className="card w-96 bg-indigo-100 ">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body text-xl">
                <h2 className="card-title">{title}</h2>
                <p>{price}</p>
                <div className="card-actions">
                    <button className="btn btn-error">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCart;