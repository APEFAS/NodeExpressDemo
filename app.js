const express = require('express');
const app = express();


const PORT =3030;

app.use('/public',express.static('public')); // a ajouter au moment de regler le probleme du chemin static

// la declaration d'un template  etape2
app.set('views','./views');    // nous devons apres l'installation declarer un app.set qui va cible le dossier crée
   app.set('view engine','ejs'); //Declaration avec un app.set
   // ici pour utiliser le template il faut utiliser la methode res.render  VOIR EN BAS 

//app.use(express.static('public'));

app.get('/movies', (req, res) => {
  //res.send('BIENTOT DES FILMS ICI MEME'); // ETPAPE SANS STYLS
  res.render('movies');
});
app.get('/movies-details',(req,res)=> {   //nouvelle route pour res.render('movies-details');
    res.render('movies-details');  //pour celui la on peut le faire sur le numero de film
});

app.get('/movies/add', (req,res)=> {
    res.send(`Prochainement formulaire d\'ajout`);
});

//app.get('/movies/:id',(req,res)=> {  // ici l'etape 2 pour nous retourner le numero du film
    //const id = req.params.id;
   //res.send(`le film numero ${id}`);
   //res.render('movies-details',{movid:id}); // ici nous allons recuper le id vers le template
//});

app.get('/inscription',(req,res)=>{
    res.send('Ici pour votre inscription');
})

app.get('/contact',(req, res) => {
    res.render('contact');
    //res.send('ici contact');
  });

  app.get('/espace',(req, res) => {
    res.render('espace');
    //res.send('ici contact');
  });

  app.get('/cgu',(req, res)=> {
      res.render('cgu');
  });

app.get('/',(req,res)=>{
    // res.send('HELLO WORD !!!!!!<h2>FCNN</H2>');  
    res.render('index');  // LA METHODE RENDER ICI POUR AFFICHER LE TEMPLATE
    
});

app.listen(PORT, ()=>{
    console.log("nous sommes sur le port ${PORT}");
});