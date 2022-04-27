const express = require('express');
const app = express();
const p = 3000;
app.use(express.static('./public'));
app.get('/', (req, res) => {
	res.send('Hola');
})
app.listen(p, () =>{
	console.log('Escuchando en el puerto 3000');
});
