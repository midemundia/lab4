import express from 'express';
import fetch from 'node-fetch';
const planets = (await import('npm-solarsystem')).default;
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('/', async(req, res) => {
	let url = `https://api.nasa.gov/planetary/apod?api_key=9mUzIkhlZCZaOoMfspg7jMmwZCZ4LiRHtkgkambD&count=1`;
    let response = await fetch(url);
    let data = await response.json();
    let randomImage = data[0].hdurl;
    res.render("index",{"image":randomImage, "currentPage": "home"})
});

app.get('/mercury', (req, res) => {
 let planetMercury = planets.getMercury();
 console.log(planetMercury);
 res.render('mercury', {planetMercury, currentPage: 'mercury'});
});

app.get('/venus', (req, res) => {
 let planetVenus = planets.getVenus();
 console.log(planetVenus);
 res.render('venus', {planetVenus, currentPage: 'venus'});
});

app.get('/earth', (req, res) => {
 let planetEarth = planets.getEarth();
 console.log(planetEarth);
 res.render('earth', {planetEarth, currentPage: 'earth'});
});

app.get('/mars', (req, res) => {
 let planetMars = planets.getMars();
 console.log(planetMars);
 res.render('mars', {planetMars, currentPage: 'mars'});
});

app.get('/jupiter', (req, res) => {
 let planetJupiter = planets.getJupiter();
 console.log(planetJupiter);
 res.render('jupiter', {planetJupiter, currentPage: 'jupiter'});
});

app.get('/saturn', (req, res) => {
 let planetSaturn = planets.getSaturn();
 console.log(planetSaturn);
 res.render('saturn', {planetSaturn, currentPage: 'saturn'});
}); 

app.get('/uranus', (req, res) => {
 let planetUranus = planets.getUranus();
 console.log(planetUranus);
 res.render('uranus', {planetUranus, currentPage: 'uranus'});
});

app.get('/neptune', (req, res) => {
 let planetNeptune = planets.getNeptune();
 console.log(planetNeptune);
 res.render('neptune', {planetNeptune, currentPage: 'neptune'});
});

app.get('/pluto', (req, res) => {
 let planetPluto = planets.getPluto();
 console.log(planetPluto);
 res.render('pluto', {planetPluto, currentPage: 'pluto'});    
});

app.get('/nasa', async(req, res) => {
 let url = `https://api.nasa.gov/planetary/apod?api_key=9mUzIkhlZCZaOoMfspg7jMmwZCZ4LiRHtkgkambD`;
 let response = await fetch(url);
 let data = await response.json();
 res.render('nasa', {apod: data, currentPage: 'nasa'});
});

app.listen(3000, () => {
   console.log('server started');
});
