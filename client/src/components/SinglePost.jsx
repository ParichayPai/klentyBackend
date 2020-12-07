import { Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import Comment from "./Comment";
import Axios from "axios";

const backendUrl = "http://localhost:5000/api/v1/"

const useStyles = makeStyles(() => ({
    singleItem: {
        marginLeft: 50,
        marginRight: 50,
    },
    header: {
        display: "flex",
        justifyContent: "space-between"
    },
    body:{
        display: "flex",
        flexDirection: "row",
        // justifyContent: "space-between"
    },
    image: {
        height: 300,
        width: 300,
        border: "2px solid black",
        // border: 2,
        // borderColor: "black"
    },
    description: {
        width: "60%",
        fontFamily: "monospace",
        marginLeft: 20,
        fontSize: 20
    },
    commentSection: {
        marginTop: 20,
        paddingLeft: 50,
        paddingRight: 50,
        paddingBlockEnd: 20,
    },
    newComment: {
        // border: "2px solid black",
        height: 200,
        marginTop: 20,
        marginBlockEnd: 20
    },
    subtitle:{
        display:"flex",
        paddingLeft: 25
    },
    textBox: {
        padding: 10,
    }
}));

export default function SinglePost(props){
    const style = useStyles();
    const history = useHistory();
    let {title, description, id, username} = props.location.state;
    console.log("----")
    console.log(props);
    let currentUser = props.location.currentUser;
    const [userName, setUserName] = React.useState(props.userdata);

    const handleUser = (name) => {
        setUserName(name);
    }

    const [commentArr, setCommentArr] = React.useState([]);
    const [commentData, setCommentData] = React.useState('');

    const getComments = () => {
        fetch(backendUrl+"getComments/"+id, {
            method : "get",
        }).then(res => res.json())
            .then(res2 => {setCommentArr(res2)});
    }
    React.useEffect(() => {
        getComments();
    }, []);

    const backFunction = () => {
        history.push("/");
    }

    const postComment = (name, postId, commentData,userName) => {
        console.log(userName);
        Axios.post(backendUrl+"postComment/", {
            postId,
            name,
            commentData,
            userName
        }).then(()=>{getComments();setCommentData("")})
    }

    return(
        <>
            <Header handleUser={handleUser} userdata={props.location.currentUser} logout={props.location.logout} getUser={props.location.getUser}/>
            <hr />
            <div className={style.singleItem}>
                <div className={style.header}>
                    <Typography variant={"h4"}>{title}</Typography>
                    <Button variant="contained" onClick={backFunction}>Back</Button>
                </div>
                <hr />
                <div className={style.body}>
                    <div className={style.image}>
                        <img src={"#"} alt="IMAGES" className={style.image}/>
                    </div>
                    <div className={style.description}>
                        <div className={style.subtitle}><Typography variant={"h5"}>Description</Typography></div>
                        {description}
                    </div>
                </div>
                <hr />
                <div className={style.commentSection}>
                    {commentArr.length === 0 ?
                        <div><h4>No Comments</h4></div>:
                        commentArr.map(
                            comment => <Comment key={Object.values(comment)} data={comment} />
                        )
                    }
                    <div className={style.newComment}>
                    <textarea
                        name="newComment"
                        id=""
                        cols="70"
                        rows="13"
                        value={commentData}
                        onChange={(e) => setCommentData(e.target.value)}
                        placeholder={"Enter a comment"}
                        className={style.textBox}
                    ></textarea>
                    </div>
                    <Button
                        variant="contained"
                        onClick={()=>postComment(title, id, commentData,currentUser)}
                        disabled={currentUser === "Login"}
                    >Post Comment
                    </Button>
                </div>
            </div>
        </>)
}
