// otwieranie menu
document.getElementsByClassName('mobile-hamburger')[0].addEventListener('click', function(){
    document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
})


//zamykanie menu
document.getElementsByClassName('mobile-close')[0].addEventListener('click', function(){
    document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
})


// obsługa formularza

document.getElementById('appointment-form').addEventListener('submit', function(e){
    e.preventDefault();

    const appointmentMessage = document.querySelector('.appointment-message');

    let formFields = document.getElementsByClassName('form-field');
    let allFields = false;

    for(let i = 0; i<formFields.length; i++) {

        if(formFields[i].value === '') {
            allFields = false;
            formFields[i].classList.add('error');
        } else {
            allFields = true;
            formFields[i].classList.remove('error');
        }
    }

    if(allFields){
        console.log('wysłanie formularza');
    } else {
        appointmentMessage.classList.add('error');
        appointmentMessage.innerText = 'Wypełnij wszystkie pola'
    }

})