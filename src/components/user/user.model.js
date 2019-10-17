import * as Sequelize from 'sequelize'
import bcrypt from "bcrypt";

class User extends Sequelize.Model {
    
    comparePassword (candidatePassword) {
        return bcrypt.compareSync(candidatePassword, this.getDataValue('password'));
    }

    hashPassword (password) {
        const saltRounds = 10;
        var salt = bcrypt.genSaltSync(saltRounds);
        var hash = bcrypt.hashSync(password, salt);
        this.setDataValue('password', hash);
    }
}

User.init({
    id_user : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nama_user : {
        type: Sequelize.STRING,
    },
    username : {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
}, {
    timestamps: true,
    sequelize,
    modelName: 'users'
})

export default User;