import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post() {
	return (
		<div className="post">
			<div className="post__header">
				<Avatar
					className="post__avatar"
					alt="E"
					src="/static/images/avatar/1.jpg"
				/>
				<h3>Username</h3>
			</div>
			<img
				className="post__image"
				src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
			/>

			<h4 className="post__text">
				<strong>Fluturecode:</strong> Building the Instagram Clone
			</h4>
		</div>
	);
}

export default Post;
