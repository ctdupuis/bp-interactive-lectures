const { CONNECTION_URL } = process.env;

const Sequelize = require('sequelize');

const sequelize = new Sequelize(CONNECTION_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});

const userId = 4;
const clientId = 1;

module.exports = {
    getUserInfo: (req, res) => {
        sequelize.query(`
            select * from cc_clients c
            join cc_users u on c.user_id = u.user_id
            where u.user_id = ${userId};
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log("Error: ", err))
    }
};