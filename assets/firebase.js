firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  	//Photo
    if ( user.photoURL != null)
    {
        var image = document.createElement("IMG");
        image.setAttribute("src", user.photoURL);
        console.log("PHOTO URL is: " + user.photoURL);
        console.log(user.photoURL);
      }
    else {
      var image = document.createElement("IMG");
      image.setAttribute("src", "https://rajeshindia-production.s3.amazonaws.com/uploads/management/image/3/Dummy_Image_Man.jpg");
      console.log("PHOTO URL is: " + user.photoURL);
      console.log(user.photoURL);
    }
  	    image.setAttribute("width", "100");
  	    image.setAttribute("border-radius", "50%");
  	    image.setAttribute("height", "100");
  	    image.setAttribute("alt", "Rowhit Swami");
  	document.getElementById("user-image").appendChild(image);


    //Name
    var userName = user.displayName;
    var name = document.createElement("h5");
    name.id = 'myNameG';
    var node = document.createTextNode(userName);
    name.appendChild(node);
    document.getElementById("user-image").appendChild(name);
    console.log(userName);


    //Email
    var userMail = document.createElement("h6");
    userMail.id = 'myMailG';
    var email = document.createTextNode(user.email);
    userMail.appendChild(email);
    document.getElementById('user-image').appendChild(userMail);
    console.log(email);

  } else {
    // No user is signed in
    console.log("no user signed in");

  }

// function getName()
//   {
//     console.log("USER NAME IS" + userName);
//     return userName;
//   }

});

// console.log("Get Name is: " + getName());

//   Getting user info in firebase when user is signed in
//   name = user.displayName;
//   email = user.email;
//   photoUrl = user.photoURL;
//   emailVerified = user.emailVerified;
