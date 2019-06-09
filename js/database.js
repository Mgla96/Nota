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
  /*
  this.firebaseToken = document.querySelector("#firebase-token");
  this.firebaseToken.innerHTML = "Welcome !";
  */


  //User SignUp
  function test(){
   alert("test");
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
        alert("Registered successfully! Check your e-mail for account verification!")
        //this.firebaseToken.innerHTML = "Registered successfully! Check your e-mail for account verification!";
        //sendEmailVerification();
      })
      .catch(function(err) {
        alert(err.message);
        console.log(err.code, err.message);
      })
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
        alert("Sign in successful!")
        //this.firebaseToken.innerHTML = "Sign-in Successful!";
       // console.log('sign in successful !');
        // outputFirebaseData();
      })
      .catch(function(err) {
        alert(err.message);
        console.log(err.code, err.message);
      });
  }
  
  function outputFirebaseData() {
    this.firebaseToken.innerHTML = "Hello world";
  }


  function passwordReset(){
   // event.preventDefault();
    var forgotPasswordForm = $("form[name='forgotPasswordForm']");
    String email = forgotPasswordForm.find('#check_email').val();

    firebase
    .auth().sendPasswordResetEmail(email).then(function() {
      alert("Check your email to recover your password."); // Email sent.
    }).catch(function(err) {
      alert(err.message);
    });
  }
  

  auth.onAuthStateChanged(user => {
    if(user) {
      window.location = 'index.html'; //After successful login, user will be redirected to home.html
    }
  });
/*

  var restaurants = [];
  db.collection("restaurants")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        console.log(doc.data());
        // doc.data() is never undefined for query doc snapshots
        restaurants.push(doc.data());
        console.log(restaurants);
      });
      RenderRestaurants();
    })
    .catch(function(error) {
      console.log("Error getting documents: ", error);
    });
  
  function RenderRestaurants() {
    var container = document.getElementById("restaurant-container");
    container.innerHTML = "";
    for (i = 0; i < restaurants.length; i++) {
      htmlstring = `
      <div class="restaurant m-1 col col-12 col-md-4 col-lg-3 p-0 shadow">
      <div class="card">
        <div class="fill">
          <img
            class="card-img-top"
            src="${restaurants[i].image}"
            alt="Card image cap"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title">${restaurants[i].name}</h5>
          <div class="stars pb-2">
            <i class="fa${restaurants[i].rating<1?'r':''} fa-star "></i>
            <i class="fa${restaurants[i].rating<2?'r':''} fa-star "></i>
            <i class="fa${restaurants[i].rating<3?'r':''} fa-star "></i>
            <i class="fa${restaurants[i].rating<4?'r':''} fa-star "></i>
            <i class="fa${restaurants[i].rating<5?'r':''} fa-star "></i>
          </div>
          <p class="card-text">
            ${restaurants[i].description}
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
    `;
      container.innerHTML += htmlstring;
    }
  }

*/