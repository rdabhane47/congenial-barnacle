function message(){
    var firstname = document.getElementById('fname');
    var lastname = document.getElementById('lname');
    var phonenumber = document.getElementById('phoneno');
    var emailId = document.getElementById('emailid');
    var dateOfBirth = document.getElementById('dateid');
    var genderSelect = document.getElementById('gender');
    var interestSelect = document.getElementById('interests');
    
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(firstname.value === '' || lastname.value === ''|| phonenumber.value === ''||emailId.value === ''|| dateOfBirth.value === ''||genderSelect.value === ''||interestSelect.value === '' ){
        danger.style.display = 'block';
    }
    else{
        setTimeout(() => {
            firstname.value = '';
            lastname.value = '';
            phonenumber.value = '';
            emailId.value = '';
            dateOfBirth.value = '';
            lastname.value = '';
            genderSelect.value = '';
            interestSelect.value = '';
        }, 2000);

        success.style.display = 'block';
    }


    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);

}