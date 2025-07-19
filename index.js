const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const dob = document.getElementById('dob');
const gender = document.getElementById('gender');
const per = document.getElementById('per');
const phy = document.getElementById('phy');
const che = document.getElementById('che');
const mat = document.getElementById('mat');
const course = document.getElementById('course');
const email = document.getElementById('email');


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
})

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}


const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const dobValue = dob.value.trim();
    const genderValue = gender.value.trim();
    const perValue = per.value.trim();
    const phyValue = phy.value.trim();
    const cheValue = che.value.trim();
    const matValue = mat.value.trim();
    const courseValue = course.value.trim();
    const emailValue = email.value.trim();

     if(firstnameValue === '') {
        setError(firstname, 'firstname is required');
    } else {
        setSuccess(firstname);
    }


    if(lastnameValue === '') {
        setError(lastname, 'lastname is required');
    } else {
        setSuccess(lastname);
    }

    if(dobValue === ''){
        setError(dob, 'Date of birth is required');
    }else{
        setSuccess(dob);
    }

    if(genderValue === ''){
        setError(gender, 'Gender is required');
    }else{
        setSuccess(gender);
    }

    if(perValue === ''){
        setError(per, 'Percentage is required');
    }else{
        setSuccess(per);
    }
    
    if(phyValue === '') {
    setError(phy, 'phy is required');
    } else if (Number(phyValue) < 45) {
    setError(phy, 'Above 45 only applicable.');
    } else {
    setSuccess(phy);
    }

    if(cheValue === ''){
         setError(che, 'che is required');
    } else if (Number(cheValue) < 45 ) {

        setError(che, 'Above 45 only aplicable');
    }else{
        setSuccess(che);
    }

    if(matValue === ''){
         setError(mat, 'mat is required');
    } else if (Number(matValue) < 45 )  {
        setError(mat, 'Above 45 only aplicable');
    }else{
        setSuccess(mat);
    }

     if(courseValue === '' || courseValue === 'Select Here'){
        setError(course, 'select your course');
    }else{
        setSuccess(course);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

}; 
