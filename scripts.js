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
  
// Function to retrieve user profiles and display them in a table
function displayUserProfiles() {
    const userTable = document.getElementById('user-table').getElementsByTagName('tbody')[0];
  
    // Retrieve data for the users from the database
    database.ref('users').once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const userData = childSnapshot.val();
        const row = userTable.insertRow();
        row.innerHTML = `
          <td>${userData.name}</td>
          <td>${userData.age}</td>
          <td>${userData.gender}</td>
          <td>${userData.caption}</td>
          <td><img src="${userData.image}" alt="${userData.name}" style="max-width: 100px;"></td>
        `;
      });
    })
    .then(() => {
      console.log('User data retrieved successfully.');
    })
    .catch((error) => {
      console.error('Error retrieving user data:', error);
    });
  }
  
  

  