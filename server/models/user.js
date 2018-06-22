module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("User", {
		 		id: {
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		fullname: {
			type: DataTypes.STRING,
			notEmpty: true
		},
		username: {
			type: DataTypes.TEXT
		},
		email: {
			type: DataTypes.STRING,
			validate: {
				isEmail: true
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}
		
		, {
			tableName: 'users',
			classMethods: {
					associate : function(models) {
							User.hasMany(Department, {foreignKey: 'id'});
					},
				},
		});
	
	
	
	return User;

};







