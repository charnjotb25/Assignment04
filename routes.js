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










/*
REAL

const express = require('express');
const router = express.Router();

const fs = require('fs');
//const { filter } = require("lodash");
let rawdata = fs.readFileSync('./courses.json');
let course = JSON.parse(rawdata);


// Define routes

router.get('/', (req,res)=>{
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


/*
router.get('/by_level/:qlevel', (req,res)=>{
    var q_level = req.params['qlevel'];
    Course_specific_level = course["courses"].filter(q => q.course_level == q_level);
    res.json(Course_specific_level)
})

*/


/*
router.get('/combined_query/:qname/:qlevel', (req,res)=>{
    var q_name = req.params['qname'];
    var q_level = req.params['qlevel'];
    Combined_Course = course["courses"].filter(
        q => {
            if ((q.instructor == q_name) && (q.course_level == q_level)){
                return true;
            }
            return false
        }
        );
        res.json(Combined_Course)
})
*/

/*
router.get('/combined_query/:qname/:qlevel', (req,res)=>{
    let name_query = req.params['qname'];
    let level_query = req.params['qlevel'];
    filtered_courses = course["courses"].filter(
        q => {
            if ((q.instructor.includes(name_query)) && (q.course_level.includes(level_query))){
                return true;
            }
            return false
        }
        );

// Changed

        let outputJSON = {
          courses : filtered_courses
         }
        res.json(outputJSON);
//

      //  res.json(Combined_Course)
})

//////





module.exports = router;

*/














/*
const express = require('express');
const router = express.Router();

const fs = require('fs');
//const { filter } = require("lodash");
let rawdata = fs.readFileSync('./courses.json');
let c = JSON.parse(rawdata);


// Define routes

router.get('/', (req,res)=>{
    let outputJSON = {
        Courses : c["courses"]
    }
    res.json(outputJSON);
})

router.get('/by_course_code/:qcode', (req,res)=>{
    let query = req.params['qcode']
    filtered_Courses = c["courses"].filter(q => q.course_code.includes(query))
    let outputJSON ={
        Courses : filtered_Courses
    }
    res.json(outputJSON);
})

router.get('/by_title/:qtitle', (req,res)=>{
    let query = req.params['qtitle']
    filtered_Courses = c["courses"].filter(q => q.title.includes(query))
    let outputJSON ={
        Courses : filtered_Courses
    }
    res.json(outputJSON);
})

router.get('/by_instructor/:qname', (req,res)=>{
    let query = req.params['qname']
    filtered_Courses = c["courses"].filter(q => q.instructor.includes(query))
    let outputJSON ={
        Courses : filtered_Courses
    }
    res.json(outputJSON);
})

router.get('/by_level/:qlevel', (req,res)=>{
    var q_level = req.params['qlevel'];
    Course_specific_level = c["courses"].filter(q => q.course_level == q_level);
    res.json(Course_specific_level)
})

router.get('/combined_query/:qname/:qlevel', (req,res)=>{
    var q_name = req.params['qname'];
    var q_level = req.params['qlevel'];
    Combined_Course = c["courses"].filter(
        q => {
            if ((q.instructor == q_name) && (q.course_level == q_level)){
                return true;
            }
            return false
        }
        );
        res.json(Combined_Course)
})

module.exports = router;



*/



/*
const express = require('express');
const router = express.Router();

const fs = require('fs');
//const { filter } = require("lodash");
let rawdata = fs.readFileSync('./courses.json');
let course = JSON.parse(rawdata);


// Define routes

router.get('/', (req,res)=>{
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
    filtered_courses = course["courses"].filter(q => q.course_level == query);
    /////   Changed
    let outJSON = {
            courses: filtered_courses
        }

        res.json(outJSON);
    /////

    ////res.json(Course_specific_level)
})

router.get('/combined_query/:qname/:qlevel', (req,res)=>{
    let name_query = req.params['qname'];
    let level_query = req.params['qlevel'];
    filtered_courses = course["courses"].filter(
        q => {
            if ((q.instructor == name_query) && (q.course_level == level_query)){
                return true;
            }
            return false
        }
        );

// Changed

        let outputJSON = {
          courses : filtered_courses
         }
        res.json(outputJSON);
//

      //  res.json(Combined_Course)
})

module.exports = router;
*/
