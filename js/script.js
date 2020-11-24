// Per oggi saremo sulla milestone2, chat differenziate:
// cliccando sulla chat vedo quella corrispondente;
// con header con dati relativi a chat attiva;
// relativa chat in elenco rimane selezionata
// NOTE
// prima di scrivere qualsiasi cosa di codice fate una bella bella pre-analisi sulla struttura dei dati;
// usate carta o penna o quello che volete, ma fin quando non avete definito i dati che vi servono e  come strutturarli, non potete far molto;
// cercate di descrivere nel mondo reale di cosa state parlando, che “materia” state trattando e definendo;
// poi la riportate a ciò che JS ci mette a disposizione (array, oggetti, stringhe, numeri…. etc.).


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
            text: "ciao",
            stato: "inviato",
            orario: "12:03",
            data: "24 11 2020"
          },
          {
            text: "ehila",
            stato: "ricevuto",
            orario: "12:04",
            data: "24 11 2020"
          },
          {
            text: "come va?",
            stato: "inviato",
            orario: "12:05",
            data: "24 11 2020"
          },
        ],
        dataEora: "23 11 2020 11:58:03",
      },
      {
        immagine: "img/avatar_2.jpg",
        nome: "Luca",
        messaggi: [
          {
            text: "oibò",
            stato: "inviato",
            orario: "12:03",
            data: "24 11 2020"
          },
          {
            text: "ciao sono Luca",
            stato: "ricevuto",
            orario: "12:04",
            data: "24 11 2020"
          },
          {
            text: "che fai oggi??",
            stato: "inviato",
            orario: "12:05",
            data: "24 11 2020"
          },
        ],
        dataEora: "23 11 2020 11:58:03",
      },
      {
        immagine: "img/avatar_3.jpg",
        nome: "Marco",
        messaggi: [
          {
            text: "chi sei?",
            stato: "inviato",
            orario: "12:03",
            data: "24 11 2020"
          },
          {
            text: "ciao sono Marco",
            stato: "ricevuto",
            orario: "12:04",
            data: "24 11 2020"
          },
          {
            text: "che fai??",
            stato: "inviato",
            orario: "12:05",
            data: "24 11 2020"
          },
          {
            text: "che fai??",
            stato: "inviato",
            orario: "12:05",
            data: "24 11 2020"
          },
          {
            text: "che fai??",
            stato: "inviato",
            orario: "12:05",
            data: "24 11 2020"
          },
          {
            text: "chi sei?",
            stato: "inviato",
            orario: "12:03",
            data: "24 11 2020"
          },
          {
            text: "ciao sono Marco",
            stato: "ricevuto",
            orario: "12:04",
            data: "24 11 2020"
          },
          {
            text: "ciao sono Marco",
            stato: "ricevuto",
            orario: "12:04",
            data: "24 11 2020"
          },
        ],
        dataEora: "23 11 2020",
      },
      {
        immagine: "img/avatar_4.jpg",
        nome: "Michele",
        messaggi: [
          {
            text: "ciao",
            stato: "inviato",
            orario: "12:03",
            data: "24 11 2020"
          },
          {
            text: "ehila sono Michele",
            stato: "ricevuto",
            orario: "12:04",
            data: "24 11 2020"
          },
          {
            text: "che stai facendo??",
            stato: "inviato",
            orario: "12:05",
            data: "24 11 2020"
          },
        ],
        dataEora: "23 11 2020 11:58:03",
      },
      {
        immagine: "img/avatar_5.jpg",
        nome: "Andrea",
        messaggi: [
          {
            text: "ehi, Andrea",
            stato: "inviato",
            orario: "12:03",
            data: "24 11 2020"
          },
          {
            text: "ehila sono Andrea",
            stato: "ricevuto",
            orario: "12:04",
            data: "24 11 2020"
          },
          {
            text: "lo so",
            stato: "inviato",
            orario: "12:05",
            data: "24 11 2020"
          },
        ],
        dataEora: "23 11 2020 11:58:03",

      },
      {
        immagine: "img/avatar_6.jpg",
        nome: "Lucia",
        messaggi: [
          {
            text: "ciao sono Io",
            stato: "inviato",
            orario: "12:03",
            data: "24 11 2020"
          },
          {
            text: "ehila sono Lucia",
            stato: "ricevuto",
            orario: "12:04",
            data: "24 11 2020"
          },
          {
            text: "sono contento per te",
            stato: "inviato",
            orario: "12:05",
            data: "24 11 2020"
          },
        ],
        dataEora: "23 11 2020 11:58:03",
      },
      {
        immagine: "img/avatar_7.jpg",
        nome: "Simone",
        messaggi: [
          {
            text: "ciao",
            stato: "inviato",
            orario: "12:03",
            data: "24 11 2020"
          },
          {
            text: "ehila sono Simone",
            stato: "ricevuto",
            orario: "12:04",
            data: "24 11 2020"
          },
          {
            text: "ma dai sei Simone!? assurdo!",
            stato: "inviato",
            orario: "12:05",
            data: "24 11 2020"
          },
        ],
        dataEora: "23 11 2020 11:58:03",
      },
    ],
    // classi: "visibile, invisible",
    message: '',
    salvali: [],
  },
  computed: {

  },
  methods: {
    // toggleClassi: () => { app.classi === "visible" ? app.classi = "invisible" : app.classi = "visible"},
    selezioneItem(i){
      // rendo item preso al click attivo
      this.attivo = i;
    },
    inviaMsg: function () {
      this.salvali.push(this.message);
      this.corrispondenze[0].msgSalvati = this.salvali;
      console.log(this.corrispondenze);
      this.message = '';
    }
  }
})
