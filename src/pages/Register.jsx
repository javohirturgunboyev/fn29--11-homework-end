import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { backend } from '../axios'
function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    function validate() {
        if (!username || !email || !password || !repassword) {
            alert("Hamma maydonlarni to'ldiring!");
            return false;
        }
        if (password !== repassword) {
            alert("Parollar mos kelmadi!");
            return false;
        }
        return true;

    }
    function handleRegister(event) {
        event.preventDefault();
        const isValid = validate()
        if (!isValid) {
            return
        }

        const user = {
            username,
            email,
            password,
        }
        setLoading(true);

        backend.post('auth/signup', user, {
            headers: {
                'Content-type': "application/json"
            }
        })
            .then(response => {
                if (response.status == 200) {
                    navigate('/Login');
                }
            })

            .catch(error => {
                if (error.status == 400) {
                    alert(error.message);
                    return;
                }
            })

            .finally(() => { setLoading(false) });

    }

    function handleLogin() {
        navigate('/Login')
    }
    return (
        <form className='w-[600px] items-center mx-auto flex flex-wrap bg-blue-400 mb-10 mt-10 '>
            <h1 className='text-center text-white mx-auto mt-5 text-2xl cursor-pointer'>Register sahifasiga xush kelibsiz</h1>
            <input className='w-full mt-10  mb-10 ml-10 mr-10 p-3 rounded-md' type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} placeholder='Enter name...' />
            <input className='w-full mt-10  mb-10 ml-10 mr-10 p-3 rounded-md' type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter email...' />
            <div className='flex items-center w-full mr-8'>
                <input className=' mt-10  mb-10 ml-10 mr-10 p-3 rounded-md w-[90%]' type={show ? "text" : "password"} value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter password...' />
                <span className='cursor-pointer ' onClick={() => { setShow(!show) }}>{show ? "hide" : "Show"}</span>
            </div>
            <div className='flex items-center w-full mr-8'>
                <input className=' mt-10  mb-10 ml-10 mr-10 p-3 rounded-md w-full' type={show ? "text" : "password"} value={repassword} onChange={(e) => { setRePassword(e.target.value) }} placeholder='Enter Repassword...' />
                
            </div>
            <button onClick={handleRegister} className='w-full mt-10  mb-10 ml-10 mr-10 p-3 rounded-md bg-blue-800 text-white disabled ={loading}'>{loading ? "Loading..." : "Register"}</button>
            <h2 onClick={handleLogin} className='text-center text-white mx-auto mb-5 text-2xl cursor-pointer'> Login sahifasiga utish</h2>
        </form>

    )
}

export default Register



