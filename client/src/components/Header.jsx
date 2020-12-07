import React from "react";
import Axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from "react-router-dom";
import {Typography} from "@material-ui/core";
import Login from "./Login"
import Signup from "./Signup"
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    header:{
        display: "flex",
        height: 60,
    },
    title: {
        marginLeft: 450,
        marginTop: 5,
        fontFamily: 'Josefin Sans',
        cursor: "pointer"
    },
    login:{
        fontSize: 20,
        marginLeft: "auto",
        marginTop: 10,
        marginRight: 30,
        cursor: "pointer",
        border: "1px solid grey",
        borderRadius: 5,
        height: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    logout: {
        fontSize: 20,
        marginLeft: 280,
        marginRight: 10,
        marginTop: 20,
        cursor: "pointer",
    }
}));

export default function Header(props){
    console.log(props);

    // const [userData, setUserData] = React.useState("Login!");
    const [openLoginForm, setOpenLoginForm] = React.useState(false);
    const [openSignUpForm, setOpenSignUpForm] = React.useState(false);
    const [registerUsername, setRegisterUsername] = React.useState("");
    const [registerPassword, setRegisterPassword] = React.useState("");
    const [loginUsername, setLoginUsername] = React.useState("");
    const [loginPassword, setLoginPassword] = React.useState("");

    let style = useStyles();
    const history = useHistory();

    const goToHome = () => {
        history.push("/");
    }

    const loginForm = () => {
        setOpenLoginForm(!openLoginForm)
    }

    const signUpForm = () => {
        setOpenSignUpForm(!openSignUpForm);
    }

    // const handleUserData = (name) => {
    //     setUserData(name);
    //     props.handleUser(name);
    // }

    const handleRegisterUsername = (name) => {
        setRegisterUsername(name);
    }

    const handleRegisterPassword = (password) => {
        setRegisterPassword(password);
    }

    const handleLoginUsername = (name) => {
        setLoginUsername(name);
    }

    const handleLoginPassword = (password) => {
        setLoginPassword(password);
    }

    const register = () => {
        Axios({
            method: "POST",
            data: {
                username: registerUsername,
                password: registerPassword,
            },
            withCredentials: true,
            url: "http://localhost:5000/api/v1/register",
        }).then((res) => console.log(res));
    };
    const login = () => {
        Axios({
            method: "POST",
            data: {
                username: loginUsername,
                password: loginPassword,
            },
            withCredentials: true,
            url: "http://localhost:5000/api/v1/login",
        }).then((res) => console.log(res)).then(props.getUser())
            .catch(err => console.log(err));
    };

        // const getUser = () => {
        //     Axios({
        //         method: "GET",
        //         withCredentials: true,
        //         url: "http://localhost:5000/api/v1/user",
        //     }).then((res) => {
        //         if(res.data !== "No User Exists" || !res.data){
        //             props.handleUser("Login");
        //             console.log(res.data);
        //         }
        //         // else{
        //         //     props.handleUser("Login");
        //         //     console.log(res.data);
        //         // }
        //         props.handleUser(res.data);
        //     });
        // };

    const logout = () => {
        props.logout();
        if(window.location.href !== "http://localhost:3000/"){
            history.push("/");
        }
    }

    return(
        <div className={style.header}>
            {/*<Button onClick={props.getUser}>getUser</Button>*/}
            <Typography variant={"h3"} className={style.title} onClick={goToHome} >Klenty Assignment</Typography>
            <span id={"logout"} className={style.logout} onClick={logout}>Logout</span>
            <span id="profile" className={style.login} onClick={loginForm}>{props.userdata}</span>
            {openLoginForm ?
                <Login
                    open={openLoginForm}
                    toggle={loginForm}
                    username={loginUsername}
                    setUsername={handleLoginUsername}
                    password={loginPassword}
                    setPassword={handleLoginPassword}
                    login={login}
                    handleUserData={props.handleUser}
                    signUp={signUpForm}
                    getUser={props.getUser}
                /> : null}
            {openSignUpForm ?
                <Signup
                    open={openSignUpForm}
                    username={registerUsername}
                    setUsername={handleRegisterUsername}
                    password={registerPassword}
                    setPassword={handleRegisterPassword}
                    toggle={signUpForm}
                    register={register}
                /> : null}
        </div>
    )

}