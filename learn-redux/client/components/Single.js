import React from 'react';
import { Link } from 'react-router';
import Photo from './Photo';
import Comments from './Comments';
//import comments

class Single extends React.Component {
	render(){
		// console.log("this.props.children inside PhotoGrid", this.props.children)
		//index of the post
		const i = this.props.posts.findIndex((post) => 
			post.code === this.props.params.postId)
		//get us the post
		const post = this.props.posts[i];
		const postComments = this.props.comments[this.props.params.postId] || [];
		console.log("post is", post)
		return(
			<div className="single-photo">
				<Photo i={i} post={post} {...this.props}/>
				<Comments postComments={postComments} {...this.props}/>
			</div>
		)
	}
}

export default Single;