const bcrypt = require('bcryptjs');

module.exports = function (sequelize, Sequelize) {

	var User = sequelize.define('User', {
		id: {
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
		},
		fullname: {
			type: Sequelize.STRING,
			notEmpty: true
		},
		username: {
			type: Sequelize.TEXT
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false
		},

	},
	{
		tableName: 'users',
		timestamps: false
	});

	User.associate = function (models) {
		User.hasMany(models.Task, {});
	}
	
	User.prototype.validPassword = function (password) {
		return bcrypt.compareSync(password, this.password);
	};

	User.hook("beforeCreate", (instance) => {
		if (instance.password) {
			instance.password = bcrypt.hashSync(instance.password, bcrypt.genSaltSync(10), null);
		}
	});
	return User;

}