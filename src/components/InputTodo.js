import React, { Component } from 'react';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

    onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };

      handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.title.trim()) {
          this.props.addTodoProps(this.state.title);
          this.setState({
            title: '',
          });
        } else {
          alert('please enter any item');
        }
      };

      render() {
        return (
          <form
            onSubmit={this.handleSubmit}
            addTodoProps={this.props.addTodoProps}
            className="form-container"
          >
            <input
              type="text"
              placeholder="Add Todo..."
              value={this.state.title}
              name="title"
              onChange={this.onChange}
            />
            <button type="submit" className="input-submit">Submit</button>
          </form>
        );
      }
}
export default InputTodo;
