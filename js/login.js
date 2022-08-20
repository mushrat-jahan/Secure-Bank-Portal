document.getElementById('btn-submit').addEventListener('click', function(){
     const emailFild = document.getElementById('user-email');
     const email = emailFild.value;
     console.log(email)
     const passwordFild = document.getElementById('user-password');
     const password =passwordFild.value;
     console.log(password);

    // Denger: do not varify email or password on the client site

    if(email == 'sontan@baap.com' && password == 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('invalid user')
    }

})