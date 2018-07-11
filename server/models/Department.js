module.exports = function (sequelize, DataTypes) {
	var Department = sequelize.define("Department", {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		departmentName: DataTypes.STRING,
		description: {
			type: DataTypes.STRING,
			notNull: true
		}
	}, {
		tableName: 'departments',
		timestamps: false,
	});

	Department.associate = function (models) {
		Department.belongsTo(models.Project, {
			allowNull: true
		});
		
		Department.hasMany(models.Task, {
			allowNull: true
		});

	}

	return Department;

};