import React, { useEffect, useRef, useState } from "react";

const Enquery = () => {
    const [formData, setFormData] = useState()
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [fnameErr, setFnameErr] = useState('')
    const [lnameErr, setLnameErr] = useState('')
    const [mobileErr, setMobileErr] = useState('')
    const [emailErr, setEmailErr] = useState('')

    const handleChange = (event) => {
        setFname(fname)
        setLname(lname)
        setMobile(mobile)
        setEmail(email)
        setFnameErr(fnameErr)
        setLnameErr(lnameErr)
        setMobileErr(mobileErr)
        setEmailErr(emailErr)
        const { name, value } = event.target;
    }

    const validation = () => {
        let fnameErr = ''
        let lnameErr = ''
        let mobileErr = ''
        let emailErr = ''

        if (fname.length <= 3) {
            fnameErr = 'First name should be atleast min 3 char';
        }
        if (lname.length <= 3) {
            lnameErr = 'Last name should be atleast min 3 char';
        }
        if (mobile.length <= 10) {
            mobileErr = 'Mobile should be atleast min 3 char';
        }
        if (!email.includes('@')) {
            emailErr = 'Email should be valid';
        }

        if (fnameErr || lnameErr || mobileErr || emailErr) {
            setFnameErr(fnameErr)
            setLnameErr(lnameErr)
            setMobileErr(mobileErr)
            setEmailErr(emailErr)
        } else {
            setFnameErr(fnameErr)
            setLnameErr(lnameErr)
            setMobileErr(mobileErr)
            setEmailErr(emailErr)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validation();
    }

    const lnameOn = useRef(null);

    useEffect(() => {
        lnameOn.current.focus()
    }, [fname,
        lname,
        mobile,
        email,
        fnameErr,
        lnameErr,
        mobileErr,
        emailErr])

    return (
        <>
            <div className="col-md-4 mx-auto appearContent">
                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" name="fname" id="fname" placeholder="Enter First Name" onChange={handleChange} value={fname} />
                        <label>First Name</label>
                        <div className="text-danger text-start">{fnameErr}</div>
                    </div>
                    <div className="form-floating mb-3">
                        <input ref={lnameOn} type="text" className="form-control" name="lname" id="lname" placeholder="Enter Last Name" onChange={handleChange} value={lname} />
                        <label>Last Name</label>
                        <div className="text-danger text-start">{lnameErr}</div>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="number" className="form-control" name="mobile" id="mobile" placeholder="Enter Mobile No." onChange={handleChange} value={mobile} />
                        <label>Mobile No</label>
                        <div className="text-danger text-start">{mobileErr}</div>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" name="email" id="email" placeholder="Enter your Email" onChange={handleChange} value={email} />
                        <label>Enter your email</label>
                        <div className="text-danger text-start">{emailErr}</div>
                    </div>
                    <div className="form-floating mb-3">
                        <button type="submit" className="btn btn-success btn-lg" style={{ width: '100%', padding: '14px' }}>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Enquery;