// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCTsGZI9t1X-kRyM8kl45BfA6_x08oVwmU",
    authDomain: "profileapp-c8e86.firebaseapp.com",
    databaseURL: "https://profileapp-c8e86-default-rtdb.firebaseio.com",
    projectId: "profileapp-c8e86",
    storageBucket: "profileapp-c8e86.appspot.com",
    messagingSenderId: "448578046420",
    appId: "1:448578046420:web:d52d4a29c60b2d6f8e195e"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Reference to your Realtime Database
  const database = firebase.database();
  
  // Function to retrieve user profiles and display them on the webpage
  function displayUserProfiles() {
    const userProfileContainer = document.getElementById('user-profiles');
  
    // Retrieve data for the first two users from the database
    database.ref('users').limitToFirst(2).once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const userData = childSnapshot.val();
        const userProfileCard = document.createElement('div');
        userProfileCard.classList.add('user-profile');
        userProfileCard.innerHTML = `
          <h2>${userData.name}</h2>
          <p>Email: ${userData.email}</p>
          <p>Age: ${userData.age}</p>
          <!-- Add more profile information as needed -->
        `;
        userProfileContainer.appendChild(userProfileCard);
      });
    });
  }
  
  // Call the function to display user profiles when the page loads
  window.onload = displayUserProfiles;
  