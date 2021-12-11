const appState = {
    current_view : "#intro_view",
    current_question : -1,
    current_model : {},
    current_quiz : "",
    correctAnswers : 0,
    questionsAnswered : 0,
    totalQuestions : 20
}

let firstName = "";
let lastName = "";
//let userName = firstName + " " + lastName;
var time_elapsed = 0;
var timer;

var user_response = "";


document.addEventListener('DOMContentLoaded', () => {
    appState.current_view = "#intro_view"
    appState.current_model = {
        action : "start"
    }
    update_view(appState);

    document.querySelector("#quiz_div").onclick = (e) => {
        startButtonEvent(e);
    }
});

async function startButtonEvent(e) {
    if (appState.current_view == "#intro_view") {
        if (e.target.dataset.action == "start") {
            appState.current_question = 0;

            firstName = document.querySelector("#firstName").value;
            lastName = document.querySelector("#lastName").value;

            let api_url = "https://my-json-server.typicode.com/charnjotb25/"
            let api_url_endpoint = ""
            if (document.querySelector("#quiz1").checked == true) {
                api_url_endpoint = "Quiz1_questions/quiz_one";
            }
            else if(document.querySelector("#quiz2").checked == true){
                api_url_endpoint = "Quiz2_questions/quiz_two";
            }
            
            let api = api_url+api_url_endpoint;
            appState.current_quiz = api;
            appState.current_model = await getModel(api,appState);
            quiz_app_view(appState);
            update_view(appState);

            start_timer();
            document.querySelector("#time_elapsed").querySelector("span").innerHTML = 0;
            timer = setInterval(async()=>{
                time_elapsed++;
                document.querySelector("#time_elapsed").querySelector("span").innerHTML = `${time_elapsed}`;
            },1000);
            update_counter(appState);
        }
    }

    if (appState.current_view == "#true_false_view") {
        if (e.target.dataset.action == "answer") {
            
            user_response = e.target.dataset.answer;
        
        }
        if (e.target.dataset.action == "submit") {

            check_user_response(user_response,appState.current_model)
        }
    }

    if (appState.current_view == "#multiple_choice_view") {
        if (e.target.type == "radio") {
            user_response = e.target.value;
        }
        if (e.target.dataset.action == "submit") {

            check_user_response(user_response,appState.current_model)
        }
    }

    if (appState.current_view == "#yes_no_view") {
        if (e.target.type == "radio") {
            user_response = e.target.value;
        }
        if (e.target.dataset.action == "submit") {

            check_user_response(user_response,appState.current_model)
        }
    }

    if (appState.current_view == "#complete_the_sentence_view") {
        if (e.target.dataset.action == "submit") {

            user_response = document.querySelector('input[name="answer"]').value;

            check_user_response(user_response,appState.current_model)
        }
    }

    if (appState.current_view == "#text_input_view") {
        if (e.target.dataset.action == "submit") {

            user_response = document.querySelector('input[name="answer"]').value;

            check_user_response(user_response,appState.current_model)
        }
    }

    if (appState.current_view == "#feedback_view") {
        if (e.target.dataset.action == "gotIt") {
            updateQuestion(appState);
        }

    }

    if (appState.current_view == "#end_view") {
        if (e.target.dataset.action == "retake") {
            appState.current_question = 0;
            appState.correctAnswers = 0;
            appState.questionsAnswered = 0;
            appState.current_model = await getModel(appState.current_quiz,appState);
            quiz_app_view(appState);
            update_view(appState);
            update_counter(appState);

            document.querySelector("#time_elapsed").querySelector("span").innerHTML = time_elapsed = 0;
            timer = setInterval(async()=>{
                time_elapsed++;
                document.querySelector("#time_elapsed").querySelector("span").innerHTML = `${time_elapsed}`;
            },1000);
        }
        if (e.target.dataset.action == "return") {
            window.location.reload();
        }
    }

}

async function getModel(url,appState) {
    const response = await fetch(url);
    const result = await response.json();
    let model = result[appState.current_question];
    return model;
}

function start_timer() {
    document.querySelector("#time_elapsed").querySelector("p").innerHTML = "Time Elapsed:";
}

function check_user_response(user_answer, model) {

    if (user_answer == model.correctAnswer) {
        appState.correctAnswers++;
        document.querySelector("#quiz_div").innerHTML = `
                                                        <h3> Your answer is <span style=color:green;> Correct</span> <h3>
                                                        <h4> Good Job!!!</h4>
                                                        `;
        setTimeout(()=> {
            updateQuestion(appState);
        }, 1000);
    }
    else {
        appState.current_view = "#feedback_view";
        update_view(appState);
        document.querySelector("#wrong_answer").innerHTML = `
                                                            Your Answer: ${user_answer}
                                                            `;
    }
    appState.questionsAnswered++;
    update_counter(appState);
}

async function updateQuestion(appState) {
    const response = await fetch(appState.current_quiz);
    const result = await response.json();
    if (appState.current_question < (result.length-1)) {
        appState.current_question = appState.current_question + 1;
        appState.current_model = await getModel(appState.current_quiz,appState);
    }
    else {
        appState.current_question = -2;
        appState.current_model = {};
        clearInterval(timer);
    }
    quiz_app_view(appState);
    update_view(appState);
}

function quiz_app_view(appState) {
    if (appState.current_question == -2) {
        appState.current_view = "#end_view";
        return
    }
    if (appState.current_model.questionType == "true_false") {
        appState.current_view = "#true_false_view";
    }
    else if (appState.current_model.questionType == "multiple_choice") {
        appState.current_view = "#multiple_choice_view";
    }

    else if (appState.current_model.questionType == "yes_no") {
        appState.current_view = "#yes_no_view";
    }
    else if (appState.current_model.questionType == "complete_the_sentence") {
        appState.current_view = "#complete_the_sentence_view";
    }

    else if (appState.current_model.questionType == "text_input") {
        appState.current_view = "#text_input_view";
    }
}


function update_view(appState) {
    const html_element = render_widget(appState.current_model, appState.current_view)
    document.querySelector("#quiz_div").innerHTML = html_element;

    if (appState.current_view == "#end_view") {
        let userName = firstName + " " + lastName;
        var percentage = appState.correctAnswers / appState.questionsAnswered;
            percentage = Math.round(percentage * 100);
     
        if (percentage > 80) {
            document.querySelector("#completion_text").innerHTML = `
                                                                    Your Score: ${percentage}% <br>
                                                                    Congratulations ${userName}, you passed the quiz!!!
                                                                   `
        }
        else {
            document.querySelector("#completion_text").innerHTML = `
                                                                    Your Score: ${percentage}% <br>
                                                                    Sorry ${userName}, you failed the quiz.
                                                                   `
        }
    }
}

function update_counter(appState) {
    document.querySelector("#questions_answered").querySelector("span").innerHTML = `Questions Answered:<br>${appState.questionsAnswered}`;
    var percentage = appState.correctAnswers / appState.questionsAnswered;
        percentage = Math.round(percentage * 100);
    
    document.querySelector("#score").querySelector("span").innerHTML = `Score:<br>${percentage}%`;
}


const render_widget = (model,view) => {
    template_source = document.querySelector(view).innerHTML;
    var template = Handlebars.compile(template_source);
    var html_widget_element = template(model);
    return html_widget_element;
}
