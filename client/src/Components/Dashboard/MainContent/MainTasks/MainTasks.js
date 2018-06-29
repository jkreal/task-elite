import React, {Component} from "react";
import "./MainTasks.css";
import tasks from "./tasksData.json";
import Task from "./Task";
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
    tasks
  };
  render() {
    return (
      <Row>
          {this.state.tasks.map(task => (
            <Task
              id={task.id}
              key={task.id}
              task={task.task}
              description={task.description}
            />
            // <div>Something else for right now</div>
    
          ))}
      </Row>
    
    
  )
}

  }

// const Users = props => (
// );

export default MainTasks;
