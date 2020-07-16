var Bicicleta = require('../models/bicicleta');

exports.bicicleta_list = function(req, res){
	res.render('bicicletas/index', {bicis: Bicicleta.allBicis});
}

exports.bicicleta_creaete_get = function(req, res){
	res.render('bicicletas/create');
}

exports.bicicleta_creaete_post = function(req, res){
	var bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo);
	bici.ubicacion = [req.body.lat, req.body.lng];
	Bicicleta.add(bici);

	res.redirect('/bicicletas');
}

exports.bicicleta_update_get = function(req, res){
	var bici = Bicicleta.findById(req.params.id);

	res.render('bicicletas/update', {bici});
}

exports.bicicleta_update_post = function(req, res){
	var bici = Bicicleta.findById(req.params.id);
	bici.id = res.body.id;
	bici.color = res.body.color;
	bici.modelo = res.body.modelo;
	bici.ubicacion = [req.body.lat, req.body.lng];

	res.redirect('/bicicletas');
}

exports.bicicleta_delete_post = function(req, res){
	Bicicleta.removeById(req.body.id);

	res.redirect('/bicicletas');
}
