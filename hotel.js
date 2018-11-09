 var total = [];
  var total2 = [];
  var total3 = [];
  var total4 = [];
  var total5 = [];
  var total6 = [];
         
  function emList() {
    if (total.length < 4) {
      var x = document.getElementById('usersChoice').value;
      total.push(x);
       document.getElementById('usersChoice').value = "";
      var li = document.createElement('li');
       var newText = document.createTextNode(x);
       li.appendChild(newText);
       var olTag = document.getElementsByTagName('ol')[0];
       olTag.appendChild(li);
}
    else {
      document.getElementById('t1').innerHTML = "Too Many";
     var button = document.getElementById('bb1').style.visibility = "hidden";
}
      var d = new Date();
        var tee = document.createTextNode("  (" + "Checkd in  " + d.toUTCString() + ")");
        li.appendChild(tee);
  }

function emList2() {
    if (total2.length < 4) {
      var x = document.getElementById('usersChoice2').value;
      total2.push(x);
       document.getElementById('usersChoice2').value = "";
      var li = document.createElement('li');
       var newText = document.createTextNode(x);
       li.appendChild(newText);
       var olTag = document.getElementsByTagName('ol')[1];
       olTag.appendChild(li);
}
    else {
      document.getElementById('t2').innerHTML = "Too Many";
     var button = document.getElementById('bb2').style.visibility = "hidden";
}
      var d = new Date();
        var tee = document.createTextNode("  (" + "Checkd in  " + d.toUTCString() + ")");
        li.appendChild(tee);
  }
function emList3() {
    if (total3.length < 4) {
      var x = document.getElementById('usersChoice3').value;
      total3.push(x);
       document.getElementById('usersChoice3').value = "";
      var li = document.createElement('li');
       var newText = document.createTextNode(x);
       li.appendChild(newText);
       var olTag = document.getElementsByTagName('ol')[2];
       olTag.appendChild(li);
}
    else {
      document.getElementById('t3').innerHTML = "Too Many";
     var button = document.getElementById('bb3').style.visibility = "hidden";
}
      var d = new Date();
        var tee = document.createTextNode("  (" + "Checkd in  " + d.toUTCString() + ")");
        li.appendChild(tee);
  }
function emList4() {
    if (total4.length < 4) {
      var x = document.getElementById('usersChoice4').value;
      total4.push(x);
       document.getElementById('usersChoice4').value = "";
      var li = document.createElement('li');
       var newText = document.createTextNode(x);
       li.appendChild(newText);
       var olTag = document.getElementsByTagName('ol')[3];
       olTag.appendChild(li);
}
    else {
      document.getElementById('t4').innerHTML = "Too Many";
     var button = document.getElementById('bb4').style.visibility = "hidden";
}
      var d = new Date();
        var tee = document.createTextNode("  (" + "Checkd in  " + d.toUTCString() + ")");
        li.appendChild(tee);
  }
  function emList5() {
    if (total5.length < 4) {
      var x = document.getElementById('usersChoice5').value;
      total5.push(x);
       document.getElementById('usersChoice5').value = "";
      var li = document.createElement('li');
       var newText = document.createTextNode(x);
       li.appendChild(newText);
       var olTag = document.getElementsByTagName('ol')[4];
       olTag.appendChild(li);
}
    else {
      document.getElementById('t5').innerHTML = "Too Many";
     var button = document.getElementById('bb5').style.visibility = "hidden";
}
      var d = new Date();
        var tee = document.createTextNode("  (" + "Checkd in  " + d.toUTCString() + ")");
        li.appendChild(tee);
  }
  function emList6() {
    if (total6.length < 4) {
      var x = document.getElementById('usersChoice6').value;
      total6.push(x);
       document.getElementById('usersChoice6').value = "";
      var li = document.createElement('li');
       var newText = document.createTextNode(x);
       li.appendChild(newText);
       var olTag = document.getElementsByTagName('ol')[5];
       olTag.appendChild(li);
}
    else {
      document.getElementById('t6').innerHTML = "Too Many";
     var button = document.getElementById('bb6').style.visibility = "hidden";
}
      var d = new Date();
        var tee = document.createTextNode("  (" + "Checkd in  " + d.toUTCString() + ")");
        li.appendChild(tee);
  }
    function remove(){
      total.length--;
      var people = document.getElementById('peoples').value;
      var elim = document.getElementsByTagName('ol')[0];
      var ulTag = elim.childNodes[people];
      elim.removeChild(ulTag);
      document.getElementById('t1').innerHTML = "";
      var button = document.getElementById('bb1').style.visibility = "visible";
}
    function remove2(){
      total2.length--;
     var people = document.getElementById('peoples2').value;
     var elim = document.getElementsByTagName('ol')[1];
     var ulTag = elim.childNodes[people];
     elim.removeChild(ulTag);
     document.getElementById('t2').innerHTML = "";
     var button = document.getElementById('bb2').style.visibility = "visible";
   }
   function remove3(){
     total3.length--;
     var people = document.getElementById('peoples3').value;
     var elim = document.getElementsByTagName('ol')[2];
     var ulTag = elim.childNodes[people];
     elim.removeChild(ulTag);
     document.getElementById('t3').innerHTML = "";
     var button = document.getElementById('bb3').style.visibility = "visible";
   }
   function remove4(){
     total4.length--;
     var people = document.getElementById('peoples4').value;
     var elim = document.getElementsByTagName('ol')[3];
     var ulTag = elim.childNodes[people];
     elim.removeChild(ulTag);
     document.getElementById('t4').innerHTML = "";
     var button = document.getElementById('bb4').style.visibility = "visible";
   }
  function remove5(){
    total5.length--;
     var people = document.getElementById('peoples5').value;
     var elim = document.getElementsByTagName('ol')[4];
     var ulTag = elim.childNodes[people];
     elim.removeChild(ulTag);
     document.getElementById('t5').innerHTML = "";
     var button = document.getElementById('bb5').style.visibility = "visible";
   }
  function remove6(){
    total6.length--;
     var people = document.getElementById('peoples6').value;
     var elim = document.getElementsByTagName('ol')[5];
     var ulTag = elim.childNodes[people];
     elim.removeChild(ulTag);
     document.getElementById('t6').innerHTML = "";
     var button = document.getElementById('bb6').style.visibility = "visible";
  }


  function removeall(){
    total.length=0;
     var myNode = document.getElementById("people");
     while (myNode.firstChild) {
     myNode.removeChild(myNode.firstChild);
}
     document.getElementById('t1').innerHTML = "";
     var button = document.getElementById('bb1').style.visibility = "visible";
  }

  
  function removeall2(){
    total2.length=0;
     var myNode = document.getElementById("people2");
     while (myNode.firstChild) {
     myNode.removeChild(myNode.firstChild);
}
     document.getElementById('t2').innerHTML = "";
     var button = document.getElementById('bb2').style.visibility = "visible";
  }
  
  function removeall3(){
    total3.length=0;
     var myNode = document.getElementById("people3");
     while (myNode.firstChild) {
     myNode.removeChild(myNode.firstChild);
}
     document.getElementById('t3').innerHTML = "";
     var button = document.getElementById('bb3').style.visibility = "visible";
  }
    function removeall4(){
      total4.length=0;
     var myNode = document.getElementById("people4");
     while (myNode.firstChild) {
     myNode.removeChild(myNode.firstChild);
}
     document.getElementById('t4').innerHTML = "";
     var button = document.getElementById('bb4').style.visibility = "visible";
  }
      function removeall5(){
     total5.length=0;
     var myNode = document.getElementById("people5");
     while (myNode.firstChild) {
     myNode.removeChild(myNode.firstChild);
}
     document.getElementById('t5').innerHTML = "";
     var button = document.getElementById('bb5').style.visibility = "visible";
  }
      function removeall6(){
     total6.length=0;
     var myNode = document.getElementById("people6");
     while (myNode.firstChild) {
     myNode.removeChild(myNode.firstChild);
}
     document.getElementById('t6').innerHTML = "";
     var button = document.getElementById('bb6').style.visibility = "visible";
  }
