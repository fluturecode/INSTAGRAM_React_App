import React, { useState } from "react";
import "./App.css";
import Post from "./components/Post";

function App() {
	const [posts, setPosts] = useState([
		{
			username: "fluturecode",
			caption: "Building instagram now...",
			imageUrl:
				"https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
		},
		{
			username: "fluturecode",
			caption: "Building instagram now...",
			imageUrl:
				"https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
		},
	]);

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
