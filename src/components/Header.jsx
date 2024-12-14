import React from 'react'
import { useNavigate } from 'react-router-dom'


function Header() {
  const navigate = useNavigate()
    function handlelogout(){
      navigate('/login')
    }
  return (
    <div>
      <header className='header flex flex-row bg-white justify-between items-center p-[30px] dark:text-white dark:bg-[#2B3844] '>
        <div className='container flex flex-row justify-between mx-auto'>
        <h1 className='text-3xl'>Where in the world?</h1>
        <div className='cursor-pointer theme-control flex flex-row gap-2 items-center'>

       <h2 className='text-2xl '>🌙 Dark mode</h2>
       <h2 className='text-2xl' onClick={handlelogout}>Log out➡️</h2>
        </div>
        </div>
      </header>
    </div>
  )
}

export default Header