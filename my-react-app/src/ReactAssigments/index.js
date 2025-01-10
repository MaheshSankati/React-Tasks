import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import Welcome from './Task-1/welcome';
import Timetable from './Task-2/TimeTable';
import HomePage from './Task-3/homepage/homepage';
import Main from './Task-4/cards';
import Home from './Task-5/home';
import Homee from './Task-6/homee';
import Counter from './Task-7/counter';
import Form from './Task-8/form';
import EvenOdd from './Task-9/evenodd';
import ToDo from './Task-10/ToDo';
import DataLoading from './Task-11/index';
import ButtonCard from './Task-12';
import Counterr from './Task-13/counter';
import FormComponent from './Task-14/formevents';
import LoginForm from './Task-15';





function Display(){
     return(
          <>
          <div style={{border: '2px solid black', padding:"20px"}}>
          <center><h1>React Task-1</h1></center>
               <Welcome/>
          </div>
          <div style={{border: '2px solid black', padding:"20px"}}>
          <center><h1>React Task-2</h1></center>
               <Timetable/>
          </div>
          <div style={{border: '2px solid black', padding:"20px"}}>
          <center><h1>React Task-3</h1></center>
               <HomePage/>
          </div>
          <div style={{border: '2px solid black', padding:"20px"}}>
          <center><h1>React Task-4</h1></center>
               <Main/>
          </div>
          <div style={{border: '2px solid black', padding:"20px"}}>
          <center><h1>React Task-5</h1></center>
               <Home/>
          </div>
          <div style={{border: '2px solid black', padding:"20px"}}>
          <center><h1>React Task-6</h1></center>
               <Homee/>
          </div>
          <div style={{border: '2px solid black', padding:"20px"}}>
          <center><h1>React Task-7</h1></center>
               <Counter/>
          </div>
          <div style={{border: '2px solid black', padding:"20px"}}>
          <center><h1>React Task-8</h1></center>
               <Form/>
          </div>
          <div style={{border: '2px solid black', padding:"20px"}}>
          <center><h1>React Task-9</h1></center>
               <EvenOdd/>
          </div>
          <div style={{border: '2px solid black', padding:"20px"}}>
          <center><h1>React Task-10</h1></center>
               <ToDo/>
          </div>
          <div style={{border: '2px solid black', padding:"20px"}}>
          <center><h1>React Task-11</h1></center>
               <DataLoading/>
          </div>
          <div style={{border: '2px solid black', padding:"20px"}}>
          <center><h1>React Task-12</h1></center>
               <ButtonCard/>
          </div>
          <div style={{border: '2px solid black', padding:"20px"}}>
          <center><h1>React Task-13</h1></center>
               <Counterr/>
          </div>
          <div style={{border: '2px solid black', padding:"20px"}}>
          <center><h1>React Task-14</h1></center>
               <FormComponent/>
          </div>
          <div style={{border: '2px solid black', padding:"20px"}}>
          <center><h1>React Task-15</h1></center>
               <LoginForm/>
          </div>
          </>
     )
}
export default Display;