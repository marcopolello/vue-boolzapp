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
    corrispondenze: [
      {
        immagine: "img/avatar_1.jpg",
        nome: "Paolo",
        messaggi: ["ciao come va?", "tutto bene grazie"],
        dataEora: "23 11 2020 11:58:03"
      },
      {
        immagine: "img/avatar_2.jpg",
        nome: "Luca",
        messaggi: ["mi annoio", "facciamo qualcosa", "oiiiii"],
        dataEora: "23 11 2020 11:58:03"
      },
      {
        immagine: "img/avatar_3.jpg",
        nome: "Marco",
        messaggi: ["che fai?", "io sono in lavanderia"],
        dataEora: "23 11 2020 11:58:03"
      },
      {
        immagine: "img/avatar_4.jpg",
        nome: "Michele",
        messaggi: ["non ci capisco un cazz", "è dura la vita", "ehhhh siiii"],
        dataEora: "23 11 2020 11:58:03"
      },
      {
        immagine: "img/avatar_5.jpg",
        nome: "Andrea",
        messaggi: ["ciao come va?", "malissimo"],
        dataEora: "23 11 2020 11:58:03"
      },
      {
        immagine: "img/avatar_6.jpg",
        nome: "Lucia",
        messaggi: ["mi piaci", "sono a casa da sola"],
        dataEora: "23 11 2020 11:58:03"
      },
      {
        immagine: "img/avatar_7.jpg",
        nome: "Simone",
        messaggi: ["piaci a Lucia", "occhio perché ha le piattole", "scherzone xD"],
        dataEora: "23 11 2020 11:58:03"
      },
    ],
    counter: 0,
    // classi: "visibile, invisible",
    selectedName: "Paolo",
    selectedImm: "img/avatar_1.jpg",
    selectedMsg: ["ciao come va?", "tutto bene grazie"],
    ultimo: msg
  },
  methods: {
    // toggleClassi: () => { app.classi === "visible" ? app.classi = "invisible" : app.classi = "visible"},
    selezioneItem(item){
      console.log(item);
      this.selectedName = null;
      this.selectedImm = null;
      this.selectedMsg = null;
      this.selectedName = item.nome;
      this.selectedImm = item.immagine;
      this.selectedMsg = item.messaggi;
    },
    lastMsg(){
      for (var i = 0; i < this.corrispondenze.mesaggi.length; i++) {
        var ultimo = this.corrispondenze.mesaggi[i];
      }
      return ultimo;
      console.log(ultimo);
    }
  }
})
