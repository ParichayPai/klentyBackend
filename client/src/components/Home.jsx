import React from "react";
import { useHistory } from 'react-router-dom';
import {makeStyles} from "@material-ui/core/styles";
import Header from "./Header"
import AddButton from "./AddButton"
import PostCard from "./PostCard"
import Axios from "axios";
const backendUrl = "http://localhost:5000/api/v1/"

const useStyles = makeStyles((theme) => ({
   home:{
       display:"flex",
       flexDirection: "column",
       justifyContent:"center",
       flexWrap: "wrap",
    },
}));


export default function Home(){
    const history = useHistory();
    const style = useStyles();

    const [postList, setPostList] = React.useState([]);
    const [user, setUser] = React.useState("Login");

    const handleUser = (name) => {
        setUser(name);
    }

    const getData = () => {
        fetch(backendUrl+"posts", {
            method : "get",
        }).then(res => res.json())
            .then(res2 => {setPostList(res2)});
    }

    React.useEffect(() => {
        getData();
    }, []);


    const saveData = (title, description, username) => {
        Axios.post(backendUrl+"posts/", {
            title,
            description,
            username
        }).then(()=>{getData();console.log("post sent")})
            .catch(err => console.log(err));
    }

    const getUser = () => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:5000/api/v1/user",
        }).then((res) => {
            if(res.data === "No User Exists" || res.data === ""){
                handleUser("Login");
                console.log(res.data);
                return;
            }
            handleUser(res.data);
            console.log("hi", res.data);
            // if(res.data !== "No User Exists"){
            //     handleUser(res.data);
            // }
            // // setUserData(res.data);
            // console.log(res);
        });
    };

    React.useEffect(() => {
        getUser();
        // if(!user){
        //     handleUser("Login");
        // }
    }, []);

    const logout = () => {
        setUser("Login");
        Axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:5000/api/v1/logout",
        }).then((req, res) => {
            // if(res.data !== "No User Exists"){
            //     handleUser(res.data);
            // }
            // setUserData(res.data);
            console.log(res);
            setUser("Login");
        });
    }

    return(
        <>
            <Header handleUser={handleUser} userdata={user} logout={logout} getUser={getUser}/>
            <hr />
            <div className={"appBody"}>
                <AddButton saveData={saveData} user={user}/>
                <hr />
                <div className={style.home}>
                    {(postList.length === 0) ?
                        <div className={"center"}>{"No Posts Added!"}</div>
                        : postList.map((post, index) => {
                            return <PostCard
                                data={post}
                                key={`${post.title}${index}`}
                                index={index}
                                saveData={saveData}
                                getUser={getUser}
                                logout={logout}
                                currentUser={user}
                            />
                        })
                    }
                </div>
            </div>
        </>
    )
}