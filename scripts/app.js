if (typeof console == "undefined"){
    console = { log: function(){} };
}

var Models = {
	Article: Backbone.Model.extend({})
};

google.setOnLoadCallback(function() {
	$(function() {
		var article = new Models.Article;

		new Views.Input({ model: article });
		new Views.Markdown({ model: article });
		new Views.Output({ model: article });
	});
});