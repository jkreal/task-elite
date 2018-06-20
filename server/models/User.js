module.exports = function (sequelize, DataTypes) {

	var User = sequelize.define("user", {

			id: {
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER
			},

			fullName: {
				type: DataTypes.STRING,
				notEmpty: true
			},

			email: {
				type: DataTypes.STRING,
				notEmpty: true
			},

			password: {
				type: DataTypes.STRING,
				allowNull: false
			},
		

	}, {
		timestamps: false
	});
	
return User;
}