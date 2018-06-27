db = require("../models");

module.exports = function (app) {

	//Get department by ID
app.get("/api/department/:id", function (req, res) {
	db.Department.find({
		where: {
			id: req.params.id
		}
	}).then(function (dbDepartment) {
		res.json(dbDepartment);
	});
});

//Get user by ID
app.get("/api/users/:id", function (req, res) {
	db.User.find({
		where: {
			id: req.params.id
		}
	}).then(function(dbUser) {
		res.json(dbUser);
	});
});

//Get task by ID
app.get("/api/task/:id", function (req, res) {
	db.Task.find({
		where: {
			id: req.params.id
		}
	}).then(function(dbTask) {
		res.json(dbTask);
	});
});

//Get tasks by department id
app.get("/api/department/tasks/:id", function(req, res) {
	db.Task.findAll({ 
		where: {
			department_id: req.params.id
		}
	}).then(function(dbTask) {
		res.json(dbTask);
	});
});

//Get all projects with the owner id
app.get("/api/project/owner/:id", function (req, res) {
	db.Owner.findAll({
		where: {
			owner: req.params.id
		}
	}).then(function(dbUser) {
		res.json(dbUser);
	});
});

app.get("/api/users/project/:id", function(req, res) {

});
}