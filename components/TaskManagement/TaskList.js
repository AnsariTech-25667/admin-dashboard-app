import React, { useState, useEffect } from 'react';
import { Button, Table, Input, Modal, Form, notification } from '@nextui-org/react';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [newTask, setNewTask] = useState({ title: '', description: '' });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setIsLoading(true);
        const fetchedTasks = await new Promise((resolve) =>
          setTimeout(() => resolve([
            { id: 1, title: 'Task 1', description: 'Description for Task 1' },
            { id: 2, title: 'Task 2', description: 'Description for Task 2' }
          ]), 1000)
        );
        setTasks(fetchedTasks);
      } catch (error) {
        notification.error({ message: 'Failed to fetch tasks' });
      } finally {
        setIsLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const handleAddTask = () => {
    if (!newTask.title || !newTask.description) {
      notification.error({ message: 'Title and description are required' });
      return;
    }
    setTasks([...tasks, { id: Date.now(), ...newTask }]);
    setNewTask({ title: '', description: '' });
    setShowModal(false);
    notification.success({ message: 'Task added successfully' });
  };

  const handleEditTask = (task) => {
    setSelectedTask(task);
    setNewTask({ title: task.title, description: task.description });
    setShowModal(true);
  };

  const handleDeleteTask = (taskId) => {
    // Delete task logic
    setTasks(tasks.filter(task => task.id !== taskId));
    notification.success({ message: 'Task deleted successfully' });
  };

  const handleUpdateTask = () => {
    if (!newTask.title || !newTask.description) {
      notification.error({ message: 'Title and description are required' });
      return;
    }
    setTasks(tasks.map(task => task.id === selectedTask.id ? { ...task, ...newTask } : task));
    setSelectedTask(null);
    setNewTask({ title: '', description: '' });
    setShowModal(false);
    notification.success({ message: 'Task updated successfully' });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Task List</h1>
      <Button onClick={() => setShowModal(true)} color="primary">Add Task</Button>
      <Table aria-label="Task List" css={{ minWidth: '100%' }}>
        <Table.Header>
          <Table.Column>Title</Table.Column>
          <Table.Column>Description</Table.Column>
          <Table.Column>Actions</Table.Column>
        </Table.Header>
        <Table.Body>
          {tasks.map(task => (
            <Table.Row key={task.id}>
              <Table.Cell>{task.title}</Table.Cell>
              <Table.Cell>{task.description}</Table.Cell>
              <Table.Cell>
                <Button size="sm" color="primary" onClick={() => handleEditTask(task)}>Edit</Button>
                <Button size="sm" color="error" onClick={() => handleDeleteTask(task.id)}>Delete</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>{selectedTask ? 'Edit Task' : 'Add Task'}</Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Item label="Title">
              <Input
                placeholder="Task title"
                value={newTask.title}
                onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
              />
            </Form.Item>
            <Form.Item label="Description">
              <Input
                placeholder="Task description"
                value={newTask.description}
                onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
              />
            </Form.Item>
            <Button
              onClick={selectedTask ? handleUpdateTask : handleAddTask}
              disabled={isLoading}
              color="primary"
            >
              {isLoading ? 'Saving...' : selectedTask ? 'Update Task' : 'Add Task'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TaskList;
