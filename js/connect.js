function login() {


    var name = document.getElementById("name").value;
    var pwd = document.getElementById("pwd").value;

    var alertError = document.getElementById("alert-error");
    var alertSuccess = document.getElementById("alert-success");





    //console.log("name "+ name);

    //console.log("pwd "+ pwd);



    if (name == "admin" && pwd == "admin") {


        alertError.style.backgroundColor = "";


        window.setTimeout(function () {


            window.location.href = "./admin/index.html";

        }, 1000);


        //window.location.href = "../index.html";
    }

    else {



        alertError.style.backgroundColor = "#f44336";



        if (name.length < 5) {

            //console.log("name length"+ name.length);

            alertError.innerHTML = "   <strong>Erreur!</strong> Nom d'utilisateur invalide (le nom doit contenir au moins 5 caractères) !";
        }



        else if (pwd.length < 5) {

            //console.log("pwd length"+ pwd.length);

            alertError.innerHTML = "   <strong>Erreur!</strong> Mot de passe invalide (le mot de passe doit contenir au moins 5 caractères) !";
        }

        else {
            alertError.innerHTML = "   <strong>Erreur!</strong> Nom et mot de passe invalides !";

        }



    }


}