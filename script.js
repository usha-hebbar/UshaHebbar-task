function show1(){
   document.getElementById('selectoption').style.display = 'block';
   document.getElementById('imptext').style.display = 'block';
   document.getElementById('imptext2').style.display = 'none';
   document.getElementById('imptext3').style.display = 'none';
   document.getElementById('selectoption2').style.display = 'none';
   document.getElementById('selectoption3').style.display = 'none';
   document.getElementById("box1").style.cssText = `
   border:1px solid #007F61;
   background-color:#F4FBF9;
   `;
   document.getElementById("box2").style.cssText = `
   border:1px solid #C8C8C8;
   background-color:white;
   `;
   document.getElementById("box3").style.cssText = `
   border:1px solid #C8C8C8;
   background-color:white;
   `;
}
function show2(){
    document.getElementById('selectoption2').style.display = 'block';
    document.getElementById('selectoption').style.display = 'none';
    document.getElementById('selectoption3').style.display = 'none';
    document.getElementById('imptext').style.display = 'none';
    document.getElementById('imptext2').style.display = 'block';
    document.getElementById('imptext3').style.display = 'none';
    document.getElementById("box2").style.cssText = `
    border:1px solid #007F61;
    background-color:#F4FBF9;
    `;
    document.getElementById("box1").style.cssText = `
   border:1px solid #C8C8C8;
   background-color:white;
   `;
   document.getElementById("box3").style.cssText = `
   border:1px solid #C8C8C8;
   background-color:white;
   `;
  }
  function show3(){
    document.getElementById('selectoption3').style.display = 'block';
    document.getElementById('selectoption').style.display = 'none';
    document.getElementById('selectoption2').style.display = 'none';
    document.getElementById('imptext').style.display = 'none';
    document.getElementById('imptext2').style.display = 'none';
    document.getElementById('imptext3').style.display = 'block';
    document.getElementById("box3").style.cssText = `
    border:1px solid #007F61;
    background-color:#F4FBF9;
    `;
    document.getElementById("box1").style.cssText = `
   border:1px solid #C8C8C8;
   background-color:white;
   `;
   document.getElementById("box2").style.cssText = `
   border:1px solid #C8C8C8;
   background-color:white;
   `;
}
  