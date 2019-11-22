import React,{useState} from 'react'

function StudentForm({addStudent}){
    const [student,setStudent] = useState ('');



    const handleChange=(e)=>{
        setStudent(e.target.value)
    }

   const handleSubmit =(e)=>{
       e.preventDefault();

       addStudent({
           id: 1,
           name: student,
           year: 5,
       })
       setStudent('')
   }

    return(
        <form
         onSubmit= {handleSubmit}

        >
            <label>add Student</label>
            <input
            type="text"
            onChange={handleChange}
            value = {student}
            />
        </form>
    )

}
export default StudentForm;
