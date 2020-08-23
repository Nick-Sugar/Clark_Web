firebase.auth().onAuthStateChanged( (user) => {
      let h1   = document.querySelector('h1');
      let info = document.querySelector('#info');

      if(user) {
        h1.innerText   = 'Login Complete!';
        info.innerHTML = `${user.displayName}さんがログインしました<br>` +
                         `(${user.uid})`;
        console.log(user);
      }
      else {
        h1.innerText = 'Not Login';
	window.location = "login.html"
      }
    });