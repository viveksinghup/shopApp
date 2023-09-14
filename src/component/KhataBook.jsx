import React, { useState } from "react"

const KhataBook = () => {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        vivek: '',
        vikas: '',
        Shubo: '',
        Sandip: '',
        Sharmad: ''
    })

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((dues) => ({
            ...dues, [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    }


    return (<><div className="container appearContent">
        <div className="rounded bg-body-tertiary d-flex justify-content-between align-items-center p-3 mb-4">
            <h5 className='m-0'>Total Balance Dues showing</h5>
            <div>

                <ul className="pagination m-0 align-items-center justify-content-center">
                    <button className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" type="button" onClick={() => { setShowForm(!showForm) }}>
                        Show Form
                    </button>
                </ul>
            </div>
        </div>
        {showForm ? <>
            <form className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 flex-wrap" onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="vivek" id="vivek" placeholder="Enter Vivek Due" value={formData.vivek} onChange={handleChange} />
                    <label>Vivek Due</label>
                    <div className="text-danger text-start"></div>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="vikas" id="vikas" placeholder="Enter Vikas Due" value={formData.vikas} onChange={handleChange} />
                    <label>Vikas Due</label>
                    <div className="text-danger text-start"></div>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="Shubo" id="Shubo" placeholder="Enter Shubo" value={formData.Shubo} onChange={handleChange} />
                    <label>Shubo</label>
                    <div className="text-danger text-start"></div>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="Sandip" id="Sandip" placeholder="Enter Sandip Due" value={formData.Sandip} onChange={handleChange} />
                    <label>Sandip Due</label>
                    <div className="text-danger text-start"></div>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="Sharmad" id="Sharmad" placeholder="Enter Sharmad Due" value={formData.Sharmad} onChange={handleChange} />
                    <label>Sharmad Due</label>
                    <div className="text-danger text-start"></div>
                </div>
                <div className="form-floating mb-3">
                    <button className="btn-block btn btn-primary btn-lg px-4" type="submit">
                        Add Record
                    </button>
                </div>
            </form></> : null}
    </div></>)
};
export default KhataBook;
