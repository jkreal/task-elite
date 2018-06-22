module.exports = function (sequelize, DataTypes) {
	var Project = sequelize.define("Project", {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		projectName: DataTypes.STRING,
		description: {
			type: DataTypes.STRING,
			notNull: true
		}
	}, {
		tableName: 'projects',
		timestamps: false,
	});

	Project.associate = function (models) {
		models.Project.belongsTo(models.User, {
			foreignKey: 'owner_id'
		});
		models.Project.hasMany(models.Department, {
			foreignKey: 'department_id'
		});
	}



	return Project;

};