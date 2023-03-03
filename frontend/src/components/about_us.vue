<template>
    <div id="aboutus">
        <div id="aboutusbox">
            <h1> Our Vision </h1> 
            <span> To build a reliable, all-in-one, user-friendly, accessible platform for all
individuals seeking a place to call home in San Diego. We strive to create a seamless
and stress-free experience where everyone can find their ideal living space in an
inclusive and trustworthy environment. </span> <br> <br>
            <h2> Meet The Team </h2> 
            <div class="Row">
            <div id="imagebox">
            <img src="../img/harsh.jpg" style="width:150px" > <br>
            <span>Harsh Gondaliya</span>
            </div>
            <div id="imagebox">
            <img src="../img/simran.jpg" style="width:150px" > <br>
            <span>Simran Gill</span>
            </div>
                        <div id="imagebox">
            <img src="../img/tiancheng.jpg" style="width:150px" > <br>
            <span>Tiancheng Ma</span>
            </div>
            <div id="imagebox">
            <img src="../img/yejin.jpg" style="width:150px" > <br>
            <span>Ye Jin Jeon</span>
            </div>
            <div id="imagebox">
            <img src="../img/yifei.jpg" style="width:150px" > <br>
            <span>Yifei Ning</span>
            </div>
                        <div id="imagebox">
            <img src="../img/bhavya.jpg" style="width:150px" > <br>
            <span>Bhavya Singh</span>
            </div>
            
            </div>
        </div>
    </div>
</template>

<style>
#aboutus {
  min-height: 100vh; 
  margin-bottom: 50px;
}

#aboutusbox {

  margin: auto;
  border: 2px solid rgb(132, 188, 132);
  border-radius: 25px;
  background: rgb(246, 245, 245);
  padding: 10px;
  position: absolute;
  top: 55%;
  transform: translate(-50%, -50%);
  left: 50%;
}

#Row {
    display: table;
    width: 100%; /*Optional*/
    table-layout: fixed; /*Optional*/
    border-spacing: 10px; /*Optional*/
}
#imagebox {
    display: table-cell;
    padding:5px
}
</style>