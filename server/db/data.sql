USE kzaiyjt83y6fckn2;
    
INSERT Into users (fullname, username, email, password, last_login)
VALUES
	('Josh Row', 'jkrowden', 'jkrowden@gmail.com', '1234', 000);

INSERT INTO projects (project_name, description, owner_id)
VALUES
	('Project Undefined', 'First Project', 1),
    ('Project 2', 'Second Project', 2);
    
        
INSERT INTO departments (departmentName, description, ProjectId)
	VALUES
    ('Dept 1', 'Department1', 1),
    ('Dept2', 'Department 2ownersowners', 1);
    
INSERT INTO tasks (task_name, description, completed, DepartmentId, UserId) 
	VALUES
    ('Task1', 'Do a thing', false, 1, 1),
	('Task2', 'Do another thing', false, 1, 1),
	('Task3', 'Do a thing', true, 1, 1),
    ('Task4', 'Do a thing', true, 1, 1),
    ('Task5', 'Do a thing', false, 1, 1),
    ('Task6', 'Do a thing', false, 1, 1);
