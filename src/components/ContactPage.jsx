

const ContactPage = () => {
    return (
        <div className="md:flex justify-evenly items-center mx-auto mt-10">
            <div className="bg-rose-100 px-5 py-6 mt-4 text-center w-60 h-24">
                <p>We are open monday-friday</p>
                <h2 className="text-xl">7:00 am - 9:00 pm</h2>

            </div>
            <div className="bg-rose-100 px-5 py-6 mt-4 text-center w-60 h-24">
                <p>Have a question?</p>
                <h2 className="text-xl">+2546 251 2658</h2>

            </div>
            <div className="bg-rose-100 px-5 py-6 mt-4 text-center w-60 h-24">
                <p>Need a repair? our address</p>
                <h2 className="text-xl">Liza Street, New York</h2>

            </div>
        </div>
    );
};

export default ContactPage;