import { useState } from 'react';

function MultiInputForm() {
    const [inputs, setInputs] = useState({})
    const handleSubmit = event => {
        event.preventDefault();
        alert(JSON.stringify(inputs));
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter your Name: 
                <input
                    type="text"
                    name="username"
                    value={inputs.username || ""}
                    onChange={handleChange}
                />
            </label>
            <label>
                Enter your Age: 
                <input
                    type="text"
                    name="age"
                    value={inputs.age || ""}
                    onChange={handleChange}
                />
            </label>
            <label>
                Enter your email: 
                <input
                    type="text"
                    name="email"
                    value={inputs.email || ""}
                    onChange={handleChange}
                />
            </label>
            <label>
                address: 
                <textarea
                type="text"
                name="address"
                value={inputs.address || ""}
                onChange={handleChange}
                />
            </label>
            <label>
                gender: 
                <select name='gender' value={inputs.gender} onChange={handleChange}> 
                    <option value="m">Male</option>
                    <option value="f">Female</option>
                </select>
            </label>
            <input type='submit'/>
        </form>
    )
}

export default MultiInputForm;
