import Body from '../body'
import {useState} from 'react'

const Home : React.FC= ()=> {
    const [isLoggedIn , setisloggedin]=useState<boolean>(false)

    function setuser(val:boolean){
        setisloggedin(val)
    }

    return <Body />
}

export default Home;