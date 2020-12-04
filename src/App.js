
import React, { Component } from 'react'
import {cars, users} from './component/ArrayObjects';
import Carscomponent from './component/Carscomponent';
import Userscomponent from './component/Userscomponent';


export default class App extends Component {
  //company = 'Okten web';

  render() {
//let i = users;



    return (
     // <div>
//<h1>{this.company}</h1>        

<div>
 {/* <Carscomponent/> */}
<div class = "cars">
{
  cars.map((car ,index) =>(<Carscomponent item = {car} key = {index}/>))
}
  </div>
  <hr></hr>
<div class = "users">
{
  users.map((user ,index) =>{
    return (<Userscomponent item={user} key={index} />);
  })
}
  </div>

</div>
//Создать несколько массивов с объектами.
//Создать для каждого из  массивов компонент, который отрисовывает все объекты.
//для отрисовки каждого отдельного объекта создать свой компонент.
//Вывести все объекты в UI
    );
  }
}
