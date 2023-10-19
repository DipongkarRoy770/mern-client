import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";


const CheekOut = () => {
    const data = useLoaderData()
    const { price, title, _id,img } = data;
    const { user } = useContext(AuthContext)
    //console.log(data)

    const handleService = (event) => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value
        const date = form.date.value
        const email = user?.email

        const booking = {
            customerName: name,
            email,
            img,
            date,
            price: price,
            service: title,
            service_id: _id,
        }
        //console.log(booking)
        fetch('https://mern-server-qaucfs3ij-dipongkarroy233-gmailcom.vercel.app/booking', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire(
                        'Good job!',
                        'service added sucessfully',
                        'success'
                      )
                }
                //console.log(data)
            })
    }

    return (
        <div className="mt-6">
            <h2 className="text-3xl font-semibold text-center">book service :{title}</h2>
            <form onSubmit={handleService}>
                <div className="flex w-full px-5">
                    <div className="form-control w-full mr-4">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={user?.displayName} className="input input-bordered" />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" />
                    </div>
                </div>
                <div className="flex w-full px-5">
                    <div className="form-control w-full mr-4">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" defaultValue={user?.email} className="input input-bordered" />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">price</span>
                        </label>
                        <input type="text" defaultValue={price} className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control w-full mt-5 px-5">
                    <input type="submit" className="btn btn-info" value="Conform Oder" />
                </div>
            </form>
        </div>
    );
};

export default CheekOut;