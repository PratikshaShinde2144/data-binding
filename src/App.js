import React, {useState} from 'react';
import './Pratiksha.css';

function App()
{
const [myCar,ChangeMyCar] = useState("BMW");

const changeInputValue = (event) =>
{
   ChangeMyCar(event.target.value);
}

  return(
    <div className="main_body">
      <h1>{myCar}</h1>
      <input
      type="text"
      value={myCar}
      onChange={changeInputValue}
      >
        </input>
    </div>
  );
}

export default App;


































// import React,{useState} from 'react';
// import Person from './Person';

// function App()
// {

  // const [myText,ChangeMyText] = useState("wisdom");
  // const [myCondition,ChangeMyCondition] = useState(true);

  // const buttonClick = () =>
  // {
  //   ChangeMyText("python");
  // }

//   const changeStateTrue = () =>
//   {
//   ChangeMyCondition(true);
    
//   }
//   const changeStateFalse = () =>
//   {
//   ChangeMyCondition(false);
    
//   }

// let Person = '';

// if (myCondition)
// {
//   Person= (
//     <h1>This is my h1</h1>
//   );
// }
// else{
//   Person = '';
// }

// const MyStyle ={
//   margin:'50px',
// };
//   return(
// <div>

//   <button onClick={changeStateTrue}>Change To True</button>
//   <button style={MyStyle} onClick={changeStateFalse}>Change To False</button>
  {/* <Person myName={myText} PersonButton={buttonClick}></Person> */}

//   {Person}
// </div>
//   );
// }
// export default App;
