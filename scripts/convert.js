var Converter = new function() {
	var showdownConverter = new Showdown.converter();

	this.convertToHTML = function(markdown) {
		return showdownConverter.makeHtml(markdown);
	};

	this.convertToMarkdown = function(html) {
		return HTML2Markdown(html);
	};

	this.extract = function(model, node) {
		var section = "front";
		var sections = {
			"front": {
				property: section,
				title: "",
				content: $("<section/>").attr("id", section),
			}
		};
		var node;
		var date;
		var item;
		var article = $("<article/>");

		var input = node.clone(true).get(0).childNodes;

		for (var i = 0; i < input.length; i++) {
			item = input[i];

			// only DOMElement
			if (item.nodeType !== 1) {
				continue;
			}

			node = $(item).clone().get(0);

			switch (node.nodeName) {
				case "H1":
					sections["front"].title = node.textContent;
					break;

				case "H2":
				case "H3":
				case "H4":
				case "H5":
				case "H6":
					// TODO: nested sections
					section = node.textContent.toLowerCase();
					sections[section] = {
						property: section,
						title: node.textContent,
						content: $("<section/>").attr("id", section),
					};
					break;

				case "TITLE":
				case "STYLE":
					break;

				default:
					if (section) {
						sanitise(node);
						sections[section].content.append(node);
						continue;
					}

					break;
			}
		}

		$.map(sections, function(section) {
			var heading = $("<h2/>").text(section.title);
			article.append(heading);
			article.append(section.content);
		});

		return article;
	};

	var styles = {
		i: ["font-style", "italic"],
		b: ["font-weight", "bold"],
		sc: ["font-variant", "small-caps"],
		strike: ["text-decoration", "line-through"],
		sub: ["vertical-align", "sub"],
		sup: ["vertical-align", "super"],
		u: ["text-decoration", "underline"],
	};

	var sanitise = function(node) {
		if (!node.nodeName) {
			return;
		}

		switch (node.nodeName) {
			case "A":
			case "P":
			case "SPAN":
			case "IMG":
			case "TABLE":
			case "TBODY":
			case "THEAD":
			case "TR":
			case "TD":
			case "OL":
			case "UL":
			case "LI":
			case "#text":
				break;

			default:
				return;
		}

		if (node.childNodes.length) {
			for (var i = 0; i < node.childNodes.length; i++) {
				var item = node.childNodes[i];
				if (item.nodeType === 1) {
					sanitise(item);
				}
			}
		}

		var item = $(node);
		var elementStyle = css(item);
		var wrapper;

		$.each(styles, function(property, style) {
			if (elementStyle[style[0]] == style[1]) {
				wrapper = document.createElement(property);
				item.wrapInner(wrapper);
			}
		});

		item.removeAttr("class");
	};

	// http://stackoverflow.com/a/5830517/145899
	var css = function(a){
	    var sheets = document.styleSheets,
	    		 o = {};

	    for (var i in sheets) {
	        var rules = sheets[i].rules || sheets[i].cssRules;
	        for (var r in rules) {
	        	var selector = rules[r].selectorText;
	            if (selector && !selector.match(/:/) && a.is(selector)) {
	                o = $.extend(o, css2json(rules[r].style), css2json(a.attr('style')));
	            }
	        }
	    }

	    return o;
	};

	// http://stackoverflow.com/a/5830517/145899
	var css2json = function(css){
        var s = {};
        if(!css) return s;

        if (css instanceof CSSStyleDeclaration) {
            for (var i in css) {
                if ((css[i]).toLowerCase) {
                    s[(css[i]).toLowerCase()] = (css[css[i]]);
                }
            }
        } else if (typeof css == "string") {
            css = css.split("; ");
            for (var i in css) {
                var l = css[i].split(": ");
                s[l[0].toLowerCase()] = (l[1]);
            };
        }

        return s;
    };
};