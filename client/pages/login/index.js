import { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/router'

import Layout from '../../components/layout'
import { login } from "../../store/loginReducer"
import { CallAPIPOST } from "../../shared/APIs"

const Login = ({ isLogin, login }) => {
    const [userName, setUserName] = useState("")
    const [passWord, setPassWord] = useState("")
    const [cookies, setCookie] = useCookies(['jwt'])
    const [name, setName] = useState('khách')
    const [requireUserName, setRequireUserName] = useState(false)
    const [requirePassWord, setRequirePassWord] = useState(false)
    const [serverError, setServerError] = useState(false)
    const router = useRouter()
    useEffect(() => {
        setName(localStorage.getItem('name'))
    }, [])

    const handleLogin = async () => {
        console.log("userName ", userName)
        if (!userName) 
            setRequireUserName(true)
        else
            setRequireUserName(false)
        if (!passWord) 
            setRequirePassWord(true)
        else
            setRequirePassWord(false)
        
        const data = await CallAPIPOST('/login', { username: userName, password: passWord })
        if (data.success) {
            setCookie('jwt', data.token, { path: '/' })
            login()
            setName(data.username)
            localStorage.setItem('name', data.username)
            return router.push('/profile')
        } else {
            setServerError(true)
        }
    }
    return (
        <Layout>
            {!isLogin && <div className="p-20 flex flex-col-reverse md:flex-row items-center justify-center bg-gray-200">
                <div className="content text-3xl text-center md:text-left">
                    <h1 className="text-5xl text-blue-500 font-bold mt-2">Lotus</h1>
                    <p>Log in to the system to buy products easier</p>
                </div>
                <div className="container mx-auto flex flex-col items-center">
                    <div className="shadow-lg w-80 p-4 flex flex-col bg-white rounded-lg">
                        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Email or Phone Number" className={`mb-3 py-3 px-4 border ${requireUserName ? `border-red-400` : `border-gray-400`} focus:outline-none rounded-md focus:ring-1 ring-cyan-500`} />
                        <input type="password" value={passWord} onChange={(e) => setPassWord(e.target.value)} placeholder="Password" className={`mb-3 py-3 px-4 border ${requirePassWord ? `border-red-400` : `border-gray-400`} focus:outline-none rounded-md focus:ring-1 ring-cyan-500`} />
                        <button onClick={() => handleLogin()} className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold text-lg">Login</button>
                        {serverError && !requireUserName && !requirePassWord &&  <a className="text-red-400 text-center my-2">Authentication failed</a>}
                        <a className="text-blue-400 text-center my-2">Forgot Pasword?</a>
                        <hr />
                        <button className="w-full bg-green-400 mt-8 mb-4 text-white p-3 rounded-lg font-semibold text-lg">Create New Account</button>
                    </div>
                </div>
            </div>}
            {isLogin && <div className="p-20 flex flex-col-reverse md:flex-row items-center justify-center bg-gray-200">
                <div className="content text-3xl text-center md:text-left">
                    <p>Wellcome {name} to Lotus, Have a nice day</p>
                </div>
            </div>}
        </Layout>
    )
}
const mapStateToProps = (state) => ({
    isLogin: state.loginReducer.isLogin
})

const mapDispatchToProps = { login }

export default connect(mapStateToProps, mapDispatchToProps)(Login)