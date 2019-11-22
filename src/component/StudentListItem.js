import React from 'react'


function StudentListItem({student:{name} }){


    return(
        <div>
            <li>
            {
                name
            }
            </li>
        </div>
    )

}
export default StudentListItem;