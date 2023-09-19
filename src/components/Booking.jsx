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
    }, [url])

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
    const handleBookingConfrom = (id) => {
        fetch(`http://localhost:5000/booking/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status:'confirm'})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== id)
                    const update = bookings.find(booking => booking._id === id)
                    update.status = "confirm"
                    const nowBooking = [update, ...remaining]
                    setBookings(nowBooking)
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
                        <th>Status</th>
                    </tr>
                </thead>
                {
                    bookings.map(books => <TableData
                        key={books._id}
                        books={books}
                        handleDelete={handleDelete}
                        handleBookingConfrom={handleBookingConfrom}
                    ></TableData>)
                }

            </table>

        </div>
    );
};

export default Booking;