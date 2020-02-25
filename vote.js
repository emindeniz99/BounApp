// var config = {
//     apiKey: "AIzaSyBUfDVWkM9U2RJfvbPlnygx_E2s35BSJZw",
//     authDomain: "bounapp-9d455.firebaseapp.com",
//     databaseURL: "https://bounapp-9d455.firebaseio.com",
//     projectId: "bounapp-9d455",
//     storageBucket: "bounapp-9d455.appspot.com",
//     messagingSenderId: "939487732404"
//   };
//   var a=firebase.initializeApp(config);
// var db = firebase.firestore();

var config = {
    // apiKey: "AIzaSyCLmk7O0kmts_nQknXxXRF0f4FGW6pT230",
    // authDomain: "suqrapp.firebaseapp.com",
    // databaseURL: "https://suqrapp.firebaseio.com",
    // projectId: "suqrapp",
    // storageBucket: "suqrapp.appspot.com",
    // messagingSenderId: "428915698007"
    apiKey: "AIzaSyBUfDVWkM9U2RJfvbPlnygx_E2s35BSJZw",
    authDomain: "bounapp-9d455.firebaseapp.com",
    databaseURL: "https://bounapp-9d455.firebaseio.com",
    projectId: "bounapp-9d455",
    storageBucket: "bounapp-9d455.appspot.com",
    messagingSenderId: "939487732404"



};
firebase.initializeApp(config);

var db = firebase.firestore();


var dayy=new Date().toLocaleDateString();

dailyVoteRef=db.collection("Votes").doc("public").collection("date").doc(dayy);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    db.collection("Votes").doc(firebase.auth().currentUser.uid).set({oy6:0} , {merge: true});
    db.collection("Votes").doc(firebase.auth().currentUser.uid).set({oy6:0}, {merge: true});
    
    experi();
    // ...
  } else {
    // User is signed out.
    // ...
  }
  // ...
});
signIn();

function signIn() {
  
    firebase.auth().signInAnonymously();
   
    
}
function signOut() {
  // TODO 2: Sign out of Firebase.
  firebase.auth().signOut();
}
  
 function hello(){
    var a=firebase.auth().currentUser.uid;
  console.log(a);
 }





// OGLEEE
function upVote(){
    db.collection("Votes").doc(firebase.auth().currentUser.uid).get().then(function(doc) {
    if (doc.exists  ) {

        //    console.log(doc.data()); 
        if(doc.data().oy1==1){
            alert("OY KULLANILMIŞ")
        }
        else{
            db.collection("Votes").doc(firebase.auth().currentUser.uid).update({oy1:1});
        
            dailyVoteRef.get().then(function(doc) {
                a=doc.data().sonuc1+1;
                b=doc.data().up1+1;
                dailyVoteRef.set({sonuc1: a,up1:b}, {merge: true});
        });
        }
    } else {
        // doc.data() will be undefined in this case
        db.collection("Votes").doc(firebase.auth().currentUser.uid).update({oy1:1});
        
        dailyVoteRef.get().then(function(doc) {
            a=doc.data().sonuc1+1;
            b=doc.data().up1+1;
            dailyVoteRef.set({sonuc1: a,up1:b}, {merge: true});
        });
        
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
}

function downVote(){
    db.collection("Votes").doc(firebase.auth().currentUser.uid).get().then(function(doc) {
    if (doc.exists  ) {
        if(doc.data().oy1==1){
            alert("OY KULLANILMIŞ")
        }
        else{
            db.collection("Votes").doc(firebase.auth().currentUser.uid).update({oy1:1});
        
        dailyVoteRef.get().then(function(doc) {
            a=doc.data().sonuc1+1;
            b=doc.data().down1+1;
            dailyVoteRef.set({sonuc1: a,down1:b}, {merge: true});
            
        });
        }
    } else {
        // doc.data() will be undefined in this case
        db.collection("Votes").doc(firebase.auth().currentUser.uid).update({oy1:1});
        
        dailyVoteRef.get().then(function(doc) {

             

            a=doc.data().sonuc1+1;
            b=doc.data().down1+1;
            dailyVoteRef.set({sonuc1: a,down1:b}, {merge: true});
            
        });
        
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
}
//  AKSAMMM
function aupVote(){
    db.collection("Votes").doc(firebase.auth().currentUser.uid).get().then(function(doc) {
    if (doc.exists  ) {
        if(doc.data().oy2==1){
            alert("OY KULLANILMIŞ")
        }
        else{
            db.collection("Votes").doc(firebase.auth().currentUser.uid).update({oy2:1});
        
            dailyVoteRef.get().then(function(doc) {
                a=doc.data().sonuc2+1;
                b=doc.data().up2+1;
                dailyVoteRef.set({sonuc2: a,up2:b}, {merge: true});
        });
        }
    } else {
        // doc.data() will be undefined in this case
        db.collection("Votes").doc(firebase.auth().currentUser.uid).update({oy2:1});
        
        dailyVoteRef.get().then(function(doc) {
            a=doc.data().sonuc2+1;
            b=doc.data().up2+1;
            dailyVoteRef.set({sonuc2: a,up2:b}, {merge: true});
        });
        
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
}

function adownVote(){
    db.collection("Votes").doc(firebase.auth().currentUser.uid).get().then(function(doc) {
    if (doc.exists  ) {
        if(doc.data().oy2==1){
            alert("OY KULLANILMIŞ")
        }
        else{
            db.collection("Votes").doc(firebase.auth().currentUser.uid).update({oy2:1});
        
        dailyVoteRef.get().then(function(doc) {
            a=doc.data().sonuc2+1;
            b=doc.data().down2+1;
            dailyVoteRef.set({sonuc2: a,down2:b}, {merge: true});
            
        });
        }
    } else {
        // doc.data() will be undefined in this case
        db.collection("Votes").doc(firebase.auth().currentUser.uid).update({oy2:1});
        
        dailyVoteRef.get().then(function(doc) {
            a=doc.data().sonuc2+1;
            b=doc.data().down2+1;
            dailyVoteRef.set({sonuc2: a,down2:b}, {merge: true});
            
        });
        
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
}

// EXPER.

var dk = new Date();
// document.getElementById("tarih").innerHTML = "Bugün: "+dk.toLocaleString();


dk=dk.getDate();
function experi(){
db.collection("Votes").doc(firebase.auth().currentUser.uid).get().then(function(doc) {
    if (doc.exists  ) {
        if(doc.data().tar==dk.toLocaleString()){
            
        }
        else{
            db.collection("Votes").doc(firebase.auth().currentUser.uid).set({tar:dk.toLocaleString()} , {merge: true});
            db.collection("Votes").doc(firebase.auth().currentUser.uid).set({oy1:0,oy2:0} , {merge: true});
    }}});


}











// EPXPER


document.getElementById("olumlu").addEventListener("click", upVote);

document.getElementById("olumsuz").addEventListener("click", downVote);

document.getElementById("aksolumlu").addEventListener("click", aupVote);

document.getElementById("aksolumsuz").addEventListener("click", adownVote);

dailyVoteRef
    .onSnapshot(function(doc) {
        if(!doc.exists){
            dailyVoteRef.set({sonuc1: 0,down1:0,up1:0,up2:0,down2:0,sonuc2:0}, {merge: true});
        }       


       document.getElementById("iyi").innerHTML=doc.data().up1 ;
    //    document.getElementById("sayi").innerHTML=doc.data().sonuc;
       document.getElementById("kotu").innerHTML= doc.data().down1;
       document.getElementById("aksiyi").innerHTML=doc.data().up2 ;
    //    document.getElementById("akssayi").innerHTML=doc.data().sonuc2;
       document.getElementById("akskotu").innerHTML= doc.data().down2;
    });