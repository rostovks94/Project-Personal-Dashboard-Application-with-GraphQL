import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'urql';
import { GET_POST_COMMENTS } from '../graphql/queries';

const PostDetails = () => {
  const { postId } = useParams<{ postId: string }>();

  const [result] = useQuery({
    query: GET_POST_COMMENTS,
    variables: { postId },
  });

  const { data, fetching, error } = result;

  if (fetching) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const post = data.post;
  const comments = post.comments.data;

  return (
    <div className="post-details">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment: any) => (
          <li key={comment.id}>
            <strong>{comment.name}</strong>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostDetails;