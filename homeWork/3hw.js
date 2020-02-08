 
function GeneratePassword(){
    var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var sym ="!@#$%^&*()_+:";
    var Num = "1234567890";
    var Chars = "";
    var vOut = document.getElementById("output");
    var vCharNum = document.getElementById("charNum");
    var vCaps = document.getElementById("txtcaps");
    var vlower = document.getElementById("txtlower");
    var vsym = document.getElementById("txtsym");
    var vnum = document.getElementById("txtNum");
    var vpaWd = document.getElementById("paWd");
    var vlength = 8;


    Chars = "";
    if(vCaps.checked){
        Chars = Chars + caps;
    }
    if(vlower.checked){
        Chars = Chars + lower;
    }
    if(vsym.checked){
        Chars = Chars + sym 
    }
    if(vnum.checked){
        Chars = Chars + Num
    }

    vlength = vCharNum.value;

    var pass = "";
    for(var i = 0; i < vlength; i++){

        pass = pass + Chars.charAt(Math.floor(Math.random() * Chars.length));
    

    }

    vOut.innerHTML = pass;



    vpaWd.value = pass;


};



