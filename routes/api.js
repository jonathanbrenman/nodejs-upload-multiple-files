module.exports = function(app, routerApi){

	//API Routes comes here
   	routerApi.get('/', function(req, res) {
	    res.json({ message: 'welcome to our api!' });   
	});
	
	//GET http://localhost:8080/api
	app.use('/api/v1', routerApi);
}