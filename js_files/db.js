const tryJSONParse = (rawJson, defaultJson) => {
    try {
        return JSON.parse(rawJson);
    } catch {
        console.warn('Initial db state is corrupted: ', rawJson);
        return defaultJson;
    }
}
//To do for future DB
// const rawMovies = localStorage.getItem('movies');
// const defaultMovies = [
//     {
//         name: 'Barbie',
//         description: '...',
//     }
// ];
//
// const movies = rawMovies ? tryJSONParse(rawMovies, defaultMovies) : defaultMovies;
//
// const rawOrders = localStorage.getItem('orders')
// const defaultOrders = [
//     {
//         orderId: 1,
//         user: 'mayabee2@gmail.com',
//         movie: 'Barbie',
//         time: {
//             hour: 6
//         }
//     }
// ];
//
// const orders = rawOrders ? tryJSONParse(rawOrders, defaultOrders) : defaultOrders;

const rawUsers = localStorage.getItem('users')
const defaultUsers = [
    {
        email: 'mayabee2@gmail.com',
        password: '12345678',
        name: 'Maya Adar',
        gender: 'Other',
        birthday: new Date(1997, 5, 28),
        phone: '0526178493'
    },
    {
        email: 'tamar@gmail.com',
        password: '12345678',
        name: 'Tamar',
        gender: 'Other',
        birthday: new Date(1997, 5, 28),
        phone: '0526178493'
    },
    {
        email: 'admin@gmail.com',
        password: '12345678',
        name: 'Super Admin',
        gender: 'Other',
        birthday: new Date(1997, 5, 28),
        phone: '0526178493'
    }
];

const users = rawUsers ? tryJSONParse(rawUsers, defaultUsers) : defaultUsers;

const updateDB = () => {
    // localStorage.setItem('movies', JSON.stringify(movies)); // for future db
    // localStorage.setItem('orders', JSON.stringify(orders)); // for future db
    localStorage.setItem('users', JSON.stringify(users));
}

updateDB();

window.db = {
    // for future DB
    // movies: {
    //     get: (movieName) => movies.find(movie => movie.name === movieName),
    //     getAll: () => movies,
    // },
    // order: {
    //     getAll: (email) => orders.filter(order => order.user === email),
    //     addOrder: (order) => {
    //         orders.push(order);
    //         updateDB();
    //     },
    // },
    users: {
        get: (email, password) => users.find(user => user.email === email && user.password === password),
        getName: (email) => users.find(user => user.email === email)?.name,
        addUser: (user) => {
            users.push(user);
            updateDB();
        },
    }
}

