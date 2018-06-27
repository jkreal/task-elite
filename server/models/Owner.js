module.exports = function (sequelize, DataTypes) {
	var Owner = sequelize.define("Owner", {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		owner: DataTypes.INTEGER
	}, {
		tableName: 'owners',
		timestamps: false,
	});


	return Owner;

};