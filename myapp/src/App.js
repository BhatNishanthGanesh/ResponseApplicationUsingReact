import React,{Component} from 'react'
import Response from './components/Response';
import image from './Images/boy.webp'
import image2 from './Images/girl.jpg'
import image3 from './Images/girl2.jpg'

      
       class App extends Component{
         render(){
           const studentData=[
             {name:'Rahul',age:18,college:'IIT',photo:image},
             {name:'Rosy',age:17,college:'NIIT',photo:image2},
             {name:'Ria',age:19,college:'IISC',photo:image3}];
              return(
                <div>
                 <h1 style={{textAlign:'center'}}>Component Response Application</h1>
                 {studentData.map((student,index)=>(
                  <Response  key = {index} name={student.name} age={student.age} college={student.college} photo={student.photo}/>
                 ))}
                </div>
              )
       }
 }


export default App;
