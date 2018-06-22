module.exports = function(sequelize, DataTypes) {
	var Project = sequelize.define("Project", {
		 id:  { 
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
			classMethods: {
					associate : function(models) {
							Project.belongsTo(models.User, {foreignKey: 'user_id'})
							Project.hasMany(models.Department, {foreignKey: 'department_id'})
							Project.hasMany(models.User, {foreignKey: 'user_id'})
					},
				},
		});
	
	
	
	return Project;

};