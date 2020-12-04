import React, { Component } from 'react'

import './Style.css';

class Carscomponent extends Component {
    
    render() {
        
    //const z = cars;
   // console.log(this.props)

   const {item} = this.props;
        return (
<div>  

<div>{item.name} - {item.age} - {item.color} - {item.pawer} - {item.id} </div>

</div>
);
    }
}

export default Carscomponent;







