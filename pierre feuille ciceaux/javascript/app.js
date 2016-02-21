/*--------------------------------------------*\
                variables
\*--------------------------------------------*/

$button = document.getElementById("button");
$drow = document.getElementById("drow");
$error = document.getElementById("error");
$loose = document.getElementById("loose");
$nbrOrdi = Math.floor(Math.random() * 3);
$pcnvic = document.getElementById("pcnvic");
$result = document.getElementById("result");
$select = document.getElementById("Selected");
$win = document.getElementById("win");

drow = 0;
loose = 0;
win = 0;

//selectionne un objet dans la liste deroulante
function selitem(){
    $choix = $select.selectedIndex;
    $valeur = $select.options[$choix].value;
    $nbrOrdi = Math.floor(Math.random() * 3);
}

function showvic(){
    victory = ((win * 100) / (win + loose + drow));
    $pcnvic.innerHTML = victory.toFixed(3) + " % de victoire";
}

//message d egaliter
function showdrow(){
    $drow.innerHTML = drow + " egalite";
}

//message de defaite
function showloose(){
    $loose.innerHTML = loose + " defaite";
}

//message de victoire
function showwin(){
    $win.innerHTML = win + " victoire";
}

/*--------------------------------------------*\
    verification des condition de victoire
             defaite match nul
        et incrementation des compteur
\*--------------------------------------------*/

function verification(){
    if($valeur == $nbrOrdi){
        drow++;
        $result.innerHTML = "egaliter";
        timer();
        showdrow();
    }else if(($valeur == 0 ) && ($nbrOrdi == 2) || ($valeur == 1) && ($nbrOrdi == 0) || ($valeur == 2) && ($nbrOrdi == 1)){
        win++;
        $result.innerHTML = "vous avez gagner";
        timer();
        showwin();
    }else if(($valeur == 0) && ($nbrOrdi == 1) || (($valeur == 1) && ($nbrOrdi == 2)) || (($valeur = 2) && ($nbrOrdi == 0))) {
        loose++;
        $result.innerHTML = "vous avez perdu";
        timer();
        showloose();
    }else{
        $error.innerHTML = "vous devez choisir entre pierre feuille ou ciseau";
        timer();
    }
}

/*--------------------------------------------*\
    affichage du message victoire match nul
     defaite pendant 3 sec et reset la selection
\*--------------------------------------------*/

function timer(){
    setTimeout(function(){
        $result.innerHTML = ''
        $error.innerHTML = ''
    },3000);
    $select.selectedIndex = 0;
    $valeur = 3;
    showvic();
}

$button.onclick = verification;
showdrow();
showloose();
showwin();
