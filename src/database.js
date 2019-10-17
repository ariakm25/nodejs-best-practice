import { Sequelize } from 'sequelize';
import { databaseURL } from '../config.js'

export default () => {
    const connection = new Sequelize(databaseURL);
    return connection;
}