 var emergency;
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
firebase.firestore().enablePersistence()
  .then(function() {
      // Initialize Cloud Firestore through firebase
      var db = firebase.firestore();
  })
  .catch(function(err) {
      if (err.code == 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code == 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });
  db.collection("notification").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
          
         var notification=doc.data();
         var da=new Date(notification.date);
         var dat=new Date();
function sameDay(d1, d2) {
  if(d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate())
  {
    return 1;
  }
  else
    return 0;
}
var re=sameDay(da,dat);
if(re==1)
{
         document.getElementById('today').style.display="unset";

         
          document.getElementById("todo").innerHTML += '<li class="collection-item avatar"><i class="material-icons circle">chat</i><span class="title">'+notification.subject+'</span><p>'+notification.date+'<br>'+notification.message+' </p></li>';
  }
  else{
    document.getElementById('today').style.display="none";

  }


 });
    

});

  
 $.fn.autocomplete2 = function (options) {
      // Defaults
      // array with objects
      // {
      //   text:'text',
      //   id: 'id',
      //   img: 'img',
      // }
      var defaults = {
        data: []
      };
          


      options = $.extend(defaults, options);

      return this.each(function () {
        var $input = $(this);
        var data = options.data,
          $inputDiv = $input.closest('.input-field'); // Div to append on

        // Check if data isn't empty
        if(!$.isEmptyObject(data)) {
          // Create autocomplete element
          var $autocomplete = $('<ul class="collection autocomplete-content dropdown-content"></ul>');

          // Append autocomplete element
          if($inputDiv.length) {
            $inputDiv.append($autocomplete); // Set ul in body
          }
          else {
            $input.after($autocomplete);
          }

          var highlight = function (string, $el,key) {
            var img = $el.find('img');
            var matchStart = $el.text().toLowerCase().indexOf("" + string.toLowerCase() + ""),
              matchEnd = matchStart + string.length - 1,
              beforeMatch = $el.text().slice(0, matchStart),
              matchText = $el.text().slice(matchStart, matchEnd + 1),
              afterMatch = $el.text().slice(matchEnd + 1);
            $el.html('<i class="material-icons circle">perm_identity</i><span class="title">' + beforeMatch + '<span class="highlight">'+ matchText + '</span>'+ afterMatch + '</span><p>Mob:'+key.mob+'<br>Inter:'+key.inter+'</p><a href="tel:'+key.mob+'" class="secondary-content"><i class="material-icons">call</i></a> ');
            if(img.length) {
              $el.prepend(img);
            }
          };
          for(var key of data){
               key.name=key.name+"-"+key.pos;   
            }
          // Perform search
          $input.on('keyup', function (e) {
            // Capture Enter
            if(e.which === 13) {
              $autocomplete.find('li').first().click();
              return;
            }

            var val = $input.val().toLowerCase();
            $autocomplete.empty();

            // Check if the input isn't empty
            
            if(val !== '') {

              for(var key of data) {
                if(key.hasOwnProperty('name') &&
                  key.name.toLowerCase().indexOf(val) !== -1 &&
                  key.name.toLowerCase() !== val) {
                  var autocompleteOption = $("<li  style='z-index:2;'class='collection-item avatar'></li>");
                  
                  
                  if(!!key.img) {
                    autocompleteOption.append('<span class="title">' + key.name + '</span>');
                  }
                  else {
                    autocompleteOption.append('  <span class="title">' + key.name + '</span>');
                  }
                  $autocomplete.append(autocompleteOption);
                   


                  highlight(val, autocompleteOption,key);

                }
              }
            }
          });

          // Set input value
         
        }
         
        
      });
    };


$(function() {


  var searchData = new Array();

db.collection("emergency").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
           
          searchData.push(doc.data());
           });
    
    

   $('input.autocomplete').autocomplete2({
     data: searchData,
     limit: 10,
  });
   });
        
});
 $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, 
    });
 function visibleMain(){

  document.getElementById('emergency').style.display="none";
  document.getElementById('notification').style.display="none";
   document.getElementById('feedback').style.display="none";
   document.getElementById("noti").innerHTML ="";
    document.getElementById("emer").innerHTML =""; 
  document.getElementById('main').style.display="unset";
 }
function visibleEmergency(item)
{
  document.getElementById('main').style.display="none";
  document.getElementById('notification').style.display="none";
   document.getElementById('feedback').style.display="none";
   document.getElementById("noti").innerHTML ="";
    document.getElementById("emer").innerHTML =""; 
	document.getElementById(item).style.display= "unset";
	emergency();

}
function visibleNotification(){

  document.getElementById('emergency').style.display="none";
  document.getElementById('main').style.display="none";
  document.getElementById('feedback').style.display="none";
  document.getElementById("noti").innerHTML ="";
   document.getElementById("emer").innerHTML =""; 
  document.getElementById('notification').style.display="unset";
  notification();
 }
 function visibleFeedback(){

  document.getElementById('emergency').style.display="none";
  document.getElementById('main').style.display="none";
  document.getElementById('notification').style.display="none";
  document.getElementById("noti").innerHTML ="";
   document.getElementById("emer").innerHTML =""; 
  document.getElementById('feedback').style.display="unset";

 }
 function feedback(){
  var date= new Date();
  var des=document.getElementById("Des").value;
  var name=document.getElementById("name").value;
   var xmlhttp = new XMLHttpRequest();
var url = "https://script.google.com/macros/s/AKfycbyQzJFbslGYtdepWcV3eS-ss8pNRXoT5kudE4RmjjY1UFfjpbJq/exec?date="+date+"&name="+name+"&des="+des;

xmlhttp.onreadystatechange = function() {
   
    if (this.readyState == 4 && this.status == 200) {
         var res = this.responseText;

         if(res=="sucess")
         {
          document.getElementById("Des").value="";
          document.getElementById("name").value="";
            Materialize.toast('Success!', 4000);
         }
       }    
};
xmlhttp.open("GET", url, true);
xmlhttp.send();


 }
 
 function notification() {

  db.collection("notification").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
           
         var notification=doc.data();
          document.getElementById("noti").innerHTML += '<li class="collection-item avatar"><i class="material-icons circle">chat</i><span class="title">'+notification.subject+'</span><p>'+notification.date+'<br>'+notification.message+' </p></li>';

 });
    

});
 }

function emergency(){

db.collection("emergency").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
           
         var emergency=doc.data();
         document.getElementById("emer").innerHTML += '<li class="collection-item avatar"><i class="material-icons circle">perm_identity</i><span class="title">'+emergency.name+'</span><p>'+emergency.pos+'<br> Mobile:'+emergency.mob+' <br>Inter:'+emergency.inter+'</p><a href="tel:'+emergency.mob+'" class="secondary-content"><i class="material-icons">call</i></a></li>';
    });
    

});


}