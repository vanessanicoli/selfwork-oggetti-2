// Crea un oggetto agenda con una proprietà che comprenda una lista di contatti con un nome e un numero di telefono, ed abbia diverse funzionalità tra cui:
// mostrare tutti i contatti dell’agenda
// mostrare un singolo contatto
// eliminare un contatto dall’agenda
// aggiungere un nuovo contatto
// modificare un contatto esistente  

// Suggerimento:

let rubrica = {
  'contacts': [
      {'nome': 'Nicola', 'telefono': '3331111111'},
      {'nome': 'Lorenzo', 'telefono': '3332222222'},
      {'nome': 'Paola', 'telefono': '3333333333'},
      {'nome': 'Jenny', 'telefono': '3334444444'}
  ],
//   'contacts': [],

  mostra_contatti : function(){
    console.log('------------ LISTA CONTATTI ------------');
    if(this.contacts.length > 0) {
        for(let i=0; i<this.contacts.length; i++){
            console.log(`Nome: ${this.contacts[i].nome}, Telefono: ${this.contacts[i].telefono}`);
        }
    }
    else {
        console.log(`Non ci sono contatti salvati in rubrica`);
    }
  },

  mostra_contatto : function(nome_cercato){

  },

//   aggiungi_contatto : function(nome_cercato){

//   },

//   modifica_contatto : function(nome_cercato){

//   },

//   rimuovi_contatto : function(nome_cercato){

//   },


};

rubrica.mostra_contatti();