import React, { Component } from 'react'
import styles from './Form.module.css';

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: 'nik',
         lastName: '',
         userAge: 'morethan40'
      }
    }

    handleUserNameChange = (event) => {
        console.log('change---', event.target.value);
        this.setState({
            username: event.target.value
        })
    }


    handleLastNameChange = (event) => {
        console.log('lastName change---', event.target.value);
        this.setState({
            lastName: event.target.value
        })
    }

    handleAgeChange = (event) => {
        console.log('age change---', event.target.value);
        this.setState({
            userAge: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.lastName} ${this.state.userAge}`);
        event.preventDefault();
    }

  render() {
    return (
      <div>
        <div className={styles.userForm}>Form Component</div>

        <form onSubmit={this.handleSubmit}>
            <div className={styles.formControl}>
                <label className={styles.formLabel}>Username</label>
                <input type="text" value={this.state.userName} onChange={this.handleUserNameChange}></input>
            </div>

            <div className={styles.formControl}>
                <label className={styles.formLabel}>Lastname</label>
                <input type="text" value={this.state.lastName} onChange={this.handleLastNameChange}></input>
            </div>

            <div className={styles.formControl}>
                <label className={styles.formLabel}>Age</label>
                <select value={this.state.userAge} onChange={this.handleAgeChange}>
                    <option value="lessThan18">Less than 18</option>
                    <option value="18to40">18 to 40</option>
                    <option value="morethan40">More than 40</option>
                </select>
            </div>

            <div className={styles.formControl}>
                <button type='submit'>Submit</button>
            </div>
        </form>
      </div>
    )
  }
}

export default Form