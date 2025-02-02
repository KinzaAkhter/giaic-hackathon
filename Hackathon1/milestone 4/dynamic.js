//get refrence to the form and display part
var form = document.getElementById("resume-form");
var DisplayElement = document.getElementById("resume-display");
//handles form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var qualification = document.getElementById('qualification').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //generate resume content dynamically
    var resumeHTML = "\n    <h2><b>EDITABLE RESUME</b></h2>\n    <h3>Personal Information:</h3>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n    <h3>Qualification</h3>\n    <p contenteditable=\"true\">").concat(qualification, "</p>\n\n     <h3>Experience</h3>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n\n     <h3>Skills</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    //display resume
    if (DisplayElement) {
        DisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is empty');
    }
});
