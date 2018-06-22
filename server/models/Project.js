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
			classMethods: {
					associate : function(models) {
							Project.belongsTo(models.User, {foreignKey: 'id'})
							Project.hasMany(models.Department, {foreignKey: 'id'})
					},
				},
		});
	
	
	
	return Project;

};