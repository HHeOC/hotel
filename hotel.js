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
      var visitor = document.getElementById('usersChoice').value;
      total.push(visitor);
       document.getElementById('usersChoice').value = "";
      var newli = document.createElement('li');
       var newText = document.createTextNode(visitor +" " + "(" + "checked in" + " " + dateString + " " + n + ")");
       newli.appendChild(newText);
       var olTag = document.getElementsByTagName('ol')[0];
       olTag.appendChild(newli);
}
    else {
      document.getElementById('end1').innerHTML = "This room is full";
     var button = document.getElementById('checkin1').style.visibility = "hidden";
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
      var visitor = document.getElementById('usersChoice2').value;
      total2.push(visitor);
       document.getElementById('usersChoice2').value = "";
      var newli = document.createElement('li');
       var newText = document.createTextNode(visitor +" " + "(" + "checked in" + " " + dateString + " " + n + ")");
       newli.appendChild(newText);
       var olTag = document.getElementsByTagName('ol')[1];
       olTag.appendChild(li);
}
    else {
      document.getElementById('end2').innerHTML = "This room is full";
     var button = document.getElementById('checkin2').style.visibility = "hidden";
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
      var visitor = document.getElementById('usersChoice3').value;
      total3.push(visitor);
       document.getElementById('usersChoice3').value = "";
      var newli = document.createElement('li');
       var newText = document.createTextNode(visitor +" " + "(" + "checked in" + " " + dateString + " " + n + ")");
       newli.appendChild(newText);
       var olTag = document.getElementsByTagName('ol')[2];
       olTag.appendChild(li);
}
    else {
      document.getElementById('end3').innerHTML = "This room is full";
     var button = document.getElementById('checkin3').style.visibility = "hidden";
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
      var visitor = document.getElementById('usersChoice4').value;
      total4.push(visitor);
       document.getElementById('usersChoice4').value = "";
      var newli = document.createElement('li');
       var newText = document.createTextNode(visitor +" " + "(" + "checked in" + " " + dateString + " " + n + ")");
       newli.appendChild(newText);
       var olTag = document.getElementsByTagName('ol')[3];
       olTag.appendChild(li);
}
    else {
      document.getElementById('end4').innerHTML = "This room is full";
     var button = document.getElementById('checkin4').style.visibility = "hidden";
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
      var visitor = document.getElementById('usersChoice5').value;
      total5.push(visitor);
       document.getElementById('usersChoice5').value = "";
      var newli = document.createElement('li');
       var newText = document.createTextNode(visitor +" " + "(" + "checked in" + " " + dateString + " " + n + ")");
       newli.appendChild(newText);
       var olTag = document.getElementsByTagName('ol')[4];
       olTag.appendChild(li);
}
    else {
      document.getElementById('end5').innerHTML = "This room is full";
     var button = document.getElementById('checkin5').style.visibility = "hidden";
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
      var visitor = document.getElementById('usersChoice6').value;
      total6.push(visitor);
       document.getElementById('usersChoice6').value = "";
      var newli = document.createElement('li');
       var newText = document.createTextNode(visitor +" " + "(" + "checked in" + " " + dateString + " " + n + ")");
       newli.appendChild(newText);
       var olTag = document.getElementsByTagName('ol')[5];
       olTag.appendChild(li);
}
    else {
      document.getElementById('end6').innerHTML = "This room is full";
     var button = document.getElementById('checkin6').style.visibility = "hidden";
}
    
  }
    function remove1(){
      total.length--;
      var people = document.getElementById('delete1').value;
      var elim = document.getElementsByTagName('ol')[0];
      var ulTag = elim.childNodes[people];
      elim.removeChild(ulTag);
      document.getElementById('end1').innerHTML = "";
      var button = document.getElementById('checkin1').style.visibility = "visible";
}
    function remove2(){
      total2.length--;
     var people = document.getElementById('delete2').value;
     var elim = document.getElementsByTagName('ol')[1];
     var ulTag = elim.childNodes[people];
     elim.removeChild(ulTag);
     document.getElementById('end2').innerHTML = "";
     var button = document.getElementById('checkin2').style.visibility = "visible";
   }
   function remove3(){
     total3.length--;
     var people = document.getElementById('delete3').value;
     var elim = document.getElementsByTagName('ol')[2];
     var ulTag = elim.childNodes[people];
     elim.removeChild(ulTag);
     document.getElementById('end3').innerHTML = "";
     var button = document.getElementById('checkin3').style.visibility = "visible";
   }
   function remove4(){
     total4.length--;
     var people = document.getElementById('delete4').value;
     var elim = document.getElementsByTagName('ol')[3];
     var ulTag = elim.childNodes[people];
     elim.removeChild(ulTag);
     document.getElementById('end4').innerHTML = "";
     var button = document.getElementById('checkin4').style.visibility = "visible";
   }
  function remove5(){
    total5.length--;
     var people = document.getElementById('delete5').value;
     var elim = document.getElementsByTagName('ol')[4];
     var ulTag = elim.childNodes[people];
     elim.removeChild(ulTag);
     document.getElementById('end5').innerHTML = "";
     var button = document.getElementById('checkin5').style.visibility = "visible";
   }
  function remove6(){
    total6.length--;
     var people = document.getElementById('delete6').value;
     var elim = document.getElementsByTagName('ol')[5];
     var ulTag = elim.childNodes[people];
     elim.removeChild(ulTag);
     document.getElementById('end6').innerHTML = "";
     var button = document.getElementById('checkin6').style.visibility = "visible";
  }


  function removeAll1(){
    total.length=0;
     var currentNode = document.getElementById("people");
     while (currentNode.firstChild) {
     currentNode.removeChild(currentNode.firstChild);
}
     document.getElementById('end1').innerHTML = "";
     var button = document.getElementById('checkin1').style.visibility = "visible";
  }

  
  function removeAll2(){
    total2.length=0;
     var currentNode = document.getElementById("people2");
     while (currentNode.firstChild) {
     currentNode.removeChild(currentNode.firstChild);
}
     document.getElementById('end2').innerHTML = "";
     var button = document.getElementById('checkin2').style.visibility = "visible";
  }
  
  function removeAll3(){
    total3.length=0;
     var currentNode = document.getElementById("people3");
     while (currentNode.firstChild) {
     currentNode.removeChild(currentNode.firstChild);
}
     document.getElementById('end3').innerHTML = "";
     var button = document.getElementById('checkin3').style.visibility = "visible";
  }
    function removeAll4(){
      total4.length=0;
     var currentNode = document.getElementById("people4");
     while (currentNode.firstChild) {
     currentNode.removeChild(currentNode.firstChild);
}
     document.getElementById('end4').innerHTML = "";
     var button = document.getElementById('checkin4').style.visibility = "visible";
  }
      function removeAll5(){
     total5.length=0;
     var currentNode = document.getElementById("people5");
     while (currentNode.firstChild) {
     currentNode.removeChild(currentNode.firstChild);
}
     document.getElementById('end5').innerHTML = "";
     var button = document.getElementById('checkin5').style.visibility = "visible";
  }
      function removeAll6(){
     total6.length=0;
     var currentNode = document.getElementById("people6");
     while (currentNode.firstChild) {
     currentNode.removeChild(currentNode.firstChild);
}
     document.getElementById('end6').innerHTML = "";
     var button = document.getElementById('checkin6').style.visibility = "visible";
  }
  
function lockRoomOne() {
      if (checkboxOne.checked == true) {
      window.alert("Room 1 is now locked for maintenance");
      document.getElementById('checkin1').disabled=true;
    }
    else if (checkboxOne.checked == false) {
      window.alert("Room 1 is now ready to use");
      document.getElementById('checkin1').disabled=false;
    }
}

function lockRoomTwo() {
      if (checkboxTwo.checked == true) {
      window.alert("Room 2 is now locked for maintenance");
      document.getElementById('checkin2').disabled=true;
    }
    else if (checkboxTwo.checked == false) {
      window.alert("Room 2 is now ready to use");
      document.getElementById('checkin2').disabled=false;
    }
}

function lockRoomThree() {
      if (checkboxThree.checked == true) {
      window.alert("Room 3 is now locked for maintenance");
      document.getElementById('checkin3').disabled=true;
    }
    else if (checkboxThree.checked == false) {
      window.alert("Room 3 is now ready to use");
      document.getElementById('checkin3').disabled=false;
    }
}

function lockRoomFour() {
      if (checkboxFour.checked == true) {
      window.alert("Room 4 is now locked for maintenance");
      document.getElementById('checkin4').disabled=true;
    }
    else if (checkboxFour.checked == false) {
      window.alert("Room 4 is now ready to use");
      document.getElementById('checkin4').disabled=false;
    }
}

function lockRoomFive() {
      if (checkboxFive.checked == true) {
      window.alert("Room 5 is now locked for maintenance");
      document.getElementById('checkin5').disabled=true;
    }
    else if (checkboxFive.checked == false) {
      window.alert("Room 5 is now ready to use");
      document.getElementById('checkin5').disabled=false;
    }
}

function lockRoomSix() {
      if (checkboxSix.checked == true) {
      window.alert("Room 6 is now locked for maintenance");
      document.getElementById('checkin6').disabled=true;
    }
    else if (checkboxSix.checked == false) {
      window.alert("Room 6 is now ready to use");
      document.getElementById('checkin6').disabled=false;
    }
}
