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
     var button = document.getElementById('removeB1').style.visibility = "hidden";
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
     var button = document.getElementById('removeB2').style.visibility = "hidden";
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
     var button = document.getElementById('removeB3').style.visibility = "hidden";
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
     var button = document.getElementById('removeB4').style.visibility = "hidden";
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
     var button = document.getElementById('removeB5').style.visibility = "hidden";
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
     var button = document.getElementById('removeB6').style.visibility = "hidden";
}
    
  }
    function remove1(){
      total.length--;
      var people = document.getElementById('delete1').value;
      var elim = document.getElementsByTagName('ol')[0];
      var ulTag = elim.childNodes[people];
      elim.removeChild(ulTag);
      document.getElementById('end1').innerHTML = "";
      var button = document.getElementById('removeB1').style.visibility = "visible";
}
    function remove2(){
      total2.length--;
     var people = document.getElementById('delete2').value;
     var elim = document.getElementsByTagName('ol')[1];
     var ulTag = elim.childNodes[people];
     elim.removeChild(ulTag);
     document.getElementById('end2').innerHTML = "";
     var button = document.getElementById('removeB2').style.visibility = "visible";
   }
   function remove3(){
     total3.length--;
     var people = document.getElementById('delete3').value;
     var elim = document.getElementsByTagName('ol')[2];
     var ulTag = elim.childNodes[people];
     elim.removeChild(ulTag);
     document.getElementById('end3').innerHTML = "";
     var button = document.getElementById('removeB3').style.visibility = "visible";
   }
   function remove4(){
     total4.length--;
     var people = document.getElementById('delete4').value;
     var elim = document.getElementsByTagName('ol')[3];
     var ulTag = elim.childNodes[people];
     elim.removeChild(ulTag);
     document.getElementById('end4').innerHTML = "";
     var button = document.getElementById('removeB4').style.visibility = "visible";
   }
  function remove5(){
    total5.length--;
     var people = document.getElementById('delete5').value;
     var elim = document.getElementsByTagName('ol')[4];
     var ulTag = elim.childNodes[people];
     elim.removeChild(ulTag);
     document.getElementById('end5').innerHTML = "";
     var button = document.getElementById('removeB5').style.visibility = "visible";
   }
  function remove6(){
    total6.length--;
     var people = document.getElementById('delete6').value;
     var elim = document.getElementsByTagName('ol')[5];
     var ulTag = elim.childNodes[people];
     elim.removeChild(ulTag);
     document.getElementById('end6').innerHTML = "";
     var button = document.getElementById('removeB6').style.visibility = "visible";
  }


  function removeAll1(){
    total.length=0;
     var currentNode = document.getElementById("people");
     while (currentNode.firstChild) {
     currentNode.removeChild(currentNode.firstChild);
}
     document.getElementById('end1').innerHTML = "";
     var button = document.getElementById('removeB1').style.visibility = "visible";
  }

  
  function removeAll2(){
    total2.length=0;
     var currentNode = document.getElementById("people2");
     while (currentNode.firstChild) {
     currentNode.removeChild(currentNode.firstChild);
}
     document.getElementById('end2').innerHTML = "";
     var button = document.getElementById('removeB2').style.visibility = "visible";
  }
  
  function removeAll3(){
    total3.length=0;
     var currentNode = document.getElementById("people3");
     while (currentNode.firstChild) {
     currentNode.removeChild(currentNode.firstChild);
}
     document.getElementById('end3').innerHTML = "";
     var button = document.getElementById('removeB3').style.visibility = "visible";
  }
    function removeAll4(){
      total4.length=0;
     var currentNode = document.getElementById("people4");
     while (currentNode.firstChild) {
     currentNode.removeChild(currentNode.firstChild);
}
     document.getElementById('end4').innerHTML = "";
     var button = document.getElementById('removeB4').style.visibility = "visible";
  }
      function removeAll5(){
     total5.length=0;
     var currentNode = document.getElementById("people5");
     while (currentNode.firstChild) {
     currentNode.removeChild(currentNode.firstChild);
}
     document.getElementById('end5').innerHTML = "";
     var button = document.getElementById('removeB5').style.visibility = "visible";
  }
      function removeAll6(){
     total6.length=0;
     var currentNode = document.getElementById("people6");
     while (currentNode.firstChild) {
     currentNode.removeChild(myNode.firstChild);
}
     document.getElementById('end6').innerHTML = "";
     var button = document.getElementById('removeB6').style.visibility = "visible";
  }
