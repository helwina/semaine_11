/*--------------------------------------------------------------*\
                        variables
\*--------------------------------------------------------------*/
$button = document.getElementById('button');
$choixOrdi = Math.floor(Math.random() * 100)+1;
$error = document.getElementById('error');
$proposition = document.getElementById('proposition');
$resultat = document.getElementById('resultat');

nbrEssai = 0;

/*--------------------------------------------------------------*\
 compare notre proposition avec le nombre choisis par l ordinateur
\*--------------------------------------------------------------*/
function verification(){
    nbrEssai++;
    if ((proposition.value < 0) || (proposition.value > 100)) {
        errornumber();
    }else if (proposition.value < $choixOrdi) {
        $resultat.innerHTML = "Votre proposition est trop petite";
    }else if (proposition.value > $choixOrdi) {
        $resultat.innerHTML = "Votre proposition est trop grande";
    }else if (proposition.value == $choixOrdi) {
        $resultat.innerHTML = "Vous avez trouve en " + nbrEssai + " essai(s) bravo";
    }else {
        errornumber();
    }
}
/*--------------------------------------------------------------*\
            affiche les erreur pendant 3 secondes
\*--------------------------------------------------------------*/
function errornumber(){
    $error.innerHTML = "vous n avez pas entree un nombre entre 1 et 100!";
    setTimeout(function(){
        $error.innerHTML = '';
    },3000);
}

$button.onclick = verification;