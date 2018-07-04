import React, { Component } from "react";
import "./MainTasks.css";
import API from "../utils/API";
// import tasks from "./tasksData.json";
import Task from "./Task";
import AddTaskButton from "./AddTaskButton";
import {
  Button,
  Row,
  Col,
  FormControl,
  FormGroup,
  Form,
  ControlLabel
} from "react-bootstrap";

class MainTasks extends Component {
  state = {
    tasks: []
  };

  loadTasks = () => {
    console.log("hit from loadTasks");
    API.getTasks().then(res => this.setState({ tasks: res.data }));
  };

  componentDidMount() {
    this.loadTasks();
  }

  render() {
    return (
      <div>
      <Row>
        <AddTaskButton />
      </Row>

      
      
      
      <Row>
        {this.state.tasks.map(task => (
          <Task
            id={task.id}
            key={task.id}
            task={task.taskName}
            description={task.description}
          />
          // <div>Something else for right now</div>
        ))}
      </Row>
        </div>
    );
  }
}

// const Users = props => (
// );

export default MainTasks;
