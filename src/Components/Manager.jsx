import React, { useEffect, useRef, useState } from 'react'

const Manager = () => {
    const ref = useRef();
    const [form, setForm] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])
    
    // Loading saved passwords
    useEffect(() => {
      let password = localStorage.getItem("password")
      if(password){
        setPasswordArray(JSON.parse(password));
      }
      else{
        setPasswordArray([])
      }
    }, [])
    
    const showPassword = (params) => {
        console.log(ref.current.src);
        if (ref.current.src.includes("/icons/hidden.png")) {
            ref.current.src = "./icons/eye.png"
        }
        else {
            ref.current.src = "./icons/hidden.png"
        }
    }
// Saving Passwords
    const savePassword = () =>{
        console.log(form)
    }
    const changeHandler = (e)=>{
        let newForm = {...form,[e.target.name]:e.target.value}
        setForm(newForm)
    }

    return (
        <>
            <div className="absolute top-0 -z-10 h-full w-full bg-white"><div className="absolute bottom-auto left-auto right-0 top-0 h-[1000px] w-[900px] -translate-x-[20%] translate-y-[10%] rounded-full bg-[rgba(92,248,87,0.5)] opacity-50 blur-[80px]"></div></div>

            {/* The container begins from here */}
            <div className="container mx-auto px-40 py-20">
                <h1>
                    <div className='font-bold logo text-2xl text-center'>
                        <span className='text-green-600'>&lt;</span>
                        Pass
                        <span className='text-green-900'>OP/ &gt;</span>
                    </div>
                </h1>
                <p className='text-green-900 text-center'>Your own password manager</p>

                {/* Content of the container */}
                <div className=' flex flex-col p-4 text-black text-md gap-4 items-center'>
                    {/* Website Link */}
                    <input onChange={changeHandler} name='site' value={form.site} type="text" placeholder='Enter website URL' className='bg-white rounded-full border-1 border-green-900 w-full px-4 py-1' />
                    <div className='flex w-full gap-5'>
                        {/* Username and Passowrd */}
                        <input onChange={changeHandler} name='username' value={form.username} type="text" placeholder='Username' className='bg-white rounded-full border-1 border-green-900 w-full px-4 py-1' />
                        <div className="relative w-full">
                            <input onChange={changeHandler} name='password' value={form.password} type="text" placeholder='Password' className='bg-white rounded-full border-1 border-green-900 w-full px-4 py-1' />
                            <span className='absolute right-2 top-1.5 cursor-pointer'
                                onClick={showPassword}>
                                <img ref={ref} width={21} src="./icons/eye.png" alt="" />
                            </span>
                        </div>
                    </div>

                    {/* Add Password Border */}
                    <button onClick={savePassword} className='flex justify-center items-center gap-3 bg-green-500 rounded-full hover:bg-green-600  w-fit px-4 py-1 border-1 border-y-green-950'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover"
                            style={{ width: 30 + "px", height: 30 + "px", }}>
                        </lord-icon>
                        Add Password
                    </button>


                </div>
            </div>
        </>
    )
}

export default Manager
