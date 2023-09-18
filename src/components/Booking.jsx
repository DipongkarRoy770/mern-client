import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import TableData from "./TableData";
import Swal from "sweetalert2";


const Booking = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const url = `http://localhost:5000/booking?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/booking/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    const remaining = bookings.filter(data => data._id !== id)
                    setBookings(remaining)
                }
            })
       



    }
    return (
        <div>
            <h2 className="text-3xl text-center font-semibold"> Booking Data : {bookings.length}</h2>

            <table className="table">
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>image</th>
                        <th>name</th>
                        <th>price</th>
                        <th>Date</th>
                        <th>Statas</th>
                    </tr>
                </thead>
                {
                    bookings.map(books => <TableData
                        key={books._id}
                        books={books}
                        handleDelete={handleDelete}
                    ></TableData>)
                }

            </table>

        </div>
    );
};

export default Booking;