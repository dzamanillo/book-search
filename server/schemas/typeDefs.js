const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type User {
		_id: ID
		username: String!
		# todo validate email
		email: String!
		password: String!
		bookCount: Int
		savedBooks: [Book]
	}

	input AuthorInput {
		authorName: String!
	}

	type Book {
		bookId: ID!
		authors: [AuthorInput]
		description: String!
		title: String!
		image: String!
		link: String!
	}

	type Auth {
		token: ID!
		user: User
	}

	type Query {
		me: User
	}

	type Mutation {
		login(email: String!, password: String!): Auth
		addUser(username: String!, email: String!, password: String!): Auth
		# saveBook(author: AuthorInput!, description: String!, title: String!, bookId: ID!, image: String!, link: String!): User
		removeBook(bookId: ID!): User
	}
`;

module.exports = typeDefs;
