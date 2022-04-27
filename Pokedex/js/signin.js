window.onload = init;

function init() {
  if(!localStorage.getItem("token")) {
    document.querySelector('.btn-secondary').addEventListener('click', function() {
      window.location.href = 'login.html';
    });

    document.querySelector('.btn-primary').addEventListener('click', signin); 
  }
  else {
    window.location.href = 'pokedex.html';
  }
}

function signin() {
  var name = document.getElementById('input-name').value;
  var mail = document.getElementById('input-mail').value;
  var password = document.getElementById('input-password').value;

  axios({
    method: 'post',
    url: 'http://localhost:3000/user/signin',
    data: {
      user_name: name,
      user_mail: mail,
      user_password: password,
    }
  }).then(function(response) {
    console.log(response);
    alert('Usuario registrado correctamente');
    window.location.href = 'login.html';
  }).catch(function(error) {
    console.log(error);
  });
}