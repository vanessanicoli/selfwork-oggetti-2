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
        // for(let i=0; i<this.contacts.length; i++){
        //     console.log(`Nome: ${this.contacts[i].nome}, Telefono: ${this.contacts[i].telefono}`);
        // }
        // ---- Alternativa con forEach ----
        this.contacts.forEach( (contatto)=> console.log(`Nome: ${contatto.nome}, Telefono: ${contatto.telefono}`) );
    }
    else {
        console.log(`Non ci sono contatti salvati in rubrica`);
    }
  },

  mostra_contatto : function(nome_cercato){
    console.log('--------------- CONTATTO --------------');
    let index = this.contacts.findIndex( (contatto)=> contatto.nome == nome_cercato );
    if(index >= 0) {
        console.log(`Nome: ${this.contacts[index].nome}, Telefono: ${this.contacts[index].telefono}`);
    }    
    else {
        console.log(`${nome_cercato} non è un contatto salvato in rubrica`);
    }
  },

//   aggiungi_contatto : function(nome_aggiunto, telefono_aggiunto){

//   },

//   modifica_contatto : function(nome_modificato){

//   },

//   rimuovi_contatto : function(nome_rimosso){

//   },


};


rubrica.mostra_contatti();
rubrica.mostra_contatto('Paola');
