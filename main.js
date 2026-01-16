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
    console.log('---------------- CONTATTO ---------------');
    let index = this.contacts.findIndex( (contatto)=> contatto.nome == nome_cercato );
    if(index >= 0) {
        console.log(`Nome: ${this.contacts[index].nome}, Telefono: ${this.contacts[index].telefono}`);
    }    
    else {
        console.log(`${nome_cercato} non è un contatto salvato in rubrica`);
    }
  },

  aggiungi_contatto : function(nome_aggiunto, telefono_aggiunto){
    console.log('----------- AGGIUNGI CONTATTI -----------');
    this.contacts.push({nome : nome_aggiunto, telefono : telefono_aggiunto});
    console.log(`${nome_aggiunto} salvato in rubrica`);
  },
  
  rimuovi_contatto : function(nome_rimosso){
    console.log('------------ RIMUOVI CONTATTO ------------');
    let index = this.contacts.findIndex( (contatto)=> contatto.nome == nome_rimosso );
        if(index >= 0) {
            this.contacts.splice(index,1);
            console.log(`${nome_rimosso} rimosso dalla rubrica`);
        }    
        else {
            console.log(`${nome_rimosso} non è un contatto salvato in rubrica`);
        }
    },

  modifica_contatto : function(nome_modificato, telefono_modificato){
    console.log('----------- MODIFICA CONTATTO -----------');
    let index = this.contacts.findIndex( (contatto)=> contatto.nome == nome_modificato );
    if(index >= 0) {
        this.contacts[index].telefono = telefono_modificato;
        console.log(`${nome_modificato} è stato modificato in rubrica`);
    }    
    else {
        console.log(`${nome_modificato} non è un contatto salvato in rubrica`);
    }
  },

};


rubrica.mostra_contatti();
rubrica.mostra_contatto('Paola');
rubrica.aggiungi_contatto('Gianluca', '333555555');
rubrica.rimuovi_contatto('Lorenzo');
rubrica.modifica_contatto('Jenny', '1234567892')

rubrica.mostra_contatti();

console.log(rubrica);