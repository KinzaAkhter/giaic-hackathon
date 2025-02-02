//get refrence to the form and display part
const form = document.getElementById("resume-form") as HTMLFormElement;
const DisplayElement = document.getElementById("resume-display") as HTMLDivElement;

//handles form submission
form.addEventListener('submit',(event:Event)=>{
    event.preventDefault(); //prevent page reload

    //collect input values
    const name=(document.getElementById('name') as HTMLInputElement).value
    const email=(document.getElementById('email') as HTMLInputElement).value
    const phone=(document.getElementById('phone') as HTMLInputElement).value
    const qualification=(document.getElementById('qualification') as HTMLInputElement).value
    const experience=(document.getElementById('experience') as HTMLInputElement).value
    const skills=(document.getElementById('skills') as HTMLInputElement).value

    //generate resume content dynamically
    const resumeHTML = `
    <h2><b>EDITABLE RESUME</b></h2>
    <h3>Personal Information:</h3>
    <p><b>Name:</b><span contenteditable="true">${name}</span></p>
    <p><b>Email:</b><span contenteditable="true">${email}</span></p>
    <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>

    <h3>Qualification</h3>
    <p contenteditable="true">${qualification}</p>

     <h3>Experience</h3>
    <p contenteditable="true">${experience}</p>

     <h3>Skills</h3>
    <p contenteditable="true">${skills}</p>
    `;

    //display resume
    if(DisplayElement){
        DisplayElement.innerHTML = resumeHTML;
    }else{
        console.error('The resume display element is empty');
    }
});

