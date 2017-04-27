/**
 * BookController
 *
 * @description :: Server-side logic for managing books
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getAll: function(req, res)	{
		Book.find().then(function(books)	{
			res.send(books);
		}).catch(function(err){
			res.serverError(err);
		})
	},
	save: function(req, res)	{
		var allParams = req.allParams();
		Book.create(allParams).then(function(books)	{
			res.send(books);
		}).catch(function(err){
			res.serverError(err);
		})
	},
	update: function(req, res)	{
		var allParams = req.allParams();
		Book.update({id: allParams.id}, {
			author: allParams.author,
			title: allParams.title,
			price: allParams.price
		}).then(function(books)	{
			res.send(books[0]);
		}).catch(function(err){
			res.serverError(err);
		})
	},
	delete: function(req, res)	{
		var allParams = req.allParams();
		Book.destroy({id: allParams.id}).then(function(books)	{
			res.send(books);
		}).catch(function(err){
			res.serverError(err);
		})
	}
};
