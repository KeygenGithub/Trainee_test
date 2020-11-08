function signIn() {
    const logIN = document.getElementById("logIn");
    logIN.innerHTML = '<div> Hi, Angels! <span> | </span><a href="#" onclick="signOut()" style="margin-right:25px">Sign out</a> </div>';
    const chest = document.getElementById("chest");
    chest.innerHTML = '<a href="#" class="basket"><img src="img/basket.png" alt="basket" style="margin-right:30px"></a> <a href="#" class="basket"><img src="img/Group.png" alt="basket" style="margin-top:2px"></a>';
}

function signOut() {
    const logOut = document.getElementById("logIn");
    logOut.innerHTML = '<a href="#" onclick="signIn()">Sign in</a><span> | </span><a href="#">Register</a>';
    const chest = document.getElementById("chest");
    chest.innerHTML = '<a href="#" class="basket"><img src="img/basket.png" alt="basket"></a>';
}


//dynamically change background header

// var phr = new Array();
// phr.push("../img/bg-header.png");
// phr.push("../img/hp-oh-hi.png");

// function Rotator_cont() {

//     var s = 5000; // display time

//     var N = phr.length;
//     var i = Math.round(Math.random() * (N));
//     label = true;
//     Rotator(i);

//     function Rotator(i) {
//         i++;
//         if (i > N - 1) { i = 0 };
//         document.getElementById('top-side').style.backgroundImage = 'url(' + phr[i] + ')';
//         timerId01 = setTimeout(function() { Rotator(i) }, s);
//         return;
//     }
// }
// Rotator_cont()

//header states
label = true;

function changeBgHeader() {
    if (label) {
        document.getElementById('top-side').style.backgroundImage = 'url(../img/hp-oh-hi.png)';
        label = false;
    } else {
        document.getElementById('top-side').style.backgroundImage = 'url(../img/bg-header.png)';
        label = true;
    }
}