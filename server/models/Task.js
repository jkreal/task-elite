module.exports = function (sequelize, DataTypes) {
	var Task = sequelize.define("Task", {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		task_name: {
			type: DataTypes.STRING,
			notNull: true
		},

		description: {
			type: DataTypes.STRING,
			notNull: true
		},

		completed: {
			type: DataTypes.BOOLEAN
		}
	}, {
		tableName: 'tasks',
		timestamps: false,
	});

	Task.associate = function (models) {
		Task.belongsTo(models.Department, {
			onDelete: 'CASCADE',
			allowNull: true
		});

		Task.belongsTo(models.User, {
			onDelete: 'CASCADE',
			allowNull: true
		});
	}



	return Task;

};