


const TableData = ({ books, handleDelete, handleBookingConfrom }) => {
    const { _id, title, price, customerName, img, date, status } = books;
    //console.log(books)
    return (
        <tbody>
            <tr>
                <th>
                    <button onClick={() => handleDelete(_id)} className="btn btn-square btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
                <td>
                    <div className="avatar">
                        <div className="w-24 rounded">
                            {img && <img src={img} />}
                        </div>
                    </div>
                </td>
                <td>{customerName}</td>
                <td>{title}</td>
                <td>{price}</td>
                <td>{date}</td>
                <th>
                    {
                        status === 'confirm' ? <span className="text-red-500 font-semibold"> Confirmed</span> : <button onClick={() => handleBookingConfrom(_id)} className="btn btn-ghost btn-xs">pleace Confrom</button>}
                </th>
            </tr>
        </tbody>

    );
};

export default TableData;