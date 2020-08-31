firebase.auth().onAuthStateChanged( (user) => {
      let h1   = document.querySelector('h1');
      let info = document.querySelector('#info');

      if(user) {
        h1.innerText   = 'Login Complete!';
        info.innerHTML = `${user.displayName}さんがログインしました<br>` +
                         `(${user.photoURL})`;
        console.log(user);
      }
      else {
<<<<<<< HEAD
          h1.innerText = 'Not Login';
          window.location = "login.html"
=======
        h1.innerText = 'Not Login';
        window.location = "login.html"
>>>>>>> 8e108bc978e2bedba80e94fa3455fe19665043e7
      }
    });
document.addEventListener("DOMContentLoaded", function(){
const logoutBtn = document.getElementById('logout')

logoutBtn.addEventListener('click', () => {
  firebase.auth().signOut().then(() => {
    // 成功
  }).catch(err => {
    // 失敗
  })
})
});
