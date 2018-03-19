//actions are just Objects

//increment
export function increment(index) {
	return {
		type: 'INCREMENT_LIKES',
		index: index
	}
}

//add comment
export function addComment(postId, author, comment) {
	console.log("dispatching add comment")
	return {
		type: 'ADD_COMMENT',
		postId:postId,
		author:author,
		comment:comment
	}
}

//remove comment from a particular posts
export function removeComment(postId, i) {
	return {
		type: 'REMOVE_COMMENT',
		postId,
		i
	}
}