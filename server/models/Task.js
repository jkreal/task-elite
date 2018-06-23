module.exports = function (sequelize, DataTypes) {
	var Task = sequelize.define("Task", {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		taskName: {
			type: DataTypes.STRING,
			notNull: true
		},

		description: {
			type: DataTypes.STRING,
			notNull: true
		}
	}, {
		tableName: 'tasks',
		timestamps: false,
	});

	Task.associate = function (models) {
		models.Task.belongsTo(models.Department, {
			foreignKey: 'department_id'
		})
	}



	return Task;

};