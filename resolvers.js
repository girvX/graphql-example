//fake database 
let users = [
    {
        id: 1, name: 'Giovani Rodrigues', email: 'giovani.rdgs@gmail.com'
    },
    {
        id: 2, name: 'Joao', email: 'teste@teste.com'
    }
]

module.exports = {
    Query: {
        users: () => users,
        user: (_, { id }) => users[id]
    },

    Mutation: {
        createUser: (_, data  ) => {
            users.push(data);
            return data
        }
    }
}