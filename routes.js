const express = require('express');
const router = express.Router();

const fs = require('fs');
let rawdata = fs.readFileSync('./courses.json');
let course = JSON.parse(rawdata);


router.get('/', (req,res) =>{
    let outputJSON = {
        courses : course["courses"]
    }
    res.json(outputJSON);
})

router.get('/by_course_code/:qcode', (req,res)=>{
    let query = req.params['qcode']
    filtered_courses = course["courses"].filter(q => q.course_code.includes(query))
    let outputJSON ={
        courses : filtered_courses
    }
    res.json(outputJSON);
})

router.get('/by_title/:qtitle', (req,res)=>{
    let query = req.params['qtitle']
    filtered_courses = course["courses"].filter(q => q.title.includes(query))
    let outputJSON ={
        courses : filtered_courses
    }
    res.json(outputJSON);
})

router.get('/by_instructor/:qname', (req,res)=>{
    let query = req.params['qname']
    filtered_courses = course["courses"].filter(q => q.instructor.includes(query))
    let outputJSON ={
        courses : filtered_courses
    }
    res.json(outputJSON);
})

router.get('/by_level/:qlevel', (req,res)=>{
    let query = req.params['qlevel'];
    filtered_courses = course["courses"].filter(q => q.course_level.includes(query));
    let outJSON = {
            courses: filtered_courses
        }
        res.json(outJSON);
})


router.get('/combined_query/:qname/:qlevel', (req,res)=>{
    let name_query = req.params['qname'];
    let level_query = req.params['qlevel'];
    filtered_courses = course["courses"].filter(
        q => {
            if ((q.instructor == (name_query)) && (q.course_level == (level_query)))
            {
                return true;
            }
            return false
             }
        );
        let outputJSON = {
          courses : filtered_courses
         }
        res.json(outputJSON);

})

module.exports = router;

