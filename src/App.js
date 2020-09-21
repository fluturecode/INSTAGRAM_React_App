import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./components/Post";
import { db, auth } from "./firebase";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button, Input } from "@material-ui/core";

function getModalStyle() {
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translatee(-${top}%), -${left}%`,
	};
}

const useStyles = makeStyles((theme) => ({
	paper: {
		position: "absolute",
		width: 400,
		backgroundColor: theme.palette.background.paper,
		boder: "2px solid #000",
		boxShadow: theme.shaod[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

function App() {
	const classes = useStyles();
	const [modalStyle] = useState(getModalStyle);
	const [posts, setPosts] = useState([]);
	const [open, setOpen] = useState(false);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [user, setUser] = useState(null);

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				// user has logged in...
				console.log(authUser);
				// this keeps user logged in
				setUser(authUser);

				if (authUser.displayName) {
					// don't update username
				} else {
					// if just created a new user
					return authUser.updateProfile({
						displayName: username,
					});
				}
			} else {
				// user has logged out....
				setUser(null);
			}
		});
	}, [user, username]);

	useEffect(() => {
		// snapshot is listenting for changes to 'posts'
		db.collection("posts").onSnapshot((snapshot) => {
			setPosts(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					post: doc.data(),
				}))
			);
		});
	}, []);

	const signUp = (event) => {
		event.preventDefault();

		auth
			.createUserWithEmailAndPassword(email, password)
			.catch((err) => alert(err.message));
	};

	return (
		<div className="app">
			<Modal open={open} onClose={() => setOpen(false)}>
				<div style={modalStyle} className={classes.paper}>
					<Form>
						<img
							className="app__headerImage"
							src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
							alt="instagram logo"
						/>
						<Input
							placeholder="username"
							type="text"
							value={username}
							onChange={(e) => setUsername(e.targe.value)}
						/>
						<Input
							placeholder="email"
							type="text"
							value={email}
							onChange={(e) => setEmail(e.targe.value)}
						/>
						<Input
							placeholder="password"
							type="passsword"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<Button type="submit" onClick={signUp}>
							Sign Up
						</Button>
					</Form>
				</div>
			</Modal>

			<div className="app__header"></div>

			{posts.map(({ id, post }) => (
				<Post
					key={id}
					username={post.username}
					caption={post.caption}
					imageUrl={post.imageUrl}
				/>
			))}
		</div>
	);
}

export default App;
