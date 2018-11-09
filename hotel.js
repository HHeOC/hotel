var total = [];
  var total2 = [];
  var total3 = [];
  var total4 = [];
  var total5 = [];
  var total6 = [];
  function emList() {
    var currentDate = new Date();
      var date = currentDate.getDate();
      var month = currentDate.getMonth();
      var year= currentDate.getFullYear();
      var n = currentDate.toLocaleTimeString();
      var dateString = (month + 1) + "/" + date + "/" + year;
    if (total.length < 4) {
      var x = document.getElementById('usersChoice').value;
      total.push(x);
       document.getElementById('usersChoice').value = "";
      var li = document.createElement('li');
       var newText = document.createTextNode(x +" " + "(" + "checked in" + " " + dateString + " " + n + ")");
       li.appendChild(newText);
       var olTag = document.getElementsByTagName('ol')[0];
       olTag.appendChild(li);
}
    else {
      document.getElementById('t1').innerHTML = "This room is full";
     var button = document.getElementById('bb1').style.visibility = "hidden";
}
    
      
  }

function emList2() {
    var currentDate = new Date();
      var date = currentDate.getDate();
      var month = currentDate.getMonth();
      var year= currentDate.getFullYear();
      var n = currentDate.toLocaleTimeString();
      var dateString = (month + 1) + "/" + date + "/" + year;
    if (total2.length < 4) {
      var x = document.getElementById('usersChoice2').value;
      total2.push(x);
       document.getElementById('usersChoice2').value = "";
      var li = document.createElement('li');
       var newText = document.createTextNode(x +" " + "(" + "checked in" + " " + dateString + " " + n + ")");
       li.appendChild(newText);
       var olTag = document.getElementsByTagName('ol')[1];
       olTag.appendChild(li);
}
    else {
      document.getElementById('t2').innerHTML = "This room is full";
     var button = document.getElementById('bb2').style.visibility = "hidden";
}

  }
function emList3() {
    var currentDate = new Date();
      var date = currentDate.getDate();
      var month = currentDate.getMonth();
      var year= currentDate.getFullYear();
      var n = currentDate.toLocaleTimeString();
      var dateString = (month + 1) + "/" + date + "/" + year;
    if (total3.length < 4) {
      var x = document.getElementById('usersChoice3').value;
      total3.push(x);
       document.getElementById('usersChoice3').value = "";
      var li = document.createElement('li');
       var newText = document.createTextNode(x +" " + "(" + "checked in" + " " + dateString + " " + n + ")");
       li.appendChild(newText);
       var olTag = document.getElementsByTagName('ol')[2];
       olTag.appendChild(li);
}
    else {
      document.getElementById('t3').innerHTML = "This room is full";
     var button = document.getElementById('bb3').style.visibility = "hidden";
}
  
  }
function emList4() {
    var currentDate = new Date();
      var date = currentDate.getDate();
      var month = currentDate.getMonth();
      var year= currentDate.getFullYear();
      var n = currentDate.toLocaleTimeString();
      var dateString = (month + 1) + "/" + date + "/" + year;
    if (total4.length < 4) {
      var x = document.getElementById('usersChoice4').value;
      total4.push(x);
       document.getElementById('usersChoice4').value = "";
      var li = document.createElement('li');
       var newText = document.createTextNode(x +" " + "(" + "checked in" + " " + dateString + " " + n + ")");
       li.appendChild(newText);
       var olTag = document.getElementsByTagName('ol')[3];
       olTag.appendChild(li);
}
    else {
      document.getElementById('t4').innerHTML = "This room is full";
     var button = document.getElementById('bb4').style.visibility = "hidden";
}
      
  }
  function emList5() {
    var currentDate = new Date();
      var date = currentDate.getDate();
      var month = currentDate.getMonth();
      var year= currentDate.getFullYear();
      var n = currentDate.toLocaleTimeString();
      var dateString = (month + 1) + "/" + date + "/" + year;
    if (total5.length < 4) {
      var x = document.getElementById('usersChoice5').value;
      total5.push(x);
       document.getElementById('usersChoice5').value = "";
      var li = document.createElement('li');
       var newText = document.createTextNode(x +" " + "(" + "checked in" + " " + dateString + " " + n + ")");
       li.appendChild(newText);
       var olTag = document.getElementsByTagName('ol')[4];
       olTag.appendChild(li);
}
    else {
      document.getElementById('t5').innerHTML = "This room is full";
     var button = document.getElementById('bb5').style.visibility = "hidden";
}
      
  }
  function emList6() {
    var currentDate = new Date();
      var date = currentDate.getDate();
      var month = currentDate.getMonth();
      var year= currentDate.getFullYear();
      var n = currentDate.toLocaleTimeString();
      var dateString = (month + 1) + "/" + date + "/" + year;
    if (total6.length < 4) {
      var x = document.getElementById('usersChoice6').value;
      total6.push(x);
       document.getElementById('usersChoice6').value = "";
      var li = document.createElement('li');
       var newText = document.createTextNode(x +" " + "(" + "checked in" + " " + dateString + " " + n + ")");
       li.appendChild(newText);
       var olTag = document.getElementsByTagName('ol')[5];
       olTag.appendChild(li);
}
    else {
      document.getElementById('t6').innerHTML = "This room is full";
     var button = document.getElementById('bb6').style.visibility = "hidden";
}
    
  }
    function remove1(){
      total.length--;
      var people = document.getElementById('delete1').value;
      var elim = document.getElementsByTagName('ol')[0];
      var ulTag = elim.childNodes[people];
      elim.removeChild(ulTag);
      document.getElementById('t1').innerHTML = "";
      var button = document.getElementById('bb1').style.visibility = "visible";
}
    function remove2(){
      total2.length--;
     var people = document.getElementById('delete2').value;
     var elim = document.getElementsByTagName('ol')[1];
     var ulTag = elim.childNodes[people];
     elim.removeChild(ulTag);
     document.getElementById('t2').innerHTML = "";
     var button = document.getElementById('bb2').style.visibility = "visible";
   }
   function remove3(){
     total3.length--;
     var people = document.getElementById('delete3').value;
     var elim = document.getElementsByTagName('ol')[2];
     var ulTag = elim.childNodes[people];
     elim.removeChild(ulTag);
     document.getElementById('t3').innerHTML = "";
     var button = document.getElementById('bb3').style.visibility = "visible";
   }
   function remove4(){
     total4.length--;
     var people = document.getElementById('delete4').value;
     var elim = document.getElementsByTagName('ol')[3];
     var ulTag = elim.childNodes[people];
     elim.removeChild(ulTag);
     document.getElementById('t4').innerHTML = "";
     var button = document.getElementById('bb4').style.visibility = "visible";
   }
  function remove5(){
    total5.length--;
     var people = document.getElementById('delete5').value;
     var elim = document.getElementsByTagName('ol')[4];
     var ulTag = elim.childNodes[people];
     elim.removeChild(ulTag);
     document.getElementById('t5').innerHTML = "";
     var button = document.getElementById('bb5').style.visibility = "visible";
   }
  function remove6(){
    total6.length--;
     var people = document.getElementById('delete6').value;
     var elim = document.getElementsByTagName('ol')[5];
     var ulTag = elim.childNodes[people];
     elim.removeChild(ulTag);
     document.getElementById('t6').innerHTML = "";
     var button = document.getElementById('bb6').style.visibility = "visible";
  }


  function removeAll1(){
    total.length=0;
     var myNode = document.getElementById("people");
     while (myNode.firstChild) {
     myNode.removeChild(myNode.firstChild);
}
     document.getElementById('t1').innerHTML = "";
     var button = document.getElementById('bb1').style.visibility = "visible";
  }

  
  function removeAll2(){
    total2.length=0;
     var myNode = document.getElementById("people2");
     while (myNode.firstChild) {
     myNode.removeChild(myNode.firstChild);
}
     document.getElementById('t2').innerHTML = "";
     var button = document.getElementById('bb2').style.visibility = "visible";
  }
  
  function removeAll3(){
    total3.length=0;
     var myNode = document.getElementById("people3");
     while (myNode.firstChild) {
     myNode.removeChild(myNode.firstChild);
}
     document.getElementById('t3').innerHTML = "";
     var button = document.getElementById('bb3').style.visibility = "visible";
  }
    function removeAll4(){
      total4.length=0;
     var myNode = document.getElementById("people4");
     while (myNode.firstChild) {
     myNode.removeChild(myNode.firstChild);
}
     document.getElementById('t4').innerHTML = "";
     var button = document.getElementById('bb4').style.visibility = "visible";
  }
      function removeAll5(){
     total5.length=0;
     var myNode = document.getElementById("people5");
     while (myNode.firstChild) {
     myNode.removeChild(myNode.firstChild);
}
     document.getElementById('t5').innerHTML = "";
     var button = document.getElementById('bb5').style.visibility = "visible";
  }
      function removeAll6(){
     total6.length=0;
     var myNode = document.getElementById("people6");
     while (myNode.firstChild) {
     myNode.removeChild(myNode.firstChild);
}
     document.getElementById('t6').innerHTML = "";
     var button = document.getElementById('bb6').style.visibility = "visible";
  }