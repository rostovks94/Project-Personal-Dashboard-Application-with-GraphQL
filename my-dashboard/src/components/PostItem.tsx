import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from 'urql';
import { GET_USER_POSTS } from '../graphql/queries';
import { CREATE_POST, UPDATE_POST, DELETE_POST } from '../graphql/mutations';
import { Link } from 'react-router-dom';

const POSTS_PER_PAGE = 5;

const PostItem = () => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const [result] = useQuery({
    query: GET_USER_POSTS,
    variables: { userId: '1', limit: POSTS_PER_PAGE, page },
  });

  const { data, fetching, error } = result;

  useEffect(() => {
    console.log("Data received:", data);
    console.log("Fetching state:", fetching);
    console.log("Error state:", error);
  }, [data, fetching, error]);

  const [, createPost] = useMutation(CREATE_POST);
  const [, updatePost] = useMutation(UPDATE_POST);
  const [, deletePost] = useMutation(DELETE_POST);

  const handleCreatePost = () => {
    console.log("Create Post button clicked");
    createPost({
      input: {
        title: 'New Post',
        body: 'This is a new post.',
        userId: '1',
      },
    }).then((result) => {
      console.log("Post created:", result);
    });
  };

  const handleUpdatePost = (postId: string) => {
    console.log(`Update Post button clicked for postId: ${postId}`);
    updatePost({
      id: postId,
      input: {
        title: 'Updated Title',
        body: 'Updated content',
      },
    }).then((result) => {
      console.log("Post updated:", result);
      alert("Post updated!");
    }).catch((error) => {
      console.error("Error updating post:", error);
    });
  };

  const handleDeletePost = (postId: string) => {
    console.log(`Delete Post button clicked for postId: ${postId}`);
    deletePost({ id: postId }).then((result) => {
      console.log("Post deleted:", result);
      alert("Post deleted!");
    }).catch((error) => {
      console.error("Error deleting post:", error);
    });
  };

  if (fetching) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (!data || !data.user || !data.user.posts) return <div>No posts found.</div>;

  const filteredPosts = data.user.posts.data.filter((post: any) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(data.user.posts.meta.totalCount / POSTS_PER_PAGE);

  return (
    <div>
      <input
        type="text"
        placeholder="Search posts..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {filteredPosts.length > 0 ? (
        filteredPosts.map((post: any) => (
          <div key={post.id} className="card">
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body}</p>
              <Link to={`/posts/${post.id}`}>View Details</Link>
              <button onClick={() => handleUpdatePost(post.id)}>Edit</button>
              <button onClick={() => handleDeletePost(post.id)}>Delete</button>
            </div>
          </div>
        ))
      ) : (
        <p>No posts found.</p>
      )}

      <button onClick={handleCreatePost}>Create Post</button>

      <div>
        <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button onClick={() => setPage((prev) => (prev < totalPages ? prev + 1 : prev))} disabled={page >= totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PostItem;