var currentDate = moment();
var format = 'hh:mm:ss';

var nine = document.getElementById('9');
var ten = document.getElementById('10');
var eleven = document.getElementById('11');
var tweleve = document.getElementById('12');
var one = document.getElementById('1');
var two = document.getElementById('2');
var three = document.getElementById('3');
var four = document.getElementById('4');
var five = document.getElementById('5');

var nineTask = {
    p: nine.innerText
};

var nineTask_ser = JSON.stringify(nineTask);

document.getElementById("current-day").textContent =
  currentDate.format("dddd MMMM Do");

var loadTasks = function () {
    
}

var saveTasks = function () {
    localStorage.setItem("nineTask", nineTask_ser);
    console.log(localStorage);
}

$(".btn").on("click", function () {
    saveTasks();
})

$(".text").on("click", "p", function () {
    var text = $(this).text().trim();
    var textInput = $("<textarea>").addClass("form-control").val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
})

$(".text").on("blur", "textarea", function () {
    var text = $(this).val().trim();
    var taskP = $("<p>").addClass("m-1").text(text);
    $(this).replaceWith(taskP);
})

function checkNine(event) {
    // check if hour is before current 9AM
    if (currentDate.isBefore(moment('09:00:00', format))) {
        // set background to grey
        $(event).addClass("bg-secondary");
        // event.classList.add('bg-secondary');
    } else if (currentDate.isAfter(moment('10:00:00', format))) {
        // set background to red
        $(event).addClass("bg-danger");
    } else {
        // set background to blue
        $(event).addClass("bg-primary")
    }
};

function checkTen(event) {
    // check if hour is before current 9AM
    if (currentDate.isBefore(moment('10:00:00', format))) {
        // set background to grey
        $(event).addClass("bg-secondary");
        // event.classList.add('bg-secondary');
    } else if (currentDate.isAfter(moment('11:00:00', format))) {
        // set background to red
        $(event).addClass("bg-danger");
    } else {
        // set background to blue
        $(event).addClass("bg-primary")
    }
};

function checkEleven(event) {
    // check if hour is before current 9AM
    if (currentDate.isBefore(moment('11:00:00', format))) {
        // set background to grey
        $(event).addClass("bg-secondary");
        // event.classList.add('bg-secondary');
    } else if (currentDate.isAfter(moment('12:00:00', format))) {
        // set background to red
        $(event).addClass("bg-danger");
    } else {
        // set background to blue
        $(event).addClass("bg-primary")
    }
};

function checkTweleve(event) {
    // check if hour is before current 9AM
    if (currentDate.isBefore(moment('12:00:00', format))) {
        // set background to grey
        $(event).addClass("bg-secondary");
        // event.classList.add('bg-secondary');
    } else if (currentDate.isAfter(moment('13:00:00', format))) {
        // set background to red
        $(event).addClass("bg-danger");
    } else {
        // set background to blue
        $(event).addClass("bg-primary")
    }
};

function checkOne(event) {
    // check if hour is before current 9AM
    if (currentDate.isBefore(moment('13:00:00', format))) {
        // set background to grey
        $(event).addClass("bg-secondary");
        // event.classList.add('bg-secondary');
    } else if (currentDate.isAfter(moment('14:00:00', format))) {
        // set background to red
        $(event).addClass("bg-danger");
    } else {
        // set background to blue
        $(event).addClass("bg-primary")
    }
};

function checkTwo(event) {
    // check if hour is before current 9AM
    if (currentDate.isBefore(moment('14:00:00', format))) {
        // set background to grey
        $(event).addClass("bg-secondary");
        // event.classList.add('bg-secondary');
    } else if (currentDate.isAfter(moment('15:00:00', format))) {
        // set background to red
        $(event).addClass("bg-danger");
    } else {
        // set background to blue
        $(event).addClass("bg-primary")
    }
};

function checkThree(event) {
    // check if hour is before current 9AM
    if (currentDate.isBefore(moment('15:00:00', format))) {
        // set background to grey
        $(event).addClass("bg-secondary");
        // event.classList.add('bg-secondary');
    } else if (currentDate.isAfter(moment('16:00:00', format))) {
        // set background to red
        $(event).addClass("bg-danger");
    } else {
        // set background to blue
        $(event).addClass("bg-primary")
    }
};

function checkFour(event) {
    // check if hour is before current 9AM
    if (currentDate.isBefore(moment('16:00:00', format))) {
        // set background to grey
        $(event).addClass("bg-secondary");
        // event.classList.add('bg-secondary');
    } else if (currentDate.isAfter(moment('17:00:00', format))) {
        // set background to red
        $(event).addClass("bg-danger");
    } else {
        // set background to blue
        $(event).addClass("bg-primary")
    }
};

function checkFive(event) {
    // check if hour is before current 9AM
    if (currentDate.isBefore(moment('17:00:00', format))) {
        // set background to grey
        $(event).addClass("bg-secondary");
        // event.classList.add('bg-secondary');
    } else if (currentDate.isAfter(moment('18:00:00', format))) {
        // set background to red
        $(event).addClass("bg-danger");
    } else {
        // set background to blue
        $(event).addClass("bg-primary")
    }
};

loadTasks();
checkNine(nine);
checkTen(ten);
checkEleven(eleven);
checkTweleve(tweleve);
checkOne(one);
checkTwo(two);
checkThree(three);
checkFour(four);
checkFive(five);