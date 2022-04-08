const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
port = process.env.PORT ;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/parsials');

// Servir contenido Statico
app.use( express.static( 'public' ) );


app.get('/', (req, res)=> {
  res.render('home', {
    titulo: 'Template',
    nombre: 'Sergio Hernández'
  });
})

app.get('/generic',  (req, res) => {
    res.render('generic',{
      titulo: 'Template',
      nombre: 'Sergio Hernández'
    });
  });

  app.get('/elements',  (req, res) => {
    res.render('elements', {
      titulo: 'Template',
      nombre: 'Sergio Hernández'
    });
  });


// Cargar directamente el archivo
// app.get('/generic',  (req, res) => {
//     res.sendFile(__dirname + '/public/generic.html');
//   });

//   app.get('/elements',  (req, res) => {
//     res.sendFile(__dirname + '/public/elements.html');
//   });

app.get('*',  (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
  });

app.listen( port, ()=>{
    console.log(`Escuchando en el puerto ${ port }`);
} );