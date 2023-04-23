import React, { useState } from 'react'

const AgeCalulator = () => {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [age, setAge] = useState(0);
    const [show, setShow] = useState(false);

    const calculateAge = (e) => {
        e.preventDefault();
        // Calculate the age based on the birthdate
        const birthdate = new Date(`${year}-${month}-${day}`);
        const today = new Date();
        const diff = today - birthdate;
        const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
        setAge(age);
        setShow(true);
    };

    return (
        <div className='container-sm'>
            <h1 className='mb-3'>Age Calculator</h1>
            <hr />
            <div className="row">
                <div className="col-md-6 text-center">
                    <form onSubmit={calculateAge} className='form'>
                        <input
                            type="number"
                            id="day"
                            placeholder='Enter Day'
                            value={day}
                            onChange={(e) => setDay(e.target.value)}
                            className='form-control mb-3'
                        />
                        <input
                            type="number"
                            placeholder='Enter Month'
                            id="month"
                            value={month}
                            onChange={(e) => setMonth(e.target.value)}
                            className='form-control mb-3'
                        />
                        <input
                            type="number"
                            placeholder='Enter Year'
                            id="year"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            className='form-control mb-3'
                        />
                        <button type="submit" className='btn btn-primary mb-3' >Calculate Age</button>
                    </form>

                </div>
                <div className="col-md-6">
                    <h3>Your age is</h3>
                    {
                        show ? (
                            <h4>{age}</h4>
                        ) : null
                    }
                </div>
            </div>
        </div>
    );
}
export default AgeCalulator