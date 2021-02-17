var app = new Vue ({
  el: '#app',
  data: {
    attivo: 0,
    corrispondenze: [
      {
        immagine: "img/avatar_1.jpg",
        nome: "Paolo",
        messaggi: [
          {
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            stato: "inviato",
            orario: "12:03",
            data: "24 11 2020",
            opzioniMessaggio: "none",
          },
          {
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            stato: "ricevuto",
            orario: "12:04",
            data: "24 11 2020",
            opzioniMessaggio: "none",
          },
          {
            text: "come va?",
            stato: "inviato",
            orario: "12:05",
            data: "24 11 2020",
            opzioniMessaggio: "none",
          },
        ],
        visible: true
      },
      {
        immagine: "img/avatar_2.jpg",
        nome: "Luca",
        messaggi: [
          {
            text: "oibò",
            stato: "inviato",
            orario: "12:03",
            data: "24 11 2020",
            opzioniMessaggio: "none",
          },
          {
            text: "ciao sono Luca",
            stato: "ricevuto",
            orario: "12:04",
            data: "24 11 2020",
            opzioniMessaggio: "none",
          },
          {
            text: "che fai oggi??",
            stato: "inviato",
            orario: "12:05",
            data: "24 11 2020",
            opzioniMessaggio: "none",
          },
        ],
        visible: true
      },
      {
        immagine: "img/avatar_3.jpg",
        nome: "Marco",
        messaggi: [
          {
            text: "chi sei?",
            stato: "inviato",
            orario: "12:03",
            data: "24 11 2020",
            opzioniMessaggio: "none",
          },
          {
            text: "ciao sono Marco",
            stato: "ricevuto",
            orario: "12:04",
            data: "24 11 2020",
            opzioniMessaggio: "none",
          },
          {
            text: "che fai??",
            stato: "inviato",
            orario: "12:05",
            data: "24 11 2020",
            opzioniMessaggio: "none",
          },
          {
            text: "che fai??",
            stato: "inviato",
            orario: "12:05",
            data: "24 11 2020",
            opzioniMessaggio: "none",
          },
          {
            text: "che fai??",
            stato: "inviato",
            orario: "12:05",
            data: "24 11 2020",
            opzioniMessaggio: "none",
          },
          {
            text: "chi sei?",
            stato: "inviato",
            orario: "12:03",
            data: "24 11 2020",
            opzioniMessaggio: "none",
          },
          {
            text: "ciao sono Marco",
            stato: "ricevuto",
            orario: "12:04",
            data: "24 11 2020",
            opzioniMessaggio: "none",
          },
          {
            text: "ciao sono Marco",
            stato: "ricevuto",
            orario: "12:04",
            data: "24 11 2020",
            opzioniMessaggio: "none",
          },
        ],
        visible: true
      },
      {
        immagine: "img/avatar_4.jpg",
        nome: "Michele",
        messaggi: [
          {
            text: "ciao",
            stato: "inviato",
            orario: "12:03",
            data: "24 11 2020",
            opzioniMessaggio: "none",
          },
          {
            text: "ehila sono Michele",
            stato: "ricevuto",
            orario: "12:04",
            data: "24 11 2020",
            opzioniMessaggio: "none",
          },
          {
            text: "che stai facendo??",
            stato: "inviato",
            orario: "12:05",
            data: "24 11 2020",
            opzioniMessaggio: "none",
          },
        ],
        visible: true
      },
      {
        immagine: "img/avatar_5.jpg",
        nome: "Andrea",
        messaggi: [
          {
            text: "ehi, Andrea",
            stato: "inviato",
            orario: "12:03",
            data: "24 11 2020",
            opzioniMessaggio: "none",
          },
          {
            text: "ehila sono Andrea",
            stato: "ricevuto",
            orario: "12:04",
            data: "24 11 2020",
            opzioniMessaggio: "none",
          },
          {
            text: "lo so",
            stato: "inviato",
            orario: "12:05",
            data: "24 11 2020",
            opzioniMessaggio: "none",
          },
        ],
        visible: true
      },
      {
        immagine: "img/avatar_6.jpg",
        nome: "Lucia",
        messaggi: [
          {
            text: "ciao sono Io",
            stato: "inviato",
            orario: "12:03",
            data: "24 11 2020",
            opzioniMessaggio: "none",
          },
          {
            text: "ehila sono Lucia",
            stato: "ricevuto",
            orario: "12:04",
            data: "24 11 2020",
            opzioniMessaggio: "none",
          },
          {
            text: "sono contento per te",
            stato: "inviato",
            orario: "12:05",
            data: "24 11 2020",
            opzioniMessaggio: "none",
          },
        ],
        visible: true
      },
      {
        immagine: "img/avatar_7.jpg",
        nome: "Simone",
        messaggi: [
          {
            text: "ciao",
            stato: "inviato",
            orario: "12:03",
            data: "24 11 2020",
            opzioniMessaggio: "none",
          },
          {
            text: "ehila sono Simone",
            stato: "ricevuto",
            orario: "12:04",
            data: "24 11 2020",
            opzioniMessaggio: "none",
          },
          {
            text: "ma dai sei Simone!? assurdo!",
            stato: "inviato",
            orario: "12:05",
            data: "24 11 2020",
            opzioniMessaggio: "none",
          },
        ],
        visible: true
      },
    ],
    message: "",
    timer: null,
    complete: false, //check se funzione di invio msg è completa
    contatto: "",
  },
  methods: {
    selezioneItem(i){
      // rendo item preso al click attivo
      this.attivo = i;
    },
    checkIfActive: function (indice) {
      if (indice == this.attivo){
        return "selected"
      }
    },
    inviaMsg: function () {
      // devo creare un nuovo oggetto nell'array messaggi
      let nuovoObj = {
        text: "",
        stato: "inviato",
        orario: "12:05",
        data: "24 11 2020",
        opzioniMessaggio: "none",
      };
      // l'input utente diventa il valore della chiave text
      nuovoObj.text = this.message;
      // pusho il nuovo oggetto all'interno dell'array
      if (this.message == "") {
        // se non scrivo niente in chat non succede nulla
      } else {
        this.corrispondenze[this.attivo].messaggi.push(nuovoObj);
        this.complete = true; //push completato
      }
      // console.log(this.corrispondenze);

      // reset dell'input x nuovo msg
      this.message= "";
      this.scrollDown();
    },
    // funzione che scatena il timer
    autoMsg: function (event) {
      // se l'invio del msg è stato completato
      if (this.complete == true) {
        this.timer = setTimeout(this.randomMsg, 2000);
        this.complete = false;
      }
    },
    // funzione che crea nuovo obj allo scadere del timer
    randomMsg() {
      // azzero ogni nuova risposta per far si che sia diversa ogni volta
      let risposta = "";
      // generateWords funzione CHE MI ARRIVA DAL generateWords.JS
      let text = generateWords(Math.floor((Math.random() * 10) + 1));
      for (var i = 0; i < text.length; i++) {
        // console.log(text[i]);
        risposta = risposta + " " + text[i];
      }
      // stampo un oggetto ricevuto random
      let nuovoObj = {
        text: risposta,
        stato: "ricevuto",
        orario: "12:08",
        data: "24 11 2020",
        opzioniMessaggio: "none",
      };
      this.corrispondenze[this.attivo].messaggi.push(nuovoObj);
      this.scrollDown();
    },
    cercaContatto() {
      this.corrispondenze.forEach((item, i) => {
        let nome = item.nome;
        nome = nome.toLowerCase();
        if (nome.includes(this.contatto)) {
          item.visible = true;
        } else {
          item.visible = false;
        }
      });
    },
    opzioniMessaggio: function(i) {
      if (this.corrispondenze[this.attivo].messaggi[i].opzioniMessaggio === "none") {
        this.corrispondenze[this.attivo].messaggi[i].opzioniMessaggio = "block";
      } else {
        this.corrispondenze[this.attivo].messaggi[i].opzioniMessaggio = "none";
      };
    },
    deleteMessage: function (i) {
      // console.log(i);
      this.corrispondenze[this.attivo].messaggi.splice(i, 1);
    },
    scrollDown: function() {
      setTimeout(function(){
        let chat = document.getElementById("mainchat");
        chat.scrollTop = chat.scrollHeight;
      }, 1);
    }
  }
})
