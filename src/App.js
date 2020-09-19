import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./components/Post";
import { db } from "./firebase";

function App() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		// snapshot is listenting for changes to 'posts'
		db.collection("posts").onSnapshot((snaphot) => {
			setPosts(snapshot.docs.map((doc) => doc.data()));
		});
	}, []);

	return (
		<div className="app">
			<div className="app__header">
				<img
					className="app__headerImage"
					src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
					alt="instagram logo"
				/>
			</div>
			{posts.map((post) => (
				<Post
					username={post.username}
					caption={post.caption}
					imageUrl={post.imageUrl}
				/>
			))}
		</div>
	);
}

export default App;
