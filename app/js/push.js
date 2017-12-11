 $(document).ready(function(){
   $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
   });
 var config = {
    apiKey: "AIzaSyCjgzMBRz3qXw0sJy98asvGbgnOvgTirGM",
    authDomain: "amalabhavan-1dd5c.firebaseapp.com",
    databaseURL: "https://amalabhavan-1dd5c.firebaseio.com",
    projectId: "amalabhavan-1dd5c",
    storageBucket: "amalabhavan-1dd5c.appspot.com",
    messagingSenderId: "1029933807403"
  };
  firebase.initializeApp(config);
  
  var db = firebase.firestore();


function send(){
  var date=document.getElementById("date").value;
  var msg=document.getElementById("msg").value;
  var sub=document.getElementById("sub").value;
  var d = new Date();
  var n = d.getTime();
  var str=String(n);
  db.collection("notification").doc(str).set({
    date: date,
    message: msg,
    subject: sub
})
.then(function() {
    Materialize.toast('Added to Database!', 4000)
})
.catch(function(error) {
  Materialize.toast('Connection Lost!', 4000)
    console.error("Error adding document: ", error);
});
var xmlhttp = new XMLHttpRequest();
var url = "http://ittyjose.000webhostapp.com/amalaBhavan/notificationBackend.php?date="+date+"&msg="+msg+"&sub="+sub;

xmlhttp.onreadystatechange = function() {
   
    if (this.readyState == 4 && this.status == 200) {
         var res = this.responseText;

         if(res)
         {
        
          document.getElementById("msg").value="";
          document.getElementById("date").value="";
          document.getElementById("sub").value="";
            Materialize.toast('Notifiaction send!', 4000);
         }
       }    
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

}