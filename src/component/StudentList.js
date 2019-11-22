import React,{useState} from 'react';

import StudentListItem from './StudentListItem'

function StudentList({students}){
    const [student,setStudent] = useState ('');
   
    return(
        <div>
            <li>
                {
                    students.map(student=> <StudentListItem  student = {student}/>)
                }
            </li>
        </div>
    )



}
export default StudentList;