import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./components/Post";
import { db } from "./firebase";

function App() {
	const [posts, setPosts] = useState([]);
	onst[(open, setOpen)] = useState(false);

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

	return (
		<div className="app">
			<Modal open={open} onClose={handleClose}>
				<div style={modalStyle} className={classes.paper}>
					<h2>I am a modal</h2>
				</div>
			</Modal>
			<div className="app__header">
				<img
					className="app__headerImage"
					src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
					alt="instagram logo"
				/>
			</div>

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
