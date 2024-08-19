import { gql } from 'urql';

export const GET_USER_PROFILE = gql`
  query GetUserProfile($id: ID!) {
    user(id: $id) {
      id
      name
      email
      phone
      website
      company {
        name
      }
    }
  }
`;

export const GET_USER_POSTS = gql`
  query GetUserPosts($userId: ID!, $limit: Int!, $page: Int!) {
    user(id: $userId) {
      posts(options: { paginate: { limit: $limit, page: $page } }) {
        data {
          id
          title
          body
        }
        meta {
          totalCount
        }
      }
    }
  }
`;

export const GET_USER_ALBUMS = gql`
  query GetUserAlbums($userId: ID!) {
    user(id: $userId) {
      albums {
        data {
          id
          title
        }
      }
    }
  }
`;

export const GET_USER_TODOS = gql`
  query GetUserTodos($userId: ID!) {
    user(id: $userId) {
      todos {
        data {
          id
          title
          completed
        }
      }
    }
  }
`;

export const GET_POST_COMMENTS = gql`
  query GetPostComments($postId: ID!) {
    post(id: $postId) {
      comments {
        data {
          id
          name
          body
        }
      }
    }
  }
`;