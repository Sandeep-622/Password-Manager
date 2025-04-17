import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const ref = useRef();
    const passwordRef = useRef();
    const [form, setForm] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])
    const notify = (item) => toast(item);

    // Copy items funciton
    const copyItem = (text) => {
        notify("Copied to Clipboard!");
        navigator.clipboard.writeText(text);
    }

    // Loading saved passwords
    useEffect(() => {
        let password = localStorage.getItem("password")
        if (password) {
            setPasswordArray(JSON.parse(password));
        }
        else {
            setPasswordArray([])
        }
    }, [])


    // Function to show password
    const showPassword = (params) => {
        if (ref.current.src.includes("/icons/hidden.png")) {
            ref.current.src = "./icons/eye.png"
            passwordRef.current.type = "password"
        }
        else {
            ref.current.src = "./icons/hidden.png"
            passwordRef.current.type = "text"
        }
    }
    // Saving Passwords
    const savePassword = () => {
        let newPasswordArray = [...passwordArray, { ...form, id: uuidv4() }]
        localStorage.setItem("password", JSON.stringify(newPasswordArray))
        setPasswordArray(newPasswordArray)
        setForm({ site: "", username: "", password: "", id: "" })
        notify("Password Saved");

    }
    const changeHandler = (e) => {
        let newForm = { ...form, [e.target.name]: e.target.value }
        setForm(newForm)
    }

    // Edit Passwords
    const editPasswords = (id) => {
        let newPasswordArray = [...passwordArray]
        newPasswordArray = newPasswordArray.filter(item =>{
            if(item.id === id){
                setForm(item);
            }
            return item.id !== id
        })
        localStorage.setItem("password", JSON.stringify(newPasswordArray))
        setPasswordArray(newPasswordArray)
    }


    // Delete Passwords
    const deletePasswords = (id) => {
        let c = confirm("Do you want to delete the password")
        if(c){

            let newPasswordArray = [...passwordArray]
            newPasswordArray = newPasswordArray.filter(item => (item.id !== id) )
            localStorage.setItem("password", JSON.stringify(newPasswordArray))
            setPasswordArray(newPasswordArray)
        }
    }


    return (
        <>
            <div className="absolute top-0 -z-10 h-full w-full bg-white"><div className="absolute bottom-auto left-auto right-0 top-0 h-[900px] w-[900px] -translate-x-[20%] translate-y-[10%] rounded-full bg-[rgba(92,248,87,0.5)] opacity-50 blur-[80px]"></div></div>

            {/* The container begins from here */}
            <div className="container mx-auto px-40 py-20 min-h-[100vh]">
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
                            <input ref={passwordRef} onChange={changeHandler} name='password' value={form.password} type="password" placeholder='Password' className='bg-white rounded-full border-1 border-green-900 w-full px-4 py-1' />
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

                {/* Displaying Saved Passwords */}
                <div className="passwords">
                    <h2 className=' font-bold text-xl py-4'>Your Passwords</h2>

                    {/* Password Table */}
                    {passwordArray.length === 0 && <div>No passwords to display</div>}
                    {passwordArray.length !== 0 && <table className="w-full text-sm rounded-lg overflow-hidden  ">
                        <thead className="text-sm text-white bg-green-800">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Site
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Username
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Password
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className='text-black bg-green-200'>
                            {passwordArray.map((item) => {
                                return (
                                    <tr key={item.id} className=''>

                                        {/* Site URL */}
                                        <td className='text-sm w-50  text-gray-900 px-2 py-4 '>
                                            <div className='flex justify-start gap-2 px-4'>

                                                <div>
                                                    <a href={item.site} target='_black'>{item.site}</a>
                                                </div>
                                                <div className='copyIcons' onClick={() => copyItem(item.site)}>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/xpgofwru.json"
                                                        trigger="hover"
                                                        style={{ width: "20px", height: "20px" }}
                                                    >
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='text-sm  text-gray-900 px-2 py-4 text-center w-25 '>

                                            {/*UserName */}
                                            <div className='flex justify-start gap-2 px-4'>

                                                <div>
                                                    {item.username}
                                                </div>
                                                <div className='copyIcons' onClick={() => copyItem(item.username)}>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/xpgofwru.json"
                                                        trigger="hover"
                                                        style={{ width: "20px", height: "20px" }}
                                                    >
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>

                                        {/*Password*/}
                                        <td className='text-sm  text-gray-900 px-2 py-4 text-center w-25'>
                                            <div className='flex justify-start gap-2 px-4'>
                                                <div>
                                                    {item.password}
                                                </div>
                                                <div className='copyIcons' onClick={() => copyItem(item.password)}>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/xpgofwru.json"
                                                        trigger="hover"
                                                        style={{ width: "20px", height: "20px" }}
                                                    >
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>

                                        {/*Actions*/}
                                        <td className='text-sm  text-gray-900 px-2 py-4 text-center w-25'>
                                            <div className='flex justify-between gap-2 w-18 mx-auto'>
                                                <div onClick={()=>editPasswords(item.id)}>
                                                    <img className='cursor-pointer' src="./icons/edit.png" alt="edit" width={20} />
                                                </div>
                                                <div onClick={()=>deletePasswords(item.id)} className='cursor-pointer'>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/skkahier.json"
                                                        trigger="hover"
                                                        style={{ width: "20px", height: "20px" }}>
                                                    </lord-icon>
                                                </div>

                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>}
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Manager
