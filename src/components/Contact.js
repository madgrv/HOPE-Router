import React from 'react';

export default function Home() {
    return(
        <div>
            <h1>Welcome to the Contact page</h1>
            <h2>this is just a place holder form</h2>
            <div className='container'>
                <form className='form'>
                    <fieldset>
                        <legend className='legend'>Fill the form below</legend>
                            <div className='form-row'>
                                <input 
                                    type='text'
                                    placeholder='Enter your name'
                                    name='Full Name'
                                />
                                <input 
                                    type='text'
                                    placeholder='Enter your email'
                                    name='Email address'
                                />
                            </div>
                    </fieldset>
                    <button type='submit' className='form-button'>Submit</button>
                </form>
            </div>
        </div>
    )
}