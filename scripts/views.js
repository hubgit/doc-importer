var Views = {
	Input: Backbone.View.extend({
		el: "#input",

		initialize: function() {
			var $el = this.$el;
			var model = this.model;

			var handleData = function(data) {
				$el.html(data);

				var html = Converter.extract(model, $el);

				var markdown = Converter.convertToMarkdown(html.html());
				model.set("markdown", markdown);

				var html = Converter.convertToHTML(markdown);
				model.set("html", html);
			};

			var handlePickedFile = function(data) {
				var url;

				if (data[google.picker.Response.ACTION] != google.picker.Action.PICKED) {
					return;
				}

				var doc = data[google.picker.Response.DOCUMENTS][0];

				var url = doc[google.picker.Document.URL].replace(/\/edit$/, "/export");
				importFile(url);
			};

			var importFile = function(url) {
				$.ajax({
					url: url,
					dataType: "text",
					success: handleData
				});
			};

			var createPicker = function(event) {
				event.preventDefault();

				alert("Note: the document to be imported must be set to 'public' in Google Drive");

				var picker = new google.picker.PickerBuilder()
				    .addView(google.picker.ViewId.DOCUMENTS)
				    .enableFeature(google.picker.Feature.NAV_HIDDEN)
				    .setCallback(handlePickedFile)
				    .build();

				picker.setVisible(true);
			};

			google.load("picker", "1", { callback: function() {
				$("#google-import").on("click", createPicker);
			}});

			var importExample = function(event) {
				event.preventDefault();

				var href = $(this).attr("href");
				importFile(href);
			};

			$("#examples a").on("click", importExample);
		}
	}),

	Markdown: Backbone.View.extend({
		el: "#markdown",

		events: {
			"keyup": "handleUpdate"
		},

		initialize: function() {
			this.$el.appendTo("body");
			this.model.on("change:markdown", this.render, this);

			var stored = window.localStorage.getItem("markdown");
			if (stored) {
				this.model.set("markdown", stored);
				this.handleUpdate();
			}
		},

		render: function(event) {
			console.log("markdown render");
			var markdown = this.model.get("markdown");
			window.localStorage.setItem("markdown", markdown);
			this.$el.val(markdown);
		},

		handleUpdate: function() {
			console.log("markdown update");
			var markdown = this.$el.val();
			window.localStorage.setItem("markdown", markdown);
			var html = Converter.convertToHTML(markdown);
			this.model.set("html", html);
		}
	}),

	Output: Backbone.View.extend({
		el: "#output",

		initialize: function() {
			this.$el.appendTo("body");
			this.model.on("change:html", this.render, this);

			var view = this;

			var handleUpdate = function() {
				console.log("html update");
				var html = view.redactor.getCode();
				var markdown = Converter.convertToMarkdown(html);
				view.model.set("markdown", markdown);
			}

			var textarea = $("<textarea/>").appendTo(this.$el);

			this.redactor = textarea.redactor({
				focus: false,
			    buttons: ['formatting', '|', 'bold', 'italic', 'underline', 'deleted', '|',
'unorderedlist', 'orderedlist', '|', 'table', 'link', '|', 'alignment'],
				keyupCallback: handleUpdate,
				execCommandCallback: handleUpdate,
			});

			this.render();
		},

		render: function(event) {
			var html = this.model.get("html");

			if (html) {
				console.log("html render");
				this.redactor.setCode(html);
			}
		},
	}),
}
