import React, { Component } from 'react';

export default class Testing extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(evt) {
        this.setState({name: evt.target.value})
    }
    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>Name</label>
                        <input type="text" name='name' onChange={this.handleChange}/>
                    </div>
                </form>
            </div>
        )
    }
} 