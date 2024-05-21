export const tsransformComment = (dbComment) => ({
	id: dbComment.id,
	postId: dbComment.post_id,
	authorId: dbComment.autor_id,
	publishedAt: dbComment.published_at,
	content: dbComment.content,
});
