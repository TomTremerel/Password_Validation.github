document.addEventListener('DOMContentLoaded', function () {
    let p1 = document.getElementById('p1');
    let p2 = document.getElementById('p2');
    let t1 = document.getElementById('t1');
    let t2 = document.getElementById('t2');
    let t3 = document.getElementById('t3');
    let t4 = document.getElementById('t4');
    let btnValid = document.getElementById('btnValid');
    let t5 = document.getElementById('t5')
    let p3 = document.getElementById('p3')
    function updateStyle(element, isValid) {
        if (isValid) {
            element.style.color = ''; 
        } else {
            element.style.color = 'red';
        }
    }

    p1.addEventListener('input', function () {
    
        updateStyle(t1, p1.value.length >= 8);

        updateStyle(t2, /[A-Z]/.test(p1.value));

        updateStyle(t3, /\d/.test(p1.value));

        updateStyle(t4, /[?,.!;]/.test(p1.value));
    });

    p2.addEventListener('input', function () {

        updateStyle(p2, p1.value === p2.value);
    });

    btnValid.addEventListener('click', function () {
        let isValid = true;

        if (p1.value.length < 8) {
            updateStyle(t1, false);
            isValid = false;
        } else {
            updateStyle(t1, true);
        }

        if (!/[A-Z]/.test(p1.value)) {
            updateStyle(t2, false);
            isValid = false;
        } else {
            updateStyle(t2, true);
        }

        if (!/\d/.test(p1.value)) {
            updateStyle(t3, false);
            isValid = false;
        } else {
            updateStyle(t3, true);
        }

        if (!/[?,.!;]/.test(p1.value)) {
            updateStyle(t4, false);
            isValid = false;
        } else {
            updateStyle(t4, true);
        }

        if (p1.value !== p2.value) {
            updateStyle(p2, false);
            isValid = false;
        } else {
            updateStyle(p2, true);
        }

        if(p3.value === ''){
            updateStyle(t5, false);
            isValid = false;
        } else {
            updateStyle(t5, true);
        }
        if (isValid) {
            afficherPopup()  ;
        } else {
            console.log('Le formulaire contient des erreurs.');
        }
    });
});

const iconOn = document.querySelector('.feather-eye');
const iconOff = document.querySelector('.feather-eye-off');

 const passwordField = document.querySelector('input[type=password]');

 iconOn.addEventListener('click',()=>{
    iconOn.style.display = "none";
    iconOff.style.display = "block";
    passwordField.type = "text";

 });    

 iconOff.addEventListener('click', () => {
    iconOff.style.display = "none";
    iconOn.style.display = "block"; 
    passwordField.type = "password";
 })

const iconOnConfirm = document.querySelector('#iconConfirmPassword .feather-eye');
const iconOffConfirm = document.querySelector('#iconConfirmPassword .feather-eye-off');

 const confirmPasswordField = document.querySelector('#confirmePassword input[type=password]');

 iconOnConfirm.addEventListener('click',()=>{
    iconOnConfirm.style.display = "none";
    iconOffConfirm.style.display = "block";
    confirmPasswordField.type = "text";

 });    

 iconOffConfirm.addEventListener('click', () => {
    iconOffConfirm.style.display = "none";
    iconOnConfirm.style.display = "block"; 
    confirmPasswordField.type = "password";
 })

 function afficherPopup() {
    let popupBackground = document.querySelector(".popupBackground")
    popupBackground.classList.add("active")
}

function cacherPopup() {
    let popupBackground = document.querySelector(".popupBackground")
    popupBackground.classList.remove("active")
}
