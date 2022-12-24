import React from 'react'
import ClassCard from './classcard'
import { Grid } from '@mui/material';

const Class_collection = () => {
  const class_data = [
    {
        uuid: "difdjfhd5dffdf",
        name: "Class 1 - A",
        faculty_name : "Bhargesh Gediya",
        room_name : 1,
        floor : 1,
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1BzA6LCBEVq2b5Z2q0WuAEVP3URbB7hL3qg&usqp=CAU"
    },
    {
        uuid: "dfhjdsfh8645564",
        name: "Class 1 - B",
        faculty_name : "Sudip Khokhar",
        room_name : 2,
        floor : 1,
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjP1uZryO-Cfa_58EzPgS4UG6nSCqK3CBtGMMv2bCv3ogHA5HQsrRUA8aEuZXRSJ5hwKM&usqp=CAU"
    },
    {
        uuid: "ldskfnjdkfdfas",
        name: "Class 1 - C",
        faculty_name : "Hari Satani",
        room_name : 3,
        floor : 1,
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGQmHYLycW-0i160f9ma-DgBLGCmUy0Ayu19R8PYDRmAs5PXH1r4NcOADX3IblRHUkHKA&usqp=CAU"
    },
    {
        uuid: "ewhjjhifjisdff",
        name: "Class 2 - A",
        faculty_name : "Akshay Khunt",
        room_name : 4,
        floor : 1,
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWm76kGYtMA1q-wAOlcWKJYefFvsANTy_Z9pW9SGLL0V4AagqbrQNtUUDzyUxHUYlHMRY&usqp=CAU"
    },
    {
        uuid: "ioosdnjff4444",
        name: "Class 2 - B",
        faculty_name : "Kush Dave",
        room_name : 5,
        floor : 2,
        image: "https://www.shutterstock.com/image-photo/classroom-school-without-student-teacher-260nw-1940009296.jpg"
    },
    {
        uuid: "popodfjjdhsdfdsdf",
        name: "Class 2 - C",
        faculty_name : "Jaitun Godhani",
        room_name : 6,
        floor : 2,
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ZQDmDBxm4WnIUrcuSh8Xh2sloNVRPT_6kQ&usqp=CAU"
    },
    {
        uuid: "pdkjkfjdkfjnn",
        name: "Class 3 - A",
        faculty_name : "Denish Godhani",
        room_name : 7,
        floor : 2,
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8KDSbUdgBMv1am6oNM7EsRvzlX3Lir9ns6rVJ-RY54PKq2ukJkjlcOx4v98Nw4VgAxUQ&usqp=CAU"
    },
    {
        uuid: "opdspnfdf78",
        name: "Class 3 - B",
        faculty_name : "Komal Kothiya",
        room_name : 8,
        floor : 2,
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn8sXdusVLmuUe8UOPwcy4ziTDtrRgYJUpng&usqp=CAU"
    },
    {
        uuid: "lfdhbhedbccf1212",
        name: "Class 3 - C",
        faculty_name : "Yadnesh",
        room_name : 9,
        floor : 3,
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6dOPlzl8JesweDnzoIbBTU2nXEElkVNJW6g&usqp=CAU"
    }
  ];
  return (
    <div>
        <Grid container spacing={2}>
        {
            class_data.map((class_no) => (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ClassCard classData={class_no} />
                </Grid>
            ))
        }
        </Grid>
    </div>
  )
}

export default Class_collection