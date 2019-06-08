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
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
  
  




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

