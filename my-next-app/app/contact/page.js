
'use client'
//import {motion} from "framer-motion";
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from '@mui/material/RadioGroup';
import Button from '@mui/material/Button';





export default function Contact() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    phoneno: '',
    emailid: '',
    dateid: '',
    gender: '',
    interests: ''
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = {};


    if (!formData.fname.trim()) {
      validationErrors.fname = 'Enter first name';
    }


    if (!formData.lname.trim()) {
      validationErrors.lname = 'Enter last name';
    }


    if (!formData.phoneno.trim()) {
      validationErrors.phoneno = 'Enter phone number';
    } else if (!/^\d{10}$/.test(formData.phoneno)) {
      validationErrors.phoneno = 'Invalid phone number';
    }


    if (!formData.emailid.trim()) {
      validationErrors.emailid = 'Enter email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailid)) {
      validationErrors.emailid = 'Invalid email';
    }


    if (!formData.dateid.trim()) {
      validationErrors.dateid = 'Enter date of birth';
    }


    if (!formData.gender) {
      validationErrors.gender = 'Select gender';
    }


    if (formData.interests.length === 0) {
      validationErrors.interests = 'Select at least one interest';
    }

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);
      setFormData({
        fname: '',
        lname: '',
        phoneno: '',
        emailid: '',
        dateid: '',
        gender: '',
        interests: ''
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? [...formData[name], value] : value;

    setFormData((prevData) => ({ ...prevData, [name]: newValue }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
  };

  return (
    <div className='bg-gray-900  '>
      <section>
        <div className=' p-4 gap-2 justify-center flex items-center'>
          <div className='shadow-white p-6 bg-white'>
            <form name='myForm' onSubmit={handleSubmit} className='content-center' >


              <label className='text-4xl text-black text-center '>Connect With Us :</label><br /><br />


              {/* <label for='htmlfor' className='text-white rounded-md'>First Name:</label><br /> */}
              <TextField color='success' fullWidth variant="filled" type='text' name='fname' inputText='' label='Enter your First Name' value={formData.fname} onChange={handleChange} /><span className='text-red-500'>{errors.fname}</span><br></br>


              {/* <label htmlFor="lname" className='text-white'>Last Name:</label><br /> */}
              <TextField color="success" focused fullWidth variant="filled" type='text' name='lname' label='Enter your Last Name' value={formData.lname} onChange={handleChange} /><span className='text-red-500'>{errors.lname}</span><br></br>


              {/* <label htmlFor="phoneno" className='text-white'>Phone Number:</label><br /> */}
              <TextField color="success" focused fullWidth variant="filled" type='text' name='phoneno' label='Enter your Phone No.' value={formData.phoneno} onChange={handleChange} /><span className='text-red-500'>{errors.phoneno}</span><br></br>


              {/* <label htmlFor="emailid" className='text-white'>Email Id:</label><br /> */}
              <TextField color="success" focused fullWidth variant="filled" type='text' name='emailid' label='Enter your Email Id' value={formData.emailid} onChange={handleChange} /><span className='text-red-500'>{errors.emailid}</span><br></br><br></br>


              <label htmlFor="dateid" className='text-black'>Date of Birth:</label><br></br>

              {/* <DatePicker label="Basic date picker" /> */}
              <TextField fullWidth type='date' name='dateid' className='dateOfBirth text-black' value={formData.dateid} onChange={handleChange} /><span className='text-red-500'>{errors.dateid}</span><br></br><br></br>


              <label className='text-black'>Choose your Gender</label> <span className='text-red-500'>{errors.gender}</span><br></br>
              <div className='flex text-black'>
                <RadioGroup
                  row
                  defaultValue="Male"
                  name="gender"
                  onChange={handleChange}
                >


                  <FormControlLabel name=' gender' value='Male' fullWidth control={<Radio />} label="Male" />
                  <FormControlLabel name=' gender' value='Female' fullWidth control={<Radio />} label="Female" />
                  {/* <FormControlLabel type='radio'    name='gender' value='Male' checked={formData.gender === 'Male'} onChange={handleChange}  /> Male<br /><br />  */}
                  {/* <FormControlLabel type='radio'  name='gender' value='Female' checked={formData.gender === 'Female'} onChange={handleChange} /> Female<br /><br /> */}
                </RadioGroup>
              </div>


              <label for='html' className='text-black'>Select your Interest</label> <span className='text-red-500'>{errors.interests}</span><br />
              <div className='flex text-black'>

                <FormControlLabel name='Java' value='java' control={<Checkbox />} label="Java" />
                <FormControlLabel name='C++' value='c++' control={<Checkbox />} label="C++" />
                <FormControlLabel name='Python' value='python' control={<Checkbox />} label="Python" />
                {/* 
                <TextField  type='checkbox' name='interests' value='Java' checked={formData.interests.includes('Java')} onChange={handleChange}  /> Java<br></br> 
                <TextField type='checkbox' name='interests' value='C++' checked={formData.interests.includes('C++')} onChange={handleChange} className='ml-2' />C++<br></br>
                <TextField type='checkbox' name='interests' value='Python' checked={formData.interests.includes('Python')} onChange={handleChange} className='mr-2' /> Python<br></br><br></br>  */}
              </div>


              <div className='flex justify-center'>
                <Button variant="contained" className='btnclass justify-center' type='submit' name='submitb' onclick="message()">Submit</Button>
              </div>
              <div class="message">
                <div class="success" id="success">Your Message Successfully Sent!</div>
                <div class="danger" id="danger">Feilds Can't be Empty!</div>
              </div>
            </form>

          </div>
         
        </div> 
        <div className='bg-current  col-2 content-center grid justify-center items-center'>
        <div className='mx-auto flex gap-10 p-10'>
         
          <div className='mx-auto mt-10  shadow-lg shadow-black text-black p-10 gap-10 items-center'>
            <h1 className='text-4xl font-bold mb-8'>Contact Details</h1>
            <p className='mb-4 text-lg'>Phone no. - 7776979688</p>
            <p className='mb-4 text-lg'>Email - rdabhane47@gmail.com</p>
          </div>
          <div className='mx-auto mt-10  shadow-lg  shadow-black text-black p-10 gap-10 items-center'>
            <h1 className='text-4xl font-bold mb-8'>Contact Details</h1>
            <p className='mb-4 text-lg'>Phone no. - 7776979688</p>
            <p className='mb-4 text-lg'>Email - rdabhane47@gmail.com</p>
          </div>
          <div className='mx-auto mt-10  shadow-lg  shadow-black text-black p-10 gap-10 items-center'>
            <h1 className='text-4xl font-bold mb-8'>Contact Details</h1>
            <p className='mb-4 text-lg'>Phone no. - 7776979688</p>
            <p className='mb-4 text-lg'>Email - rdabhane47@gmail.com</p>
          </div>
        </div>
      </div>
      </section>

      {/*  */}
    </div>
  );
}