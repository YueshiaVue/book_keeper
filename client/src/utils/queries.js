import { ApolloServer } from '@apollo/client';

export const QUERY_ME = ApolloServer`
  {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;