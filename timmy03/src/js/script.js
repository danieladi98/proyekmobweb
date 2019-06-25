var totmove = 0;
var uang = 0;
function load(){
    if(window.innerHeight > window.innerWidth){
        alert("Please kindly rotate your screen to landscape mode!");
    }
    if (localStorage.getItem("month") != null) {
  //...
    message = localStorage.getItem("message");
    uang = parseInt(localStorage.getItem("uang"));
    pendapatan = parseInt(localStorage.getItem("pendapatan"));
    // document.getElementById("result").innerHTML =  "<h1 style='color:white;'> kekayaan = Rp "+uang+"</h1><h1 style='color:white;'>deskripsi event = "+message+"</h1><h1 style='color:white;'> total uang dari event = Rp "+pendapatan+"</h1>";
    document.getElementById("result").innerHTML =  "Kekayaan = Rp "+uang+"<br>Deskripsi event = "+message+"<br>Total uang dari event = Rp "+pendapatan;
    month = localStorage.getItem("month");
    totmove = parseInt(month);
    document.getElementById("image0").style.visibility = "hidden";
    document.getElementById("image"+totmove).style.visibility = "visible";
    }
}    

function rollDice() {
    const dice = [...document.querySelectorAll(".die-list")];
    var pummel = 0;
    var score = parseInt(pummel)
    dice.forEach(die => {
        toggleClasses(die);
        die.dataset.roll = getRandomNumber(1, 6);
        score = score + parseInt(die.dataset.roll);
    });
    oldlocation = "image"+totmove;
    //alert(oldlocation);
    document.getElementById(oldlocation).style.visibility = "hidden";
    
    chance = getRandomNumber(1,100);
    message = "";
    pendapatan = 0;
    totmove = totmove+score;
    if(totmove <= 36)
    {
        
        newlocation = "image"+totmove;
        //alert(newlocation);
        document.getElementById(newlocation).style.visibility = "visible";
        localStorage.setItem("month",totmove);
        if(chance <10)
        {
            event = getRandomNumber(1,100);
            if(event < 30)
            {
                message = "server rusak, perlu maintenence";
                pendapatan = getRandomNumber(-50000000,-30000000);
            }
            else 
            {
                message = "mobilmu ditabrak lari orang";
                pendapatan = getRandomNumber(-30000000,-20000000);
            }
        }
        else if(chance <30)
        {
           event = getRandomNumber(1,100);
            if(event < 20)
            {
                message = "customer minta ganti rugi karena keteledoran karyawan";
                pendapatan = getRandomNumber(-15000000,-10000000);
            }
            else if(event<50)
            {
                message = "perlu beli program";
                pendapatan = getRandomNumber(-7000000,-5000000);
            }       
            else 
            {
                message = "perlu perpanjang license";
                pendapatan = getRandomNumber (-3000000,-1000000)
            }
        }
        else if(chance <99)
        {
           event = getRandomNumber(1,100);
            if(event < 50)
            {
                message = "dapet proyek dari kenalan";
                pendapatan = getRandomNumber(10000000,20000000)
            }
            else if( event<75)
            {
                message = "dapet proyek dari orang tajir";
                pendapatan = getRandomNumber(20000000,4000000)
            }        
            else 
            {
                message = "perusahaanmu menang penghargaan, dapet banyak proyek besar";
                pendapatan = getRandomNumber(40000000,60000000)
            }
        }
        else
        {
            message = "menang lotre";
            pendapatan = 200000000;
        }
        //alert(totmove);
        uang = uang + (score*5000000)+pendapatan;
    localStorage.setItem("uang",uang);
    localStorage.setItem("pendapatan",pendapatan);
    localStorage.setItem("message",message);
    // document.getElementById("result").innerHTML =  "<h1 style='color:white;'> kekayaan = Rp "+uang+"</h1><h1 style='color:white;'>deskripsi event = "+message+"</h1><h1 style='color:white;'> total uang dari event = Rp "+pendapatan+"</h1>";
    document.getElementById("result").innerHTML =  "Kekayaan = Rp "+uang+"<br>Deskripsi event = "+message+"<br>Total uang dari event = Rp "+pendapatan;
    }
    else
    {
        message = "game over";
        pendapatan = 0;
        localStorage.setItem("uang",uang);
	    localStorage.setItem("pendapatan",pendapatan);
	    localStorage.setItem("message",message);
	    document.getElementById("result").innerHTML =  "Kekayaan = Rp "+uang+"<br>Deskripsi event = "+message+"<br>Total uang dari event = Rp "+pendapatan;
	    alert("roll to restart");
        document.getElementById("image0").style.visibility = "visible";
                localStorage.setItem("month",totmove);
	    //oldlocation = "image"+totmove;
	    //document.getElementById(oldlocation).style.visibility = "hidden";
	    totmove = 0;
	    uang = 0;
    }
    
    
}

function toggleClasses(die) {
    die.classList.toggle("odd-roll");
    die.classList.toggle("even-roll");
}

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById("roll-button").addEventListener("click", rollDice);
