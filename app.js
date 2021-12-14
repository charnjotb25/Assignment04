
var updateView = async (button)=>{
      if (button.dataset.querytype =='by_title'){
        let queryvalue = document.querySelector('#titleQuery').value;
        api = `https://charnjotb-assignment04.herokuapp.com/api/by_title/${queryvalue}`;

    }else if (button.dataset.querytype =='by_course_code'){
        let queryvalue = document.querySelector('#courseNumberQuery').value;
        api = `https://charnjotb-assignment04.herokuapp.com/api/by_course_code/${queryvalue}`;

    }else if (button.dataset.querytype =='by_instructor'){
        let queryvalue = document.querySelector('#instructorQuery').value;
        api = `https://charnjotb-assignment04.herokuapp.com/api/by_instructor/${queryvalue}`;

    }else if (button.dataset.querytype =='by_level'){
        let queryvalue = document.querySelector('#levelQuery').value;
        api = `https://charnjotb-assignment04.herokuapp.com/api/by_level/${queryvalue}`;

    }else if (button.dataset.querytype =='combined_query'){
        let queryName = document.querySelector('#combined_instructorQuery').value;
        let queryLevel = document.querySelector('#combined_levelQuery').value;
        api = `https://charnjotb-assignment04.herokuapp.com/api/combined_query/${queryName}/${queryLevel}`;

    }
    const data = await fetch(api);
    const model = await data.json();
    render_view(model);
}


var render_view = (model) =>{
    var source = document.querySelector("#show_results_view").innerHTML;
    var template = Handlebars.compile(source);
    var html = template(model);

    document.querySelector("#results_view").innerHTML = html;
}


