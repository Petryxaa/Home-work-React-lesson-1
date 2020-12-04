import React, { Component } from 'react'
import './Style.css';
export default class Userscomponent extends Component {
    render() {

        const {item}  = this.props;


        return (
            <div>
        <div> {item.name}-{item.age}-{item.status.toString()}-{item.address.city.toString()}-{item.id}</div> 
            </div>
        )
    }
}

























