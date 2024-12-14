import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { backend } from '../axios'
function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
  
    const navigate = useNavigate()

    function validate() {
        if (!username ||  !password) {
            alert("Hamma maydonlarni to'ldiring!");
            return false;
        }
        return true;

    }
    function handleLogin(event) {
        event.preventDefault();
        const isValid = validate()
        if (!isValid) {
            return
        }

        const user = {
            username,
            password,
        }
        setLoading(true)

        backend.post('auth/signin', user, {
            headers: {
                'Content-type': "application/json"
            }
        })
            .then(response => {
                if (response.status == 200) {
                    navigate('/');
                }
            })

            .catch(error => {
                if (error.status == 400) {
                    alert(error.message);
                    return;
                }
            })

            .finally(()=> {setLoading (false)});

    }

    function handleRegister() {
        navigate('/Register')
    }
    return (
        <form className='w-[600px] items-center mx-auto flex flex-wrap bg-blue-400 mb-10 mt-10 '>
            <h1 className='text-center text-white mx-auto mt-5 text-2xl cursor-pointer'>Login sahifasiga xush kelibsiz</h1>
            <input className='w-full mt-10  mb-10 ml-10 mr-10 p-3 rounded-md' type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} placeholder='Enter name...' />
            <input className='w-full mt-10  mb-10 ml-10 mr-10 p-3 rounded-md' type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter password...' />
            <button onClick={handleLogin} className='w-full mt-10  mb-10 ml-10 mr-10 p-3 rounded-md bg-blue-800 text-white disabled = {loading}'>{loading ? "Loading..." : "Login"}</button>
            <h2 onClick={handleRegister} className='text-center text-white mx-auto mb-5 text-2xl cursor-pointer'> Register sahifasiga utish</h2>
        </form>

    )
}

export default Login