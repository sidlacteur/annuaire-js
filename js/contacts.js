/**************************** variable *******************************/

var Contact;
var listContact = [];
var choixDetails = 
    ["0 : Lister les contacts","1 : Ajouter un contact","2 : Quitter"];
var Choix = [0,1,2];

/****************** contact ****************************/

Contact = {
    nom:"SIDLAKHDAR",
    prenom:"YAssine",

    init: function (nom,prenom){
        this.nom=nom;
        this.prenom=prenom;
    },

    decrire: function (){
        var description = "nom : "+this.nom+", prenom : "+this.prenom;
        return description;
    }
};

/**************** contact *****************************
***************** listecontact *****************************/


function AjoutContact(nom,prenom){
    var unContact= Object.create(Contact);
    unContact.init(nom,prenom);
    listContact.push(unContact);
    return "Contact Ajouter avec succés";
}

AjoutContact("Carole","Lévisse");
AjoutContact("Mélodie","Nelsonne");

/****************** listecontact *****************************/


function ListerChoix(){
    for(var i=0; i< choixDetails.length;i++){
        console.log(choixDetails[i]);
    }
}

Choix=0;
ListerChoix();

while(Choix!= 2){
    Choix= prompt("Choisisser un numero :");

    if (Choix == 0){

        for(var i=0;i<listContact.length;i++){
            console.log(listContact[i].decrire());}
    }

    if (Choix == 1){
        var  nom1= prompt("Entrer le nom du nouveau contact : ");
        var prenom1= prompt("Entrer le prenom du nouveau contact : ");

        AjoutContact(nom1,prenom1);
    } 

    if(Choix!= 1 && Choix != 0){
        console.log("Veuillez svp taper un numéro parmis la liste suivant : "+Choix)}

}
////********************* FIN DE LA BOUCLE **************///
console.log("Merci Pour le test");

