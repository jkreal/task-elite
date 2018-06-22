module.exports = function(sequelize, DataTypes) {
	var Department = sequelize.define("Department", {
		 id:  { 
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
			classMethods: {
					associate : function(models) {
							Department.belongsTo(models.Project, {foreignKey: 'id'})
							Department.hasMany(models.Task, {foreignKey: 'id'})
					},
				},
		});
	
	
	
	return Department;

};