// Comment se déroule le jeux : 
// 1) Quand j'appuie sur une difficultés : un tableau correspondant a la difficulté apparait
// 2) Le tableau est cacher, quand je clique sur une case : dévoile une partie du tableau
// 3) Les nombre m'indique le nombre de mine qu'il y a autour de la case en question
// 4) Quand je clique sur une case avec numéro dévoile la case
// 5) Quand je clique sur une case sans aucun numéro : dévoile toute les cases adjacents jusqua etre bloquer par un némro
// 6) Quand je clique sur une bombe : game over
// 7) Quand je clique droit sur une case non dévoilé : ajoute un drapeau
// 8) Quand je clique droit sur une case avec un drapeau : ajouter un point d'interogation
// 9) Quand je clique droit sur une case avec un point d'intérogation : redevient une case non devoilé classique

// COOK TIME :
// Définir un nombre de bombe a posé
// Parcourir le tableau
// A chaque


// VARIABLE //
let test = document.querySelectorAll('.row_1');
console.log(test);

let tabGame = document.querySelectorAll('main p');
console.log(tabGame);

let play = document.querySelector('button');

let difficulty = 10;

let mine = 10;
let totalCase = 81;

// FUNCTION //

function randomNumber (tab){
    return tab[Math.floor(Math.random() * tab.length)];
};

function reset(){
    for(i=0; i<tabGame.length; i++){
        tabGame[i].textContent = '';
    }
}

function tabNumber(){
    let compteur = 0;
    for(x=1; x<10; x++){
        let row = document.querySelectorAll('.row_' + x + ' p');
        let rowUp = document.querySelectorAll('.row_' + (x-1) + ' p');
        let rowDown = document.querySelectorAll('.row_' + (x+1) + ' p');
        // console.log(row);
        for(y=0; y<9; y++){
            // console.log(row[x])

            // si la case est vide :
            if(row[y].textContent == ''){
                // // vérifier les case adjacente :
                // // la case de gauche
                // console.log(row[y-1]);
                // // la case de droite
                // console.log(row[y+1]);

                // // la case en haut
                // console.log(rowUp[y]);
                // // la case en haut a gauche
                // console.log(rowUp[y-1]);
                // // la case en haut a droite
                // console.log(rowUp[y+1]);

                // // la case en bas
                // console.log(rowDown[y]);
                // // la case en bas a gauche
                // console.log(rowDown[y-1]);
                // // la case en bas a droite
                // console.log(rowDown[y+1]);

                // vérifier les case adjacente :
                // console.log(rowUp[y-1]);
                // console.log(rowUp[y]);
                // console.log(rowUp[y+1]);
                // console.log(row[y+1]);
                // console.log(rowDown[y+1]);
                // console.log(rowDown[y]);
                // console.log(rowDown[y-1]);
                // console.log(row[y-1]);

                // BOUCLE ? : 
                // let contour = [(y-1), y, (y+1)];

                if(rowUp[y-1] !== undefined && rowUp[y-1].textContent == '*'){
                    compteur++
                };
                if(rowUp[y] !== undefined && rowUp[y].textContent == '*'){
                    compteur++
                };
                if(rowUp[y+1] !== undefined && rowUp[y+1].textContent == '*'){
                    compteur++
                };


                if(row[y+1] !== undefined && row[y+1].textContent == '*'){
                    compteur++
                };


                if(rowDown[y+1] !== undefined && rowDown[y+1].textContent == '*'){
                    compteur++
                };
                if(rowDown[y] !== undefined && rowDown[y].textContent == '*'){
                    compteur++
                };
                if(rowDown[y-1] !== undefined && rowDown[y-1].textContent == '*'){
                    compteur++
                };

                if(row[y-1] !== undefined && row[y-1].textContent == '*'){
                    compteur++
                };

                if(compteur > 0){
                    row[y].textContent = compteur;
                }

                compteur = 0;


                
            } else if (row[y].textContent == '*'){

            };
        };
    };
};


// ACTION //
play.addEventListener('click', () => {
    reset();

    let indexMine = [];
    for(i=0; i<mine ; i++){
        let number = null;
        let numberIsInArray = true;
        while(numberIsInArray == true){
            numberIsInArray = false
            number = Math.floor(Math.random() * totalCase)
            for(verif=0; verif<indexMine.length; verif++){
                if(number == indexMine[verif]){
                    numberIsInArray = true;
                }
            }
        }
        indexMine.push(number);
    }
    console.log(indexMine);

    for(i=0; i<indexMine.length; i++){
        // console.log(tabGame[indexMine[i]]);
        tabGame[indexMine[i]].textContent = '*';
    }

    tabNumber();
});



