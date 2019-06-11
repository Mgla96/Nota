// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJRrNJmGy9PeHeHmynJGH2ZkgUR0KUo84",
  authDomain: "nota-f9686.firebaseapp.com",
  databaseURL: "https://nota-f9686.firebaseio.com",
  projectId: "nota-f9686",
  storageBucket: "nota-f9686.appspot.com",
  messagingSenderId: "131432847743",
  appId: "1:131432847743:web:ac2dae70c0c43677"
};
  firebase.initializeApp(firebaseConfig);
  //var db = firebase.firestore();
  var auth = firebase.auth();


  //User SignUp
  function test(){
   window.alert("test");
  }

  function authRegister(event) {

    event.preventDefault();
    var registerForm = $("form[name='registerForm']");
    var reg_email = registerForm.find('#register_email').val();
    var reg_password = registerForm.find('#register_password').val();
    
    firebase
      .auth()
      .createUserWithEmailAndPassword(reg_email, reg_password)
      .then(function (response) {
        alert("Registered successfully! Check your e-mail for account verification!");
        //user.sendEmailVerification()
      })
      .catch(function(err) {
        alert(err.message);
        console.log(err.code, err.message);
      });
  }
  
  // User SignIn
  function authLogin(event) {
   // alert("called authLogin");
    event.preventDefault();
    var loginForm = $("form[name='loginForm']");
    var log_email = loginForm.find('#login_email').val();
    var log_password = loginForm.find('#login_password').val();
  
    firebase
      .auth()
      .signInWithEmailAndPassword(log_email, log_password)
      .then(function () {
        alert("Sign in successful!");
        
    
      })
      .catch(function(err) {
        alert(err.message);
        console.log(err.code, err.message);
      });
  }
  
  function outputFirebaseData() {
    this.firebaseToken.innerHTML = "Hello world";
  }


  /*
  function sendEmailVerification(data) {
    var user = firebase.auth().currentUser;
    var email = data.email || user.email;
    return user.emailVerified || user.sendEmailVerification({
      url: window.location.href + '?email=' + user.email,
    });
  }

*/




  function passwordReset(){

    var forgotPasswordForm = $("form[name='forgotPasswordForm']");
    var email = forgotPasswordForm.find('#check_email').val();

    //window.alert(email);
    //String emailString = email.toString();
    //email var works but this sendPasswordResetEmail function doesn't work some reason

    firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(function () {
      alert("Check your email to recover your password.");

    })
    .catch(function(err) {
      alert(err.message);
     
    });

  }

  function signOut(){
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      console.log('User Logged Out!');
    }).catch(function(error) {
      // An error happened.
      console.log(error);
    });

  }



  auth.onAuthStateChanged(user => {
    if(user) {
      window.location = 'index.html'; //After successful login, user will be redirected to home.html
    }

    if (user.emailVerified) {
      alert('Email is verified');
    }
    else {
      alert('Email not verified');
           
      user.sendEmailVerification().then(function())
        alert("sent email request");
       })
       .catch(function(err) {
        alert(err.message);
        
      });
      
    }
  });
