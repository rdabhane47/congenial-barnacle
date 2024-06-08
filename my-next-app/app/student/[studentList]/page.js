'use client'

import React from 'react'



export default function StudentList1({params})
{
    console.log(params)
    return(
<div>
    <h>Student Details</h>
    <h3>Name:{params.studentList}</h3>
</div>


    )
}