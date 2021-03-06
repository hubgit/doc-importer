var rwindow, rdocument;
if (typeof RELANG === "undefined") {
    var RELANG = {}
}
var RLANG = {
    html: "HTML",
    video: "Insert Video",
    image: "Insert Image",
    table: "Table",
    link: "Link",
    link_insert: "Insert link",
    unlink: "Unlink",
    formatting: "Formatting",
    paragraph: "Paragraph",
    quote: "Quote",
    code: "Code",
    header1: "Header 1",
    header2: "Header 2",
    header3: "Header 3",
    header4: "Header 4",
    bold: "Bold",
    italic: "Italic",
    fontcolor: "Font Color",
    backcolor: "Back Color",
    unorderedlist: "Unordered List",
    orderedlist: "Ordered List",
    outdent: "Outdent",
    indent: "Indent",
    cancel: "Cancel",
    insert: "Insert",
    save: "Save",
    _delete: "Delete",
    insert_table: "Insert Table",
    insert_row_above: "Add Row Above",
    insert_row_below: "Add Row Below",
    insert_column_left: "Add Column Left",
    insert_column_right: "Add Column Right",
    delete_column: "Delete Column",
    delete_row: "Delete Row",
    delete_table: "Delete Table",
    rows: "Rows",
    columns: "Columns",
    add_head: "Add Head",
    delete_head: "Delete Head",
    title: "Title",
    image_position: "Position",
    none: "None",
    left: "Left",
    right: "Right",
    image_web_link: "Image Web Link",
    text: "Text",
    mailto: "Email",
    web: "URL",
    video_html_code: "Video Embed Code",
    file: "Insert File",
    upload: "Upload",
    download: "Download",
    choose: "Choose",
    or_choose: "Or choose",
    drop_file_here: "Drop file here",
    align_left: "Align text to the left",
    align_center: "Center text",
    align_right: "Align text to the right",
    align_justify: "Justify text",
    horizontalrule: "Insert Horizontal Rule",
    deleted: "Deleted",
    anchor: "Anchor",
    link_new_tab: "Open link in new tab",
    underline: "Underline",
    alignment: "Alignment"
};
(function(b) {
    jQuery.fn.redactor = function(c) {
        return this.each(function() {
            var e = b(this);
            var d = e.data("redactor");
            if (!d) {
                e.data("redactor", (d = new a(this, c)))
            }
        })
    };
    var a = function(d, c) {
            this.$el = b(d);
            if (typeof c !== "undefined" && typeof c.lang !== "undefined" && c.lang !== "en" && typeof RELANG[c.lang] !== "undefined") {
                RLANG = RELANG[c.lang]
            }
            this.opts = b.extend({
                iframe: false,
                css: false,
                lang: "en",
                direction: "ltr",
                callback: false,
                keyupCallback: false,
                keydownCallback: false,
                execCommandCallback: false,
                plugins: false,
                cleanup: true,
                focus: false,
                tabindex: false,
                autoresize: true,
                minHeight: false,
                fixed: false,
                fixedTop: 0,
                fixedBox: false,
                source: true,
                shortcuts: true,
                mobile: true,
                air: false,
                wym: false,
                convertLinks: true,
                convertDivs: true,
                protocol: "http://",
                autosave: false,
                autosaveCallback: false,
                interval: 60,
                imageGetJson: false,
                imageUpload: false,
                imageUploadCallback: false,
                imageUploadErrorCallback: false,
                fileUpload: false,
                fileUploadCallback: false,
                fileUploadErrorCallback: false,
                uploadCrossDomain: false,
                uploadFields: false,
                observeImages: true,
                overlay: true,
                allowedTags: ["form", "input", "button", "select", "option", "datalist", "output", "textarea", "fieldset", "legend", "section", "header", "hgroup", "aside", "footer", "article", "details", "nav", "progress", "time", "canvas", "code", "span", "div", "label", "a", "br", "p", "b", "i", "del", "strike", "u", "img", "video", "source", "track", "audio", "iframe", "object", "embed", "param", "blockquote", "mark", "cite", "small", "ul", "ol", "li", "hr", "dl", "dt", "dd", "sup", "sub", "big", "pre", "code", "figure", "figcaption", "strong", "em", "table", "tr", "td", "th", "tbody", "thead", "tfoot", "h1", "h2", "h3", "h4", "h5", "h6"],
                toolbarExternal: false,
                buttonsCustom: {},
                buttonsAdd: [],
                buttons: ["html", "|", "formatting", "|", "bold", "italic", "deleted", "|", "unorderedlist", "orderedlist", "outdent", "indent", "|", "image", "video", "file", "table", "link", "|", "fontcolor", "backcolor", "|", "alignment", "|", "horizontalrule"],
                airButtons: ["formatting", "|", "bold", "italic", "deleted", "|", "unorderedlist", "orderedlist", "outdent", "indent", "|", "fontcolor", "backcolor"],
                formattingTags: ["p", "blockquote", "pre", "h1", "h2", "h3", "h4"],
                activeButtons: ["deleted", "italic", "bold", "underline", "unorderedlist", "orderedlist"],
                activeButtonsStates: {
                    b: "bold",
                    strong: "bold",
                    i: "italic",
                    em: "italic",
                    del: "deleted",
                    strike: "deleted",
                    ul: "unorderedlist",
                    ol: "orderedlist",
                    u: "underline"
                },
                colors: ["#ffffff", "#000000", "#eeece1", "#1f497d", "#4f81bd", "#c0504d", "#9bbb59", "#8064a2", "#4bacc6", "#f79646", "#ffff00", "#f2f2f2", "#7f7f7f", "#ddd9c3", "#c6d9f0", "#dbe5f1", "#f2dcdb", "#ebf1dd", "#e5e0ec", "#dbeef3", "#fdeada", "#fff2ca", "#d8d8d8", "#595959", "#c4bd97", "#8db3e2", "#b8cce4", "#e5b9b7", "#d7e3bc", "#ccc1d9", "#b7dde8", "#fbd5b5", "#ffe694", "#bfbfbf", "#3f3f3f", "#938953", "#548dd4", "#95b3d7", "#d99694", "#c3d69b", "#b2a2c7", "#b7dde8", "#fac08f", "#f2c314", "#a5a5a5", "#262626", "#494429", "#17365d", "#366092", "#953734", "#76923c", "#5f497a", "#92cddc", "#e36c09", "#c09100", "#7f7f7f", "#0c0c0c", "#1d1b10", "#0f243e", "#244061", "#632423", "#4f6128", "#3f3151", "#31859b", "#974806", "#7f6000"],
                emptyHtml: "<p><br /></p>",
                buffer: false,
                visual: true,
                modal_file: String() + '<div id="redactor_modal_content"><form id="redactorUploadFileForm" method="post" action="" enctype="multipart/form-data"><label>Name (optional)</label><input type="text" id="redactor_filename" class="redactor_input" /><div style="margin-top: 7px;"><input type="file" id="redactor_file" name="file" /></div></form><br></div>',
                modal_image_edit: String() + '<div id="redactor_modal_content"><label>' + RLANG.title + '</label><input id="redactor_file_alt" class="redactor_input" /><label>' + RLANG.link + '</label><input id="redactor_file_link" class="redactor_input" /><label>' + RLANG.image_position + '</label><select id="redactor_form_image_align"><option value="none">' + RLANG.none + '</option><option value="left">' + RLANG.left + '</option><option value="right">' + RLANG.right + '</option></select></div><div id="redactor_modal_footer"><a href="javascript:void(null);" id="redactor_image_delete_btn" class="redactor_modal_btn">' + RLANG._delete + '</a>&nbsp;&nbsp;&nbsp;<a href="javascript:void(null);" class="redactor_modal_btn redactor_btn_modal_close">' + RLANG.cancel + '</a><input type="button" name="save" class="redactor_modal_btn" id="redactorSaveBtn" value="' + RLANG.save + '" /></div>',
                modal_image: String() + '<div id="redactor_modal_content"><div id="redactor_tabs"><a href="javascript:void(null);" class="redactor_tabs_act">' + RLANG.upload + '</a><a href="javascript:void(null);">' + RLANG.choose + '</a><a href="javascript:void(null);">' + RLANG.link + '</a></div><form id="redactorInsertImageForm" method="post" action="" enctype="multipart/form-data"><div id="redactor_tab1" class="redactor_tab"><input type="file" id="redactor_file" name="file" /></div><div id="redactor_tab2" class="redactor_tab" style="display: none;"><div id="redactor_image_box"></div></div></form><div id="redactor_tab3" class="redactor_tab" style="display: none;"><label>' + RLANG.image_web_link + '</label><input type="text" name="redactor_file_link" id="redactor_file_link" class="redactor_input"  /></div></div><div id="redactor_modal_footer"><a href="javascript:void(null);" class="redactor_modal_btn redactor_btn_modal_close">' + RLANG.cancel + '</a><input type="button" name="upload" class="redactor_modal_btn" id="redactor_upload_btn" value="' + RLANG.insert + '" /></div>',
                modal_link: String() + '<div id="redactor_modal_content"><form id="redactorInsertLinkForm" method="post" action=""><div id="redactor_tabs"><a href="javascript:void(null);" class="redactor_tabs_act">URL</a><a href="javascript:void(null);">Email</a><a href="javascript:void(null);">' + RLANG.anchor + '</a></div><input type="hidden" id="redactor_tab_selected" value="1" /><div class="redactor_tab" id="redactor_tab1"><label>URL</label><input type="text" id="redactor_link_url" class="redactor_input"  /><label>' + RLANG.text + '</label><input type="text" class="redactor_input redactor_link_text" id="redactor_link_url_text" /><label><input type="checkbox" id="redactor_link_blank"> ' + RLANG.link_new_tab + '</label></div><div class="redactor_tab" id="redactor_tab2" style="display: none;"><label>Email</label><input type="text" id="redactor_link_mailto" class="redactor_input" /><label>' + RLANG.text + '</label><input type="text" class="redactor_input redactor_link_text" id="redactor_link_mailto_text" /></div><div class="redactor_tab" id="redactor_tab3" style="display: none;"><label>' + RLANG.anchor + '</label><input type="text" class="redactor_input" id="redactor_link_anchor"  /><label>' + RLANG.text + '</label><input type="text" class="redactor_input redactor_link_text" id="redactor_link_anchor_text" /></div></form></div><div id="redactor_modal_footer"><a href="javascript:void(null);" class="redactor_modal_btn redactor_btn_modal_close">' + RLANG.cancel + '</a><input type="button" class="redactor_modal_btn" id="redactor_insert_link_btn" value="' + RLANG.insert + '" /></div>',
                modal_table: String() + '<div id="redactor_modal_content"><label>' + RLANG.rows + '</label><input type="text" size="5" value="2" id="redactor_table_rows" /><label>' + RLANG.columns + '</label><input type="text" size="5" value="3" id="redactor_table_columns" /></div><div id="redactor_modal_footer"><a href="javascript:void(null);" class="redactor_modal_btn redactor_btn_modal_close">' + RLANG.cancel + '</a><input type="button" name="upload" class="redactor_modal_btn" id="redactor_insert_table_btn" value="' + RLANG.insert + '" /></div>',
                modal_video: String() + '<div id="redactor_modal_content"><form id="redactorInsertVideoForm"><label>' + RLANG.video_html_code + '</label><textarea id="redactor_insert_video_area" style="width: 99%; height: 160px;"></textarea></form></div><div id="redactor_modal_footer"><a href="javascript:void(null);" class="redactor_modal_btn redactor_btn_modal_close">' + RLANG.cancel + '</a><input type="button" class="redactor_modal_btn" id="redactor_insert_video_btn" value="' + RLANG.insert + '" /></div>',
                toolbar: {
                    html: {
                        title: RLANG.html,
                        func: "toggle"
                    },
                    formatting: {
                        title: RLANG.formatting,
                        func: "show",
                        dropdown: {
                            p: {
                                title: RLANG.paragraph,
                                exec: "formatblock"
                            },
                            blockquote: {
                                title: RLANG.quote,
                                exec: "formatblock",
                                className: "redactor_format_blockquote"
                            },
                            pre: {
                                title: RLANG.code,
                                exec: "formatblock",
                                className: "redactor_format_pre"
                            },
                            h1: {
                                title: RLANG.header1,
                                exec: "formatblock",
                                className: "redactor_format_h1"
                            },
                            h2: {
                                title: RLANG.header2,
                                exec: "formatblock",
                                className: "redactor_format_h2"
                            },
                            h3: {
                                title: RLANG.header3,
                                exec: "formatblock",
                                className: "redactor_format_h3"
                            },
                            h4: {
                                title: RLANG.header4,
                                exec: "formatblock",
                                className: "redactor_format_h4"
                            }
                        }
                    },
                    bold: {
                        title: RLANG.bold,
                        exec: "bold"
                    },
                    italic: {
                        title: RLANG.italic,
                        exec: "italic"
                    },
                    deleted: {
                        title: RLANG.deleted,
                        exec: "strikethrough"
                    },
                    underline: {
                        title: RLANG.underline,
                        exec: "underline"
                    },
                    unorderedlist: {
                        title: "&bull; " + RLANG.unorderedlist,
                        exec: "insertunorderedlist"
                    },
                    orderedlist: {
                        title: "1. " + RLANG.orderedlist,
                        exec: "insertorderedlist"
                    },
                    outdent: {
                        title: "< " + RLANG.outdent,
                        exec: "outdent"
                    },
                    indent: {
                        title: "> " + RLANG.indent,
                        exec: "indent"
                    },
                    image: {
                        title: RLANG.image,
                        func: "showImage"
                    },
                    video: {
                        title: RLANG.video,
                        func: "showVideo"
                    },
                    file: {
                        title: RLANG.file,
                        func: "showFile"
                    },
                    table: {
                        title: RLANG.table,
                        func: "show",
                        dropdown: {
                            insert_table: {
                                title: RLANG.insert_table,
                                func: "showTable"
                            },
                            separator_drop1: {
                                name: "separator"
                            },
                            insert_row_above: {
                                title: RLANG.insert_row_above,
                                func: "insertRowAbove"
                            },
                            insert_row_below: {
                                title: RLANG.insert_row_below,
                                func: "insertRowBelow"
                            },
                            insert_column_left: {
                                title: RLANG.insert_column_left,
                                func: "insertColumnLeft"
                            },
                            insert_column_right: {
                                title: RLANG.insert_column_right,
                                func: "insertColumnRight"
                            },
                            separator_drop2: {
                                name: "separator"
                            },
                            add_head: {
                                title: RLANG.add_head,
                                func: "addHead"
                            },
                            delete_head: {
                                title: RLANG.delete_head,
                                func: "deleteHead"
                            },
                            separator_drop3: {
                                name: "separator"
                            },
                            delete_column: {
                                title: RLANG.delete_column,
                                func: "deleteColumn"
                            },
                            delete_row: {
                                title: RLANG.delete_row,
                                func: "deleteRow"
                            },
                            delete_table: {
                                title: RLANG.delete_table,
                                func: "deleteTable"
                            }
                        }
                    },
                    link: {
                        title: RLANG.link,
                        func: "show",
                        dropdown: {
                            link: {
                                title: RLANG.link_insert,
                                func: "showLink"
                            },
                            unlink: {
                                title: RLANG.unlink,
                                exec: "unlink"
                            }
                        }
                    },
                    fontcolor: {
                        title: RLANG.fontcolor,
                        func: "show"
                    },
                    backcolor: {
                        title: RLANG.backcolor,
                        func: "show"
                    },
                    alignment: {
                        title: RLANG.alignment,
                        func: "show",
                        dropdown: {
                            alignleft: {
                                title: RLANG.align_left,
                                exec: "JustifyLeft"
                            },
                            aligncenter: {
                                title: RLANG.align_center,
                                exec: "JustifyCenter"
                            },
                            alignright: {
                                title: RLANG.align_right,
                                exec: "JustifyRight"
                            },
                            justify: {
                                title: RLANG.align_justify,
                                exec: "JustifyFull"
                            }
                        }
                    },
                    alignleft: {
                        exec: "JustifyLeft",
                        title: RLANG.align_left
                    },
                    aligncenter: {
                        exec: "JustifyCenter",
                        title: RLANG.align_center
                    },
                    alignright: {
                        exec: "JustifyRight",
                        title: RLANG.align_right
                    },
                    justify: {
                        exec: "JustifyFull",
                        title: RLANG.align_justify
                    },
                    horizontalrule: {
                        exec: "inserthorizontalrule",
                        title: RLANG.horizontalrule
                    }
                }
            }, c, this.$el.data());
            this.dropdowns = [];
            this.init()
        };
    a.prototype = {
        init: function() {
            this.height = this.$el.css("height");
            this.width = this.$el.css("width");
            rdocument = this.document = document;
            rwindow = this.window = window;
            if (this.opts.mobile === false && this.isMobile()) {
                this.build(true);
                return false
            }
            if (this.opts.iframe) {
                this.opts.autoresize = false
            }
            if (this.opts.air) {
                this.opts.buttons = this.opts.airButtons
            } else {
                if (this.opts.toolbar !== false) {
                    if (this.opts.source === false) {
                        var d = this.opts.buttons.indexOf("html");
                        var e = this.opts.buttons[d + 1];
                        this.opts.buttons.splice(d, 1);
                        if (typeof e !== "undefined" && e === "|") {
                            this.opts.buttons.splice(d, 1)
                        }
                    }
                    b.extend(this.opts.toolbar, this.opts.buttonsCustom);
                    b.each(this.opts.buttonsAdd, b.proxy(function(f, g) {
                        this.opts.buttons.push(g)
                    }, this))
                }
            }
            if (this.opts.toolbar !== false) {
                b.each(this.opts.toolbar.formatting.dropdown, b.proxy(function(f, g) {
                    if (b.inArray(f, this.opts.formattingTags) == "-1") {
                        delete this.opts.toolbar.formatting.dropdown[f]
                    }
                }, this))
            }
            function c() {
                this.enableAir();
                this.buildToolbar();
                if (typeof this.opts.plugins === "object") {
                    b.each(this.opts.plugins, b.proxy(function(j, k) {
                        if (typeof RedactorPlugins[k] !== "undefined") {
                            b.extend(this, RedactorPlugins[k]);
                            if (typeof RedactorPlugins[k].init !== "undefined") {
                                this.init()
                            }
                        }
                    }, this))
                }
                if (this.opts.activeButtons !== false && this.opts.toolbar !== false) {
                    var g = b.proxy(function() {
                        this.observeFormatting()
                    }, this);
                    this.$editor.click(g).keyup(g)
                }
                var i = false;
                if (b.browser.webkit && navigator.userAgent.indexOf("Chrome") === -1) {
                    var f = b.browser.version.split(".");
                    if (f[0] < 536) {
                        i = true
                    }
                }
                if (this.isMobile(true) === false && i === false) {
                    this.$editor.bind("paste", b.proxy(function(j) {
                        if (this.opts.cleanup === false) {
                            return true
                        }
                        this.pasteRunning = true;
                        this.setBuffer();
                        if (this.opts.autoresize === true) {
                            this.saveScroll = this.document.body.scrollTop
                        } else {
                            this.saveScroll = this.$editor.scrollTop()
                        }
                        var k = this.extractContent();
                        setTimeout(b.proxy(function() {
                            var l = this.extractContent();
                            this.$editor.append(k);
                            this.restoreSelection();
                            var m = this.getFragmentHtml(l);
                            this.pasteCleanUp(m);
                            this.pasteRunning = false
                        }, this), 1)
                    }, this))
                }
                this.keyup();
                this.keydown();
                if (this.opts.autosave !== false) {
                    this.autoSave()
                }
                this.observeImages();
                this.observeTables();
                if (b.browser.mozilla) {
                    this.$editor.click(b.proxy(function() {
                        this.saveSelection()
                    }, this));
                    try {
                        this.document.execCommand("enableObjectResizing", false, false);
                        this.document.execCommand("enableInlineTableEditing", false, false)
                    } catch (h) {}
                }
                if (this.opts.focus) {
                    setTimeout(b.proxy(function() {
                        this.$editor.focus()
                    }, this), 1)
                }
                if (this.opts.fixed) {
                    this.observeScroll();
                    b(document).scroll(b.proxy(this.observeScroll, this))
                }
                if (typeof this.opts.callback === "function") {
                    this.opts.callback(this)
                }
                if (this.opts.toolbar !== false) {
                    this.$toolbar.find("a").attr("tabindex", "-1")
                }
            }
            this.build(false, c)
        },
        shortcuts: function(d, c) {
            d.preventDefault();
            this.execCommand(c, false)
        },
        keyup: function() {
            this.$editor.keyup(b.proxy(function(d) {
                var c = d.keyCode || d.which;
                if (b.browser.mozilla && !this.pasteRunning) {
                    this.saveSelection()
                }
                if (typeof this.opts.keyupCallback === "function") {
                    this.opts.keyupCallback(this, d)
                }
                if (c === 8 || c === 46) {
                    this.observeImages();
                    return this.formatEmpty(d)
                }
                if (c === 13 && !d.shiftKey && !d.ctrlKey && !d.metaKey) {
                    if (b.browser.webkit) {
                        this.formatNewLine(d)
                    }
                    if (this.opts.convertLinks) {
                        this.$editor.linkify()
                    }
                }
                this.syncCode()
            }, this))
        },
        keydown: function() {
            this.$editor.keydown(b.proxy(function(j) {
                var d = j.keyCode || j.which;
                var f = this.getParentNode();
                var i = this.getCurrentNode();
                var h = false;
                var g = j.ctrlKey || j.metaKey;
                if ((f || i) && (b(f).get(0).tagName === "PRE" || b(i).get(0).tagName === "PRE")) {
                    h = true
                }
                if (typeof this.opts.keydownCallback === "function") {
                    this.opts.keydownCallback(this, j)
                }
                if (g && this.opts.shortcuts) {
                    if (d === 90) {
                        if (this.opts.buffer !== false) {
                            j.preventDefault();
                            this.getBuffer()
                        } else {
                            if (j.shiftKey) {
                                this.shortcuts(j, "redo")
                            } else {
                                this.shortcuts(j, "undo")
                            }
                        }
                    } else {
                        if (d === 77) {
                            this.shortcuts(j, "removeFormat")
                        } else {
                            if (d === 66) {
                                this.shortcuts(j, "bold")
                            } else {
                                if (d === 73) {
                                    this.shortcuts(j, "italic")
                                } else {
                                    if (d === 74) {
                                        this.shortcuts(j, "insertunorderedlist")
                                    } else {
                                        if (d === 75) {
                                            this.shortcuts(j, "insertorderedlist")
                                        } else {
                                            if (d === 76) {
                                                this.shortcuts(j, "superscript")
                                            } else {
                                                if (d === 72) {
                                                    this.shortcuts(j, "subscript")
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (!g && d !== 90) {
                    this.opts.buffer = false
                }
                if (h === true && d === 13) {
                    j.preventDefault();
                    var c = b(i).parent().text();
                    this.insertNodeAtCaret(this.document.createTextNode("\r\n"));
                    if (c.search(/\s$/) == -1) {
                        this.insertNodeAtCaret(this.document.createTextNode("\r\n"))
                    }
                    this.syncCode();
                    return false
                }
                if (this.opts.shortcuts && !j.shiftKey && d === 9) {
                    if (h === false) {
                        this.shortcuts(j, "indent")
                    } else {
                        j.preventDefault();
                        this.insertNodeAtCaret(this.document.createTextNode("\t"));
                        this.syncCode();
                        return false
                    }
                } else {
                    if (this.opts.shortcuts && j.shiftKey && d === 9) {
                        this.shortcuts(j, "outdent")
                    }
                }
                if (b.browser.webkit && navigator.userAgent.indexOf("Chrome") === -1) {
                    return this.safariShiftKeyEnter(j, d)
                }
            }, this))
        },
        build: function(e, i) {
            if (e !== true) {
                this.$box = b('<div class="redactor_box"></div>');
                if (this.opts.air) {
                    this.air = b('<div class="redactor_air" style="display: none;"></div>')
                }
                this.$content = null;

                function h() {
                    this.$editor = this.$content.contents().find("body").attr("contenteditable", true).attr("dir", this.opts.direction);
                    rdocument = this.document = this.$editor[0].ownerDocument;
                    rwindow = this.window = this.document.defaultView || window;
                    if (this.opts.css !== false) {
                        this.$content.contents().find("head").append('<link rel="stylesheet" href="' + this.opts.css + '" />')
                    }
                    this.$editor.html(f);
                    if (i) {
                        i.call(this);
                        i = null
                    }
                }
                this.textareamode = true;
                if (this.$el.get(0).tagName === "TEXTAREA") {
                    if (this.opts.iframe) {
                        var g = this;
                        this.$content = b('<iframe style="width: 100%;" frameborder="0"></iframe>').load(function() {
                            h.call(g)
                        })
                    } else {
                        this.$content = this.$editor = b("<div></div>")
                    }
                    var d = this.$el.get(0).className.split(/\s+/);
                    b.each(d, b.proxy(function(j, k) {
                        this.$content.addClass("redactor_" + k)
                    }, this))
                } else {
                    this.textareamode = false;
                    this.$content = this.$editor = this.$el;
                    this.$el = b('<textarea name="' + this.$editor.attr("id") + '"></textarea>').css("height", this.height)
                }
                if (this.$editor) {
                    this.$editor.addClass("redactor_editor").attr("contenteditable", true).attr("dir", this.opts.direction)
                }
                if (this.opts.tabindex !== false) {
                    this.$content.attr("tabindex", this.opts.tabindex)
                }
                if (this.opts.minHeight !== false) {
                    this.$content.css("min-height", this.opts.minHeight + "px")
                }
                if (this.opts.wym === true) {
                    this.$content.addClass("redactor_editor_wym")
                }
                if (this.opts.autoresize === false) {
                    this.$content.css("height", this.height)
                }
                this.$el.hide();
                var f = "";
                if (this.textareamode) {
                    f = this.$el.val();
                    f = this.savePreCode(f);
                    this.$box.insertAfter(this.$el).append(this.$content).append(this.$el)
                } else {
                    f = this.$editor.html();
                    f = this.savePreCode(f);
                    this.$box.insertAfter(this.$content).append(this.$el).append(this.$editor)
                }
                f = this.paragraphy(f);
                if (this.$editor) {
                    this.$editor.html(f)
                }
                if (this.textareamode === false) {
                    this.syncCode()
                }
            } else {
                if (this.$el.get(0).tagName !== "TEXTAREA") {
                    var f = this.$el.val();
                    var c = b('<textarea name="' + this.$editor.attr("id") + '"></textarea>').css("height", this.height).val(f);
                    this.$el.hide();
                    this.$el.after(c)
                }
            }
            if (i && this.$editor) {
                i.call(this)
            }
        },
        enableAir: function() {
            if (this.opts.air === false) {
                return false
            }
            this.air.hide();
            this.$editor.bind("textselect", b.proxy(function(c) {
                this.showAir(c)
            }, this));
            this.$editor.bind("textunselect", b.proxy(function() {
                this.air.hide()
            }, this))
        },
        showAir: function(g) {
            b(".redactor_air").hide();
            var c = this.air.innerWidth();
            var f = g.clientX;
            if (b(this.document).width() < (f + c)) {
                f = f - c
            }
            var d = g.clientY + b(document).scrollTop() + 14;
            if (this.opts.iframe === true) {
                d = d + this.$box.position().top;
                f = f + this.$box.position().left
            }
            this.air.css({
                left: f + "px",
                top: d + "px"
            }).show()
        },
        syncCode: function() {
            this.$el.val(this.$editor.html())
        },
        setCode: function(c) {
            c = this.stripTags(c);
            this.$editor.html(c);//.focus();
            this.syncCode()
        },
        getCode: function() {
            var c = "";
            if (this.opts.visual) {
                c = this.$editor.html()
            } else {
                c = this.$el.val()
            }
            return this.stripTags(c)
        },
        insertHtml: function(c) {
            this.$editor.focus();
            this.pasteHtmlAtCaret(c);
            this.observeImages();
            this.syncCode()
        },
        pasteHtmlAtCaret: function(d) {
            var h, c;
            if (this.document.getSelection) {
                h = this.window.getSelection();
                if (h.getRangeAt && h.rangeCount) {
                    c = h.getRangeAt(0);
                    c.deleteContents();
                    var e = this.document.createElement("div");
                    e.innerHTML = d;
                    var i = this.document.createDocumentFragment(),
                        g, f;
                    while (g = e.firstChild) {
                        f = i.appendChild(g)
                    }
                    c.insertNode(i);
                    if (f) {
                        c = c.cloneRange();
                        c.setStartAfter(f);
                        c.collapse(true);
                        h.removeAllRanges();
                        h.addRange(c)
                    }
                }
            } else {
                if (this.document.selection && this.document.selection.type != "Control") {
                    this.document.selection.createRange().pasteHTML(d)
                }
            }
        },
        destroy: function() {
            var d = this.getCode();
            if (this.textareamode) {
                this.$box.after(this.$el);
                this.$box.remove();
                this.$el.height(this.height).val(d).show()
            } else {
                this.$box.after(this.$editor);
                this.$box.remove();
                this.$editor.removeClass("redactor_editor").removeClass("redactor_editor_wym").attr("contenteditable", false).html(d).show()
            }
            if (this.opts.toolbarExternal) {
                b(this.opts.toolbarExternal).empty()
            }
            b(".redactor_air").remove();
            for (var c = 0; c < this.dropdowns.length; c++) {
                this.dropdowns[c].remove();
                delete(this.dropdowns[c])
            }
            if (this.opts.autosave !== false) {
                clearInterval(this.autosaveInterval)
            }
        },
        observeFormatting: function() {
            var d = this.getCurrentNode();
            this.inactiveAllButtons();
            b.each(this.opts.activeButtonsStates, b.proxy(function(f, g) {
                if (b(d).closest(f, this.$editor.get()[0]).length != 0) {
                    this.setBtnActive(g)
                }
            }, this));
            var c = b(d).closest(["p", "div", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "td"]);
            if (typeof c[0] !== "undefined" && typeof c[0].elem !== "undefined" && b(c[0].elem).size() != 0) {
                var e = b(c[0].elem).css("text-align");
                switch (e) {
                case "right":
                    this.setBtnActive("alignright");
                    break;
                case "center":
                    this.setBtnActive("aligncenter");
                    break;
                case "justify":
                    this.setBtnActive("justify");
                    break;
                default:
                    this.setBtnActive("alignleft");
                    break
                }
            }
        },
        observeImages: function() {
            if (this.opts.observeImages === false) {
                return false
            }
            this.$editor.find("img").each(b.proxy(function(c, d) {
                if (b.browser.msie) {
                    b(d).attr("unselectable", "on")
                }
                this.resizeImage(d)
            }, this))
        },
        observeTables: function() {
            this.$editor.find("table").click(b.proxy(this.tableObserver, this))
        },
        observeScroll: function() {
            var c = b(this.document).scrollTop();
            var f = this.$box.offset().top;
            var e = 0;
            if (c > f) {
                var d = "100%";
                if (this.opts.fixedBox) {
                    e = this.$box.offset().left;
                    d = this.$box.innerWidth()
                }
                this.fixed = true;
                this.$toolbar.css({
                    position: "fixed",
                    width: d,
                    zIndex: 1005,
                    top: this.opts.fixedTop + "px",
                    left: e
                })
            } else {
                this.fixed = false;
                this.$toolbar.css({
                    position: "relative",
                    width: "auto",
                    zIndex: 1,
                    top: 0,
                    left: e
                })
            }
        },
        setBuffer: function() {
            this.saveSelection();
            this.opts.buffer = this.$editor.html()
        },
        getBuffer: function() {
            if (this.opts.buffer === false) {
                return false
            }
            this.$editor.html(this.opts.buffer);
            if (!b.browser.msie) {
                this.restoreSelection()
            }
            this.opts.buffer = false
        },
        execCommand: function(d, c) {
            if (this.opts.visual == false) {
                this.$el.focus();
                return false
            }
            try {
                var k;
                if (d === "inserthtml") {
                    if (b.browser.msie) {
                        this.$editor.focus();
                        this.document.selection.createRange().pasteHTML(c)
                    } else {
                        this.pasteHtmlAtCaret(c)
                    }
                    this.observeImages()
                } else {
                    if (d === "unlink") {
                        k = this.getParentNode();
                        if (b(k).get(0).tagName === "A") {
                            b(k).replaceWith(b(k).text())
                        } else {
                            this.execRun(d, c)
                        }
                    } else {
                        if (d === "JustifyLeft" || d === "JustifyCenter" || d === "JustifyRight" || d === "JustifyFull") {
                            k = this.getCurrentNode();
                            var l = b(k).get(0).tagName;
                            if (this.opts.iframe === false && b(k).parents(".redactor_editor").size() == 0) {
                                return false
                            }
                            var g = ["P", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "BLOCKQUOTE", "TD"];
                            if (b.inArray(l, g) != -1) {
                                var i = false;
                                if (d === "JustifyCenter") {
                                    i = "center"
                                } else {
                                    if (d === "JustifyRight") {
                                        i = "right"
                                    } else {
                                        if (d === "JustifyFull") {
                                            i = "justify"
                                        }
                                    }
                                }
                                if (i === false) {
                                    b(k).css("text-align", "")
                                } else {
                                    b(k).css("text-align", i)
                                }
                            } else {
                                this.execRun(d, c)
                            }
                        } else {
                            if (d === "formatblock" && c === "blockquote") {
                                k = this.getCurrentNode();
                                if (b(k).get(0).tagName === "BLOCKQUOTE") {
                                    if (b.browser.msie) {
                                        var f = b("<p>" + b(k).html() + "</p>");
                                        b(k).replaceWith(f)
                                    } else {
                                        this.execRun(d, "p")
                                    }
                                } else {
                                    if (b(k).get(0).tagName === "P") {
                                        var j = b(k).parent();
                                        if (b(j).get(0).tagName === "BLOCKQUOTE") {
                                            var f = b("<p>" + b(k).html() + "</p>");
                                            b(j).replaceWith(f);
                                            this.setSelection(f[0], 0, f[0], 0)
                                        } else {
                                            if (b.browser.msie) {
                                                var f = b("<blockquote>" + b(k).html() + "</blockquote>");
                                                b(k).replaceWith(f)
                                            } else {
                                                this.execRun(d, c)
                                            }
                                        }
                                    } else {
                                        this.execRun(d, c)
                                    }
                                }
                            } else {
                                if (d === "formatblock" && (c === "pre" || c === "p")) {
                                    k = this.getParentNode();
                                    if (b(k).get(0).tagName === "PRE") {
                                        b(k).replaceWith("<p>" + this.encodeEntities(b(k).text()) + "</p>")
                                    } else {
                                        this.execRun(d, c)
                                    }
                                } else {
                                    if (d === "inserthorizontalrule" && b.browser.msie) {
                                        this.$editor.focus()
                                    }
                                    if (d === "formatblock" && b.browser.mozilla) {
                                        this.$editor.focus()
                                    }
                                    this.execRun(d, c)
                                }
                            }
                        }
                    }
                }
                if (d === "inserthorizontalrule") {
                    this.$editor.find("hr").removeAttr("id")
                }
                this.syncCode();
                if (this.oldIE()) {
                    this.$editor.focus()
                }
                if (typeof this.opts.execCommandCallback === "function") {
                    this.opts.execCommandCallback(this, d)
                }
                if (this.opts.air) {
                    this.air.hide()
                }
            } catch (h) {}
        },
        execRun: function(c, d) {
            if (c === "formatblock" && b.browser.msie) {
                d = "<" + d + ">"
            }
            this.document.execCommand(c, false, d)
        },
        formatNewLine: function(f) {
            var d = this.getParentNode();
            if (d.nodeName === "DIV" && d.className === "redactor_editor") {
                var c = b(this.getCurrentNode());
                if (c.get(0).tagName === "DIV" && (c.html() === "" || c.html() === "<br>")) {
                    var g = b("<p>").append(c.clone().get(0).childNodes);
                    c.replaceWith(g);
                    g.html("<br />");
                    this.setSelection(g[0], 0, g[0], 0)
                }
            }
        },
        safariShiftKeyEnter: function(d, c) {
            if (d.shiftKey && c === 13) {
                d.preventDefault();
                this.insertNodeAtCaret(b("<span><br /></span>").get(0));
                this.syncCode();
                return false
            } else {
                return true
            }
        },
        formatEmpty: function(g) {
            var c = b.trim(this.$editor.html());
            if (b.browser.mozilla) {
                c = c.replace(/<br>/i, "")
            }
            var f = c.replace(/<(?:.|\n)*?>/gm, "");
            if (c === "" || f === "") {
                g.preventDefault();
                var d = b(this.opts.emptyHtml).get(0);
                this.$editor.html(d);
                this.setSelection(d, 0, d, 0);
                this.syncCode();
                return false
            } else {
                this.syncCode()
            }
        },
        paragraphy: function(e) {
            e = b.trim(e);
            if (e === "" || e === "<p></p>") {
                return this.opts.emptyHtml
            }
            if (this.opts.convertDivs) {
                e = e.replace(/<div(.*?)>([\w\W]*?)<\/div>/gi, "<p>$2</p>")
            }
            var f = function(h, i, g) {
                    return h.replace(new RegExp(i, "g"), g)
                };
            var c = function(h, g) {
                    return f(e, h, g)
                };
            var d = "(table|thead|tfoot|caption|colgroup|tbody|tr|td|th|div|dl|dd|dt|ul|ol|li|pre|select|form|blockquote|address|math|style|script|object|input|param|p|h[1-6])";
            e += "\n";
            c("<br />\\s*<br />", "\n\n");
            c("(<" + d + "[^>]*>)", "\n$1");
            c("(</" + d + ">)", "$1\n\n");
            c("\r\n|\r", "\n");
            c("\n\n+", "\n\n");
            c("\n?((.|\n)+?)$", "<p>$1</p>\n");
            c("<p>\\s*?</p>", "");
            c("<p>(<div[^>]*>\\s*)", "$1<p>");
            c("<p>([^<]+)\\s*?(</(div|address|form)[^>]*>)", "<p>$1</p>$2");
            c("<p>\\s*(</?" + d + "[^>]*>)\\s*</p>", "$1");
            c("<p>(<li.+?)</p>", "$1");
            c("<p>\\s*(</?" + d + "[^>]*>)", "$1");
            c("(</?" + d + "[^>]*>)\\s*</p>", "$1");
            c("(</?" + d + "[^>]*>)\\s*<br />", "$1");
            c("<br />(\\s*</?(p|li|div|dl|dd|dt|th|pre|td|ul|ol)[^>]*>)", "$1");
            if (e.indexOf("<pre") != -1) {
                c("(<pre(.|\n)*?>)((.|\n)*?)</pre>", function(j, i, h, g) {
                    return f(i, "\\\\(['\"\\\\])", "$1") + f(f(f(g, "<p>", "\n"), "</p>|<br />", ""), "\\\\(['\"\\\\])", "$1") + "</pre>"
                })
            }
            return c("\n</p>$", "</p>")
        },
        stripTags: function(d) {
            var e = this.opts.allowedTags;
            var c = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
            return d.replace(c, function(g, f) {
                return b.inArray(f.toLowerCase(), e) > "-1" ? g : ""
            })
        },
        savePreCode: function(c) {
            var d = c.match(/<pre(.*?)>([\w\W]*?)<\/pre>/gi);
            if (d !== null) {
                b.each(d, b.proxy(function(f, g) {
                    var e = g.match(/<pre(.*?)>([\w\W]*?)<\/pre>/i);
                    e[2] = this.encodeEntities(e[2]);
                    c = c.replace(g, "<pre" + e[1] + ">" + e[2] + "</pre>")
                }, this))
            }
            return c
        },
        encodeEntities: function(c) {
            c = String(c).replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"');
            return String(c).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        },
        cleanupPre: function(d) {
            d = d.replace(/<br>/gi, "\n");
            d = d.replace(/<\/p>/gi, "\n");
            d = d.replace(/<\/div>/gi, "\n");
            var c = this.document.createElement("div");
            c.innerHTML = d;
            return c.textContent || c.innerText
        },
        pasteCleanUp: function(c) {
            var d = this.getParentNode();
            if (b(d).get(0).tagName === "PRE") {
                c = this.cleanupPre(c);
                this.pasteCleanUpInsert(c);
                return true
            }
            c = c.replace(/<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi, "");
            c = c.replace(/(&nbsp;){2,}/gi, "&nbsp;");
            c = c.replace(/<b\sid="internal-source-marker(.*?)">([\w\W]*?)<\/b>/gi, "$2");
            c = this.stripTags(c);
            c = c.replace(/<td><\/td>/gi, "[td]");
            c = c.replace(/<td>&nbsp;<\/td>/gi, "[td]");
            c = c.replace(/<td><br><\/td>/gi, "[td]");
            c = c.replace(/<a(.*?)href="(.*?)"(.*?)>([\w\W]*?)<\/a>/gi, '[a href="$2"]$4[/a]');
            c = c.replace(/<iframe(.*?)>([\w\W]*?)<\/iframe>/gi, "[iframe$1]$2[/iframe]");
            c = c.replace(/<video(.*?)>([\w\W]*?)<\/video>/gi, "[video$1]$2[/video]");
            c = c.replace(/<audio(.*?)>([\w\W]*?)<\/audio>/gi, "[audio$1]$2[/audio]");
            c = c.replace(/<embed(.*?)>([\w\W]*?)<\/embed>/gi, "[embed$1]$2[/embed]");
            c = c.replace(/<object(.*?)>([\w\W]*?)<\/object>/gi, "[object$1]$2[/object]");
            c = c.replace(/<param(.*?)>/gi, "[param$1]");
            c = c.replace(/<img(.*?)style="(.*?)"(.*?)>/gi, "[img$1$3]");
            c = c.replace(/<(\w+)([\w\W]*?)>/gi, "<$1>");
            c = c.replace(/<[^\/>][^>]*>(\s*|\t*|\n*|&nbsp;|<br>)<\/[^>]+>/gi, "");
            c = c.replace(/<[^\/>][^>]*>(\s*|\t*|\n*|&nbsp;|<br>)<\/[^>]+>/gi, "");
            c = c.replace(/\[td\]/gi, "<td>&nbsp;</td>");
            c = c.replace(/\[a href="(.*?)"\]([\w\W]*?)\[\/a\]/gi, '<a href="$1">$2</a>');
            c = c.replace(/\[iframe(.*?)\]([\w\W]*?)\[\/iframe\]/gi, "<iframe$1>$2</iframe>");
            c = c.replace(/\[video(.*?)\]([\w\W]*?)\[\/video\]/gi, "<video$1>$2</video>");
            c = c.replace(/\[audio(.*?)\]([\w\W]*?)\[\/audio\]/gi, "<audio$1>$2</audio>");
            c = c.replace(/\[embed(.*?)\]([\w\W]*?)\[\/embed\]/gi, "<embed$1>$2</embed>");
            c = c.replace(/\[object(.*?)\]([\w\W]*?)\[\/object\]/gi, "<object$1>$2</object>");
            c = c.replace(/\[param(.*?)\]/gi, "<param$1>");
            c = c.replace(/\[img(.*?)\]/gi, "<img$1>");
            if (this.opts.convertDivs) {
                c = c.replace(/<div(.*?)>([\w\W]*?)<\/div>/gi, "<p>$2</p>")
            }
            c = c.replace(/<span>([\w\W]*?)<\/span>/gi, "$1");
            c = c.replace(/\n{3,}/gi, "\n");
            c = c.replace(/<p><p>/gi, "<p>");
            c = c.replace(/<\/p><\/p>/gi, "</p>");
            if (b.browser.mozilla) {
                c = c.replace(/<br>$/gi, "")
            }
            this.pasteCleanUpInsert(c)
        },
        pasteCleanUpInsert: function(c) {
            this.execCommand("inserthtml", c);
            if (this.opts.autoresize === true) {
                b(this.document.body).scrollTop(this.saveScroll)
            } else {
                this.$editor.scrollTop(this.saveScroll)
            }
        },
        formattingRemove: function(d) {
            var c = [];
            var e = d.match(/<pre(.*?)>([\w\W]*?)<\/pre>/gi);
            if (e !== null) {
                b.each(e, function(f, g) {
                    d = d.replace(g, "prebuffer_" + f);
                    c.push(g)
                })
            }
            d = d.replace(/\s{2,}/g, " ");
            d = d.replace(/\n/g, " ");
            d = d.replace(/[\t]*/g, "");
            d = d.replace(/\n\s*\n/g, "\n");
            d = d.replace(/^[\s\n]*/g, "");
            d = d.replace(/[\s\n]*$/g, "");
            d = d.replace(/>\s+</g, "><");
            if (c) {
                b.each(c, function(f, g) {
                    d = d.replace("prebuffer_" + f, g)
                });
                c = []
            }
            return d
        },
        formattingIndenting: function(c) {
            c = c.replace(/<li/g, "\t<li");
            c = c.replace(/<tr/g, "\t<tr");
            c = c.replace(/<td/g, "\t\t<td");
            c = c.replace(/<\/tr>/g, "\t</tr>");
            return c
        },
        formattingEmptyTags: function(f) {
            var e = ["<pre></pre>", "<blockquote>\\s*</blockquote>", "<em>\\s*</em>", "<ul></ul>", "<ol></ol>", "<li></li>", "<table></table>", "<tr></tr>", "<span>\\s*<span>", "<span>&nbsp;<span>", "<b>\\s*</b>", "<b>&nbsp;</b>", "<p>\\s*</p>", "<p>&nbsp;</p>", "<p>\\s*<br>\\s*</p>", "<div>\\s*</div>", "<div>\\s*<br>\\s*</div>"];
            for (var d = 0; d < e.length; ++d) {
                var c = e[d];
                f = f.replace(new RegExp(c, "gi"), "")
            }
            return f
        },
        formattingAddBefore: function(e) {
            var f = "\r\n";
            var g = ["<p", "<form", "</ul>", "</ol>", "<fieldset", "<legend", "<object", "<embed", "<select", "<option", "<input", "<textarea", "<pre", "<blockquote", "<ul", "<ol", "<li", "<dl", "<dt", "<dd", "<table", "<thead", "<tbody", "<caption", "</caption>", "<th", "<tr", "<td", "<figure"];
            for (var d = 0; d < g.length; ++d) {
                var c = g[d];
                e = e.replace(new RegExp(c, "gi"), f + c)
            }
            return e
        },
        formattingAddAfter: function(e) {
            var g = "\r\n";
            var c = ["</p>", "</div>", "</h1>", "</h2>", "</h3>", "</h4>", "</h5>", "</h6>", "<br>", "<br />", "</dl>", "</dt>", "</dd>", "</form>", "</blockquote>", "</pre>", "</legend>", "</fieldset>", "</object>", "</embed>", "</textarea>", "</select>", "</option>", "</table>", "</thead>", "</tbody>", "</tr>", "</td>", "</th>", "</figure>"];
            for (var d = 0; d < c.length; ++d) {
                var f = c[d];
                e = e.replace(new RegExp(f, "gi"), f + g)
            }
            return e
        },
        formatting: function(c) {
            c = this.formattingRemove(c);
            c = this.formattingEmptyTags(c);
            c = this.formattingAddBefore(c);
            c = this.formattingAddAfter(c);
            c = this.formattingIndenting(c);
            return c
        },
        toggle: function() {
            var d;
            if (this.opts.visual) {
                var c = this.$editor.innerHeight();
                this.$editor.hide();
                this.$content.hide();
                d = this.$editor.html();
                this.$el.height(c).val(d).show().focus();
                this.setBtnActive("html");
                this.opts.visual = false
            } else {
                this.$el.hide();
                var d = this.$el.val();
                this.$editor.html(d).show();
                this.$content.show();
                if (this.$editor.html() === "") {
                    this.setCode(this.opts.emptyHtml)
                }
                this.$editor.focus();
                this.setBtnInactive("html");
                this.opts.visual = true;
                this.observeImages();
                this.observeTables()
            }
        },
        autoSave: function() {
            this.autosaveInterval = setInterval(b.proxy(function() {
                b.ajax({
                    url: this.opts.autosave,
                    type: "post",
                    data: this.$el.attr("name") + "=" + escape(encodeURIComponent(this.getCode())),
                    success: b.proxy(function(c) {
                        if (typeof this.opts.autosaveCallback === "function") {
                            this.opts.autosaveCallback(c, this)
                        }
                    }, this)
                })
            }, this), this.opts.interval * 1000)
        },
        buildToolbar: function() {
            if (this.opts.toolbar === false) {
                return false
            }
            this.$toolbar = b("<ul>").addClass("redactor_toolbar");
            if (this.opts.air) {
                b(this.air).append(this.$toolbar);
                b("body").append(this.air)
            } else {
                if (this.opts.toolbarExternal === false) {
                    this.$box.prepend(this.$toolbar)
                } else {
                    b(this.opts.toolbarExternal).html(this.$toolbar)
                }
            }
            b.each(this.opts.buttons, b.proxy(function(d, c) {
                if (c !== "|" && typeof this.opts.toolbar[c] !== "undefined") {
                    var e = this.opts.toolbar[c];
                    if (this.opts.fileUpload === false && c === "file") {
                        return true
                    }
                    this.$toolbar.append(b("<li>").append(this.buildButton(c, e)))
                }
                if (c === "|") {
                    this.$toolbar.append(b('<li class="redactor_separator"></li>'))
                }
            }, this))
        },
        buildButton: function(d, e) {
            var c = b('<a href="javascript:void(null);" title="' + e.title + '" class="redactor_btn_' + d + '"></a>');
            if (typeof e.func === "undefined") {
                c.click(b.proxy(function() {
                    if (b.inArray(d, this.opts.activeButtons) != -1) {
                        this.inactiveAllButtons();
                        this.setBtnActive(d)
                    }
                    if (b.browser.mozilla) {
                        this.$editor.focus()
                    }
                    this.execCommand(e.exec, d)
                }, this))
            } else {
                if (e.func !== "show") {
                    c.click(b.proxy(function(g) {
                        this[e.func](g)
                    }, this))
                }
            }
            if (typeof e.callback !== "undefined" && e.callback !== false) {
                c.click(b.proxy(function(g) {
                    e.callback(this, g, d)
                }, this))
            }
            if (d === "backcolor" || d === "fontcolor" || typeof(e.dropdown) !== "undefined") {
                var f = b('<div class="redactor_dropdown" style="display: none;">');
                if (d === "backcolor" || d === "fontcolor") {
                    f = this.buildColorPicker(f, d)
                } else {
                    f = this.buildDropdown(f, e.dropdown)
                }
                this.dropdowns.push(f.appendTo(b(document.body)));
                this.hdlShowDropDown = b.proxy(function(g) {
                    this.showDropDown(g, f, d)
                }, this);
                c.click(this.hdlShowDropDown)
            }
            return c
        },
        buildDropdown: function(d, c) {
            b.each(c, b.proxy(function(e, g) {
                if (typeof(g.className) === "undefined") {
                    g.className = ""
                }
                var f;
                if (typeof g.name !== "undefined" && g.name === "separator") {
                    f = b('<a class="redactor_separator_drop">')
                } else {
                    f = b('<a href="javascript:void(null);" class="' + g.className + '">' + g.title + "</a>");
                    if (typeof(g.callback) === "function") {
                        b(f).click(b.proxy(function(h) {
                            g.callback(this, h, e)
                        }, this))
                    } else {
                        if (typeof(g.func) === "undefined") {
                            b(f).click(b.proxy(function() {
                                this.execCommand(g.exec, e)
                            }, this))
                        } else {
                            b(f).click(b.proxy(function(h) {
                                this[g.func](h)
                            }, this))
                        }
                    }
                }
                b(d).append(f)
            }, this));
            return d
        },
        buildColorPicker: function(l, k) {
            var f;
            if (k === "backcolor") {
                if (b.browser.msie) {
                    f = "BackColor"
                } else {
                    f = "hilitecolor"
                }
            } else {
                f = "forecolor"
            }
            b(l).width(210);
            var g = this.opts.colors.length;
            for (var e = 0; e < g; ++e) {
                var c = this.opts.colors[e];
                var j = b('<a rel="' + c + '" href="javascript:void(null);" class="redactor_color_link"></a>').css({
                    backgroundColor: c
                });
                b(l).append(j);
                var h = this;
                b(j).click(function() {
                    h.execCommand(f, b(this).attr("rel"));
                    if (f === "forecolor") {
                        h.$editor.find("font").replaceWith(function() {
                            return b('<span style="color: ' + b(this).attr("color") + ';">' + b(this).html() + "</span>")
                        })
                    }
                    if (b.browser.msie && f === "BackColor") {
                        h.$editor.find("font").replaceWith(function() {
                            return b('<span style="' + b(this).attr("style") + '">' + b(this).html() + "</span>")
                        })
                    }
                })
            }
            var d = b('<a href="javascript:void(null);" class="redactor_color_none"></a>').html(RLANG.none);
            if (k === "backcolor") {
                d.click(b.proxy(this.setBackgroundNone, this))
            } else {
                d.click(b.proxy(this.setColorNone, this))
            }
            b(l).append(d);
            return l
        },
        setBackgroundNone: function() {
            b(this.getParentNode()).css("background-color", "transparent");
            this.syncCode()
        },
        setColorNone: function() {
            b(this.getParentNode()).attr("color", "").css("color", "");
            this.syncCode()
        },
        showDropDown: function(i, j, d) {
            if (this.getBtn(d).hasClass("dropact")) {
                this.hideAllDropDown()
            } else {
                this.hideAllDropDown();
                this.setBtnActive(d);
                this.getBtn(d).addClass("dropact");
                var h = this.getBtn(d).offset().left;
                if (this.opts.air) {
                    var f = this.air.offset().top;
                    b(j).css({
                        position: "absolute",
                        left: h + "px",
                        top: f + 30 + "px"
                    }).show()
                } else {
                    if (this.opts.fixed && this.fixed) {
                        b(j).css({
                            position: "fixed",
                            left: h + "px",
                            top: "30px"
                        }).show()
                    } else {
                        var g = this.$toolbar.offset().top + 30;
                        b(j).css({
                            position: "absolute",
                            left: h + "px",
                            top: g + "px"
                        }).show()
                    }
                }
            }
            var c = b.proxy(function(k) {
                this.hideDropDown(k, j, d)
            }, this);
            b(document).one("click", c);
            this.$editor.one("click", c);
            this.$content.one("click", c);
            i.stopPropagation()
        },
        hideAllDropDown: function() {
            this.$toolbar.find("a.dropact").removeClass("redactor_act").removeClass("dropact");
            b(".redactor_dropdown").hide()
        },
        hideDropDown: function(d, f, c) {
            if (!b(d.target).hasClass("dropact")) {
                b(f).removeClass("dropact");
                this.showedDropDown = false;
                this.hideAllDropDown()
            }
        },
        getBtn: function(c) {
            if (this.opts.toolbar === false) {
                return false
            }
            return b(this.$toolbar.find("a.redactor_btn_" + c))
        },
        setBtnActive: function(c) {
            this.getBtn(c).addClass("redactor_act")
        },
        setBtnInactive: function(c) {
            this.getBtn(c).removeClass("redactor_act")
        },
        inactiveAllButtons: function() {
            b.each(this.opts.activeButtons, b.proxy(function(c, d) {
                this.setBtnInactive(d)
            }, this))
        },
        changeBtnIcon: function(c, d) {
            this.getBtn(c).addClass("redactor_btn_" + d)
        },
        removeBtnIcon: function(c, d) {
            this.getBtn(c).removeClass("redactor_btn_" + d)
        },
        addBtnSeparator: function() {
            this.$toolbar.append(b('<li class="redactor_separator"></li>'))
        },
        addBtnSeparatorAfter: function(c) {
            var d = this.getBtn(c);
            d.parent().after(b('<li class="redactor_separator"></li>'))
        },
        addBtnSeparatorBefore: function(c) {
            var d = this.getBtn(c);
            d.parent().before(b('<li class="redactor_separator"></li>'))
        },
        removeBtnSeparatorAfter: function(c) {
            var d = this.getBtn(c);
            d.parent().next().remove()
        },
        removeBtnSeparatorBefore: function(c) {
            var d = this.getBtn(c);
            d.parent().prev().remove()
        },
        setBtnRight: function(c) {
            if (this.opts.toolbar === false) {
                return false
            }
            this.getBtn(c).parent().addClass("redactor_btn_right")
        },
        setBtnLeft: function(c) {
            if (this.opts.toolbar === false) {
                return false
            }
            this.getBtn(c).parent().removeClass("redactor_btn_right")
        },
        addBtn: function(d, e, g, f) {
            if (this.opts.toolbar === false) {
                return false
            }
            var c = this.buildButton(d, {
                title: e,
                callback: g,
                dropdown: f
            });
            this.$toolbar.append(b("<li>").append(c))
        },
        addBtnFirst: function(d, e, g, f) {
            if (this.opts.toolbar === false) {
                return false
            }
            var c = this.buildButton(d, {
                title: e,
                callback: g,
                dropdown: f
            });
            this.$toolbar.prepend(b("<li>").append(c))
        },
        addBtnAfter: function(i, d, f, h, g) {
            if (this.opts.toolbar === false) {
                return false
            }
            var c = this.buildButton(d, {
                title: f,
                callback: h,
                dropdown: g
            });
            var e = this.getBtn(i);
            e.parent().after(b("<li>").append(c))
        },
        addBtnBefore: function(g, d, f, i, h) {
            if (this.opts.toolbar === false) {
                return false
            }
            var c = this.buildButton(d, {
                title: f,
                callback: i,
                dropdown: h
            });
            var e = this.getBtn(g);
            e.parent().before(b("<li>").append(c))
        },
        removeBtn: function(c, e) {
            var d = this.getBtn(c);
            if (e === true) {
                d.parent().next().remove()
            }
            d.parent().removeClass("redactor_btn_right");
            d.remove()
        },
        getFragmentHtml: function(d) {
            var c = d.cloneNode(true);
            var e = this.document.createElement("div");
            e.appendChild(c);
            return e.innerHTML
        },
        extractContent: function() {
            var c = this.$editor.get(0);
            var e = this.document.createDocumentFragment(),
                d;
            while ((d = c.firstChild)) {
                e.appendChild(d)
            }
            return e
        },
        saveSelection: function() {
            this.$editor.focus();
            this.savedSel = this.getOrigin();
            this.savedSelObj = this.getFocus()
        },
        restoreSelection: function() {
            if (typeof this.savedSel !== "undefined" && this.savedSel !== null && this.savedSelObj !== null && this.savedSel[0].tagName !== "BODY") {
                if (this.opts.iframe === false && b(this.savedSel[0]).closest(".redactor_editor").size() == 0) {
                    this.$editor.focus()
                } else {
                    if (b.browser.opera) {
                        this.$editor.focus()
                    }
                    this.setSelection(this.savedSel[0], this.savedSel[1], this.savedSelObj[0], this.savedSelObj[1]);
                    if (b.browser.mozilla) {
                        this.$editor.focus()
                    }
                }
            } else {
                this.$editor.focus()
            }
        },
        getSelection: function() {
            var c = this.document;
            if (this.window.getSelection) {
                return this.window.getSelection()
            } else {
                if (c.getSelection) {
                    return c.getSelection()
                } else {
                    return c.selection.createRange()
                }
            }
            return false
        },
        hasSelection: function() {
            if (!this.oldIE()) {
                var e;
                return (e = this.getSelection()) && (e.focusNode != null) && (e.anchorNode != null)
            } else {
                var d = this.$editor.get(0);
                var c;
                d.focus();
                if (!d.document.selection) {
                    return false
                }
                c = d.document.selection.createRange();
                return c && c.parentElement().document === d.document
            }
        },
        getOrigin: function() {
            if (!this.oldIE()) {
                var e;
                if (!((e = this.getSelection()) && (e.anchorNode != null))) {
                    return null
                }
                return [e.anchorNode, e.anchorOffset]
            } else {
                var d = this.$editor.get(0);
                var c;
                d.focus();
                if (!this.hasSelection()) {
                    return null
                }
                c = d.document.selection.createRange();
                return this._getBoundary(d.document, c, true)
            }
        },
        getFocus: function() {
            if (!this.oldIE()) {
                var e;
                if (!((e = this.getSelection()) && (e.focusNode != null))) {
                    return null
                }
                return [e.focusNode, e.focusOffset]
            } else {
                var d = this.$editor.get(0);
                var c;
                d.focus();
                if (!this.hasSelection()) {
                    return null
                }
                c = d.document.selection.createRange();
                return this._getBoundary(d.document, c, false)
            }
        },
        setSelection: function(k, j, i, g) {
            if (i == null) {
                i = k
            }
            if (g == null) {
                g = j
            }
            if (!this.oldIE()) {
                var f = this.getSelection();
                if (!f) {
                    return
                }
                if (f.collapse && f.extend) {
                    f.collapse(k, j);
                    f.extend(i, g)
                } else {
                    r = this.document.createRange();
                    r.setStart(k, j);
                    r.setEnd(i, g);
                    try {
                        f.removeAllRanges()
                    } catch (h) {}
                    f.addRange(r)
                }
            } else {
                var d = this.$editor.get(0);
                var c = d.document.body.createTextRange();
                this._moveBoundary(d.document, c, false, i, g);
                this._moveBoundary(d.document, c, true, k, j);
                return c.select()
            }
        },
        getCurrentNode: function() {
            if (typeof this.window.getSelection !== "undefined") {
                return this.getSelectedNode().parentNode
            } else {
                if (typeof this.document.selection !== "undefined") {
                    return this.getSelection().parentElement()
                }
            }
        },
        getParentNode: function() {
            return b(this.getCurrentNode()).parent()[0]
        },
        getSelectedNode: function() {
            if (this.oldIE()) {
                return this.getSelection().parentElement()
            } else {
                if (typeof this.window.getSelection !== "undefined") {
                    var c = this.window.getSelection();
                    if (c.rangeCount > 0) {
                        return this.getSelection().getRangeAt(0).commonAncestorContainer
                    } else {
                        return false
                    }
                } else {
                    if (typeof this.document.selection !== "undefined") {
                        return this.getSelection()
                    }
                }
            }
        },
        _getBoundary: function(h, f, g) {
            var j, c, e, i, d;
            c = h.createElement("a");
            j = f.duplicate();
            j.collapse(g);
            d = j.parentElement();
            while (true) {
                d.insertBefore(c, c.previousSibling);
                j.moveToElementText(c);
                if (!(j.compareEndPoints((g ? "StartToStart" : "StartToEnd"), f) > 0 && (c.previousSibling != null))) {
                    break
                }
            }
            if (j.compareEndPoints((g ? "StartToStart" : "StartToEnd"), f) === -1 && c.nextSibling) {
                j.setEndPoint((g ? "EndToStart" : "EndToEnd"), f);
                e = c.nextSibling;
                i = j.text.length
            } else {
                e = c.parentNode;
                i = this._getChildIndex(c)
            }
            c.parentNode.removeChild(c);
            return [e, i]
        },
        _moveBoundary: function(h, l, k, e, f) {
            var i, g, j, c, d;
            d = 0;
            i = this._isText(e) ? e : e.childNodes[f];
            g = this._isText(e) ? e.parentNode : e;
            if (this._isText(e)) {
                d = f
            }
            c = h.createElement("a");
            g.insertBefore(c, i || null);
            j = h.body.createTextRange();
            j.moveToElementText(c);
            c.parentNode.removeChild(c);
            l.setEndPoint((k ? "StartToStart" : "EndToEnd"), j);
            return l[k ? "moveStart" : "moveEnd"]("character", d)
        },
        _isText: function(c) {
            return (c != null ? c.nodeType == 3 : false)
        },
        _getChildIndex: function(d) {
            var c = 0;
            while (d = d.previousSibling) {
                c++
            }
            return c
        },
        insertNodeAfterCaret: function(c) {
            this.saveSelection();
            this.insertNodeAtCaret(c);
            this.restoreSelection()
        },
        insertNodeAtCaret: function(g) {
            if (this.window.getSelection) {
                var h = this.getSelection();
                if (h.rangeCount) {
                    var d = h.getRangeAt(0);
                    d.collapse(false);
                    d.insertNode(g);
                    d = d.cloneRange();
                    d.selectNodeContents(g);
                    d.collapse(false);
                    h.removeAllRanges();
                    h.addRange(d)
                }
            } else {
                if (this.document.selection) {
                    var e = (g.nodeType === 1) ? g.outerHTML : g.data;
                    var i = "marker_" + ("" + Math.random()).slice(2);
                    e += '<span id="' + i + '"></span>';
                    var f = this.getSelection();
                    f.collapse(false);
                    f.pasteHTML(e);
                    var c = this.document.getElementById(i);
                    f.moveToElementText(c);
                    f.select();
                    c.parentNode.removeChild(c)
                }
            }
        },
        getSelectedHtml: function() {
            var f = "";
            if (this.window.getSelection) {
                var g = this.window.getSelection();
                if (g.rangeCount) {
                    var d = this.document.createElement("div");
                    for (var e = 0, c = g.rangeCount; e < c; ++e) {
                        d.appendChild(g.getRangeAt(e).cloneContents())
                    }
                    f = d.innerHTML
                }
            } else {
                if (this.document.selection) {
                    if (this.document.selection.type === "Text") {
                        f = this.document.selection.createRange().htmlText
                    }
                }
            }
            return f
        },
        resizeImage: function(g) {
            var h = false;
            var d = false;
            var f;
            var c;
            var i = b(g).width() / b(g).height();
            var e = 10;
            var j = 10;
            b(g).off("hover mousedown mouseup click mousemove");
            b(g).hover(function() {
                b(g).css("cursor", "nw-resize")
            }, function() {
                b(g).css("cursor", "");
                h = false
            });
            b(g).mousedown(function(k) {
                k.preventDefault();
                i = b(g).width() / b(g).height();
                h = true;
                d = true;
                f = Math.round(k.pageX - b(g).eq(0).offset().left);
                c = Math.round(k.pageY - b(g).eq(0).offset().top)
            });
            b(g).mouseup(b.proxy(function(k) {
                h = false;
                b(g).css("cursor", "");
                this.syncCode()
            }, this));
            b(g).click(b.proxy(function(k) {
                if (d) {
                    this.imageEdit(k)
                }
            }, this));
            b(g).mousemove(function(o) {
                if (h) {
                    d = false;
                    var l = Math.round(o.pageX - b(this).eq(0).offset().left) - f;
                    var k = Math.round(o.pageY - b(this).eq(0).offset().top) - c;
                    var n = b(g).height();
                    var p = parseInt(n, 10) + k;
                    var m = p * i;
                    if (m > e) {
                        b(g).width(m)
                    }
                    if (p > j) {
                        b(g).height(p)
                    }
                    f = Math.round(o.pageX - b(this).eq(0).offset().left);
                    c = Math.round(o.pageY - b(this).eq(0).offset().top)
                }
            })
        },
        showTable: function() {
            this.saveSelection();
            this.modalInit(RLANG.table, this.opts.modal_table, 300, b.proxy(function() {
                b("#redactor_insert_table_btn").click(b.proxy(this.insertTable, this));
                setTimeout(function() {
                    b("#redactor_table_rows").focus()
                }, 200)
            }, this))
        },
        insertTable: function() {
            var m = b("#redactor_table_rows").val();
            var f = b("#redactor_table_columns").val();
            var c = b("<div></div>");
            var d = Math.floor(Math.random() * 99999);
            var k = b('<table id="table' + d + '"><tbody></tbody></table>');
            for (var g = 0; g < m; g++) {
                var l = b("<tr></tr>");
                for (var j = 0; j < f; j++) {
                    var e = b("<td><br></td>");
                    b(l).append(e)
                }
                b(k).append(l)
            }
            b(c).append(k);
            var h = b(c).html() + "<p></p>";
            this.restoreSelection();
            this.execCommand("inserthtml", h);
            this.modalClose();
            this.observeTables()
        },
        tableObserver: function(c) {
            this.$table = b(c.target).closest("table");
            this.$table_tr = this.$table.find("tr");
            this.$table_td = this.$table.find("td");
            this.$tbody = b(c.target).closest("tbody");
            this.$thead = b(this.$table).find("thead");
            this.$current_td = b(c.target);
            this.$current_tr = b(c.target).closest("tr")
        },
        deleteTable: function() {
            b(this.$table).remove();
            this.$table = false;
            this.syncCode()
        },
        deleteRow: function() {
            b(this.$current_tr).remove();
            this.syncCode()
        },
        deleteColumn: function() {
            var c = b(this.$current_td).get(0).cellIndex;
            b(this.$table).find("tr").each(function() {
                b(this).find("td").eq(c).remove()
            });
            this.syncCode()
        },
        addHead: function() {
            if (b(this.$table).find("thead").size() !== 0) {
                this.deleteHead()
            } else {
                var c = b(this.$table).find("tr").first().clone();
                c.find("td").html("&nbsp;");
                this.$thead = b("<thead></thead>");
                this.$thead.append(c);
                b(this.$table).prepend(this.$thead);
                this.syncCode()
            }
        },
        deleteHead: function() {
            b(this.$thead).remove();
            this.$thead = false;
            this.syncCode()
        },
        insertRowAbove: function() {
            this.insertRow("before")
        },
        insertRowBelow: function() {
            this.insertRow("after")
        },
        insertColumnLeft: function() {
            this.insertColumn("before")
        },
        insertColumnRight: function() {
            this.insertColumn("after")
        },
        insertRow: function(c) {
            var d = b(this.$current_tr).clone();
            d.find("td").html("&nbsp;");
            if (c === "after") {
                b(this.$current_tr).after(d)
            } else {
                b(this.$current_tr).before(d)
            }
            this.syncCode()
        },
        insertColumn: function(d) {
            var c = 0;
            this.$current_tr.find("td").each(b.proxy(function(e, f) {
                if (b(f)[0] === this.$current_td[0]) {
                    c = e
                }
            }, this));
            this.$table_tr.each(function(e, f) {
                var g = b(f).find("td").eq(c);
                var h = g.clone();
                h.html("&nbsp;");
                if (d === "after") {
                    b(g).after(h)
                } else {
                    b(g).before(h)
                }
            });
            this.syncCode()
        },
        showVideo: function() {
            this.saveSelection();
            this.modalInit(RLANG.video, this.opts.modal_video, 600, b.proxy(function() {
                b("#redactor_insert_video_btn").click(b.proxy(this.insertVideo, this));
                setTimeout(function() {
                    b("#redactor_insert_video_area").focus()
                }, 200)
            }, this))
        },
        insertVideo: function() {
            var c = b("#redactor_insert_video_area").val();
            c = this.stripTags(c);
            this.restoreSelection();
            this.execCommand("inserthtml", c);
            this.modalClose()
        },
        imageEdit: function(f) {
            var c = b(f.target);
            var d = c.parent();
            var g = b.proxy(function() {
                b("#redactor_file_alt").val(c.attr("alt"));
                b("#redactor_image_edit_src").attr("href", c.attr("src"));
                b("#redactor_form_image_align").val(c.css("float"));
                if (b(d).get(0).tagName === "A") {
                    b("#redactor_file_link").val(b(d).attr("href"))
                }
                b("#redactor_image_delete_btn").click(b.proxy(function() {
                    this.imageDelete(c)
                }, this));
                b("#redactorSaveBtn").click(b.proxy(function() {
                    this.imageSave(c)
                }, this))
            }, this);
            this.modalInit(RLANG.image, this.opts.modal_image_edit, 380, g)
        },
        imageDelete: function(c) {
            b(c).remove();
            this.modalClose();
            this.syncCode()
        },
        imageSave: function(d) {
            var c = b(d).parent();
            b(d).attr("alt", b("#redactor_file_alt").val());
            var f = b("#redactor_form_image_align").val();
            if (f === "left") {
                b(d).css({
                    "float": "left",
                    margin: "0 10px 10px 0"
                })
            } else {
                if (f === "right") {
                    b(d).css({
                        "float": "right",
                        margin: "0 0 10px 10px"
                    })
                } else {
                    b(d).css({
                        "float": "none",
                        margin: "0"
                    })
                }
            }
            var e = b.trim(b("#redactor_file_link").val());
            if (e !== "") {
                if (b(c).get(0).tagName !== "A") {
                    b(d).replaceWith('<a href="' + e + '">' + this.outerHTML(d) + "</a>")
                } else {
                    b(c).attr("href", e)
                }
            } else {
                if (b(c).get(0).tagName === "A") {
                    b(c).replaceWith(this.outerHTML(d))
                }
            }
            this.modalClose();
            this.observeImages();
            this.syncCode()
        },
        showImage: function() {
            this.saveSelection();
            var c = b.proxy(function() {
                if (this.opts.imageGetJson !== false) {
                    b.getJSON(this.opts.imageGetJson, b.proxy(function(h) {
                        var f = {};
                        var j = 0;
                        b.each(h, b.proxy(function(k, l) {
                            if (typeof l.folder !== "undefined") {
                                j++;
                                f[l.folder] = j
                            }
                        }, this));
                        var g = false;
                        b.each(h, b.proxy(function(n, o) {
                            var m = "";
                            if (typeof o.title !== "undefined") {
                                m = o.title
                            }
                            var k = 0;
                            if (!b.isEmptyObject(f) && typeof o.folder !== "undefined") {
                                k = f[o.folder];
                                if (g === false) {
                                    g = ".redactorfolder" + k
                                }
                            }
                            var l = b('<img src="' + o.thumb + '" class="redactorfolder redactorfolder' + k + '" rel="' + o.image + '" title="' + m + '" />');
                            b("#redactor_image_box").append(l);
                            b(l).click(b.proxy(this.imageSetThumb, this))
                        }, this));
                        if (!b.isEmptyObject(f)) {
                            b(".redactorfolder").hide();
                            b(g).show();
                            var i = function(k) {
                                    b(".redactorfolder").hide();
                                    b(".redactorfolder" + b(k.target).val()).show()
                                };
                            var e = b('<select id="redactor_image_box_select">');
                            b.each(f, function(m, l) {
                                e.append(b('<option value="' + l + '">' + m + "</option>"))
                            });
                            b("#redactor_image_box").before(e);
                            e.change(i)
                        }
                    }, this))
                } else {
                    b("#redactor_tabs a").eq(1).remove()
                }
                if (this.opts.imageUpload !== false) {
                    if (this.opts.uploadCrossDomain === false && this.isMobile() === false) {
                        if (b("#redactor_file").size() !== 0) {
                            b("#redactor_file").dragupload({
                                url: this.opts.imageUpload,
                                uploadFields: this.opts.uploadFields,
                                success: b.proxy(this.imageUploadCallback, this),
                                error: b.proxy(this.opts.imageUploadErrorCallback, this)
                            })
                        }
                    }
                    this.uploadInit("redactor_file", {
                        auto: true,
                        url: this.opts.imageUpload,
                        success: b.proxy(this.imageUploadCallback, this),
                        error: b.proxy(this.opts.imageUploadErrorCallback, this)
                    })
                } else {
                    b(".redactor_tab").hide();
                    if (this.opts.imageGetJson === false) {
                        b("#redactor_tabs").remove();
                        b("#redactor_tab3").show()
                    } else {
                        var d = b("#redactor_tabs a");
                        d.eq(0).remove();
                        d.eq(1).addClass("redactor_tabs_act");
                        b("#redactor_tab2").show()
                    }
                }
                b("#redactor_upload_btn").click(b.proxy(this.imageUploadCallbackLink, this));
                if (this.opts.imageUpload === false && this.opts.imageGetJson === false) {
                    setTimeout(function() {
                        b("#redactor_file_link").focus()
                    }, 200)
                }
            }, this);
            this.modalInit(RLANG.image, this.opts.modal_image, 610, c)
        },
        imageSetThumb: function(c) {
            this._imageSet('<img src="' + b(c.target).attr("rel") + '" alt="' + b(c.target).attr("title") + '" />', true)
        },
        imageUploadCallbackLink: function() {
            if (b("#redactor_file_link").val() !== "") {
                var c = '<img src="' + b("#redactor_file_link").val() + '" />';
                this._imageSet(c, true)
            } else {
                this.modalClose()
            }
        },
        imageUploadCallback: function(c) {
            this._imageSet(c)
        },
        _imageSet: function(d, e) {
            this.restoreSelection();
            if (d !== false) {
                var c = "";
                if (e !== true) {
                    c = '<p><img src="' + d.filelink + '" /></p>'
                } else {
                    c = d
                }
                this.execCommand("inserthtml", c);
                if (e !== true && typeof this.opts.imageUploadCallback === "function") {
                    this.opts.imageUploadCallback(this, d)
                }
            }
            this.modalClose();
            this.observeImages()
        },
        showLink: function() {
            this.saveSelection();
            var c = b.proxy(function() {
                this.insert_link_node = false;
                var h = this.getSelection();
                var d = "",
                    j = "",
                    i = "";
                if (b.browser.msie) {
                    var f = this.getParentNode();
                    if (f.nodeName === "A") {
                        this.insert_link_node = b(f);
                        j = this.insert_link_node.text();
                        d = this.insert_link_node.attr("href");
                        i = this.insert_link_node.attr("target")
                    } else {
                        if (this.oldIE()) {
                            j = h.text
                        } else {
                            j = h.toString()
                        }
                    }
                } else {
                    if (h && h.anchorNode && h.anchorNode.parentNode.tagName === "A") {
                        d = h.anchorNode.parentNode.href;
                        j = h.anchorNode.parentNode.text;
                        i = h.anchorNode.parentNode.target;
                        if (h.toString() === "") {
                            this.insert_link_node = h.anchorNode.parentNode
                        }
                    } else {
                        j = h.toString()
                    }
                }
                b(".redactor_link_text").val(j);
                var e = self.location.href.replace(/\/$/i, "");
                var g = d.replace(e, "");
                if (d.search("mailto:") === 0) {
                    this.setModalTab(2);
                    b("#redactor_tab_selected").val(2);
                    b("#redactor_link_mailto").val(d.replace("mailto:", ""))
                } else {
                    if (g.search(/^#/gi) === 0) {
                        this.setModalTab(3);
                        b("#redactor_tab_selected").val(3);
                        b("#redactor_link_anchor").val(g.replace(/^#/gi, ""))
                    } else {
                        b("#redactor_link_url").val(g)
                    }
                }
                if (i === "_blank") {
                    b("#redactor_link_blank").attr("checked", true)
                }
                b("#redactor_insert_link_btn").click(b.proxy(this.insertLink, this));
                setTimeout(function() {
                    b("#redactor_link_url").focus()
                }, 200)
            }, this);
            this.modalInit(RLANG.link, this.opts.modal_link, 460, c)
        },
        insertLink: function() {
            var g = b("#redactor_tab_selected").val();
            var e = "",
                i = "",
                h = "";
            if (g === "1") {
                e = b("#redactor_link_url").val();
                i = b("#redactor_link_url_text").val();
                if (b("#redactor_link_blank").attr("checked")) {
                    h = ' target="_blank"'
                }
                var f = "((xn--)?[a-z0-9]+(-[a-z0-9]+)*.)+[a-z]{2,}";
                var d = new RegExp("^(http|ftp|https)://" + f, "i");
                var c = new RegExp("^" + f, "i");
                if (e.search(d) == -1 && e.search(c) == 0 && this.opts.protocol !== false) {
                    e = this.opts.protocol + e
                }
            } else {
                if (g === "2") {
                    e = "mailto:" + b("#redactor_link_mailto").val();
                    i = b("#redactor_link_mailto_text").val()
                } else {
                    if (g === "3") {
                        e = "#" + b("#redactor_link_anchor").val();
                        i = b("#redactor_link_anchor_text").val()
                    }
                }
            }
            this._insertLink('<a href="' + e + '"' + h + ">" + i + "</a>", b.trim(i), e, h)
        },
        _insertLink: function(c, f, d, e) {
            this.$editor.focus();
            this.restoreSelection();
            if (f !== "") {
                if (this.insert_link_node) {
                    b(this.insert_link_node).text(f);
                    b(this.insert_link_node).attr("href", d);
                    if (e !== "") {
                        b(this.insert_link_node).attr("target", e)
                    } else {
                        b(this.insert_link_node).removeAttr("target")
                    }
                    this.syncCode()
                } else {
                    this.execCommand("inserthtml", c)
                }
            }
            this.modalClose()
        },
        showFile: function() {
            this.saveSelection();
            var c = b.proxy(function() {
                var d = this.getSelection();
                var e = "";
                if (this.oldIE()) {
                    e = d.text
                } else {
                    e = d.toString()
                }
                b("#redactor_filename").val(e);
                if (this.opts.uploadCrossDomain === false && this.isMobile() === false) {
                    b("#redactor_file").dragupload({
                        url: this.opts.fileUpload,
                        uploadFields: this.opts.uploadFields,
                        success: b.proxy(this.fileUploadCallback, this),
                        error: b.proxy(this.opts.fileUploadErrorCallback, this)
                    })
                }
                this.uploadInit("redactor_file", {
                    auto: true,
                    url: this.opts.fileUpload,
                    success: b.proxy(this.fileUploadCallback, this),
                    error: b.proxy(this.opts.fileUploadErrorCallback, this)
                })
            }, this);
            this.modalInit(RLANG.file, this.opts.modal_file, 500, c)
        },
        fileUploadCallback: function(c) {
            this.restoreSelection();
            if (c !== false) {
                var e = b("#redactor_filename").val();
                if (e === "") {
                    e = c.filename
                }
                var d = '<a href="' + c.filelink + '">' + e + "</a>";
                if (b.browser.webkit && !! this.window.chrome) {
                    d = d + "&nbsp;"
                }
                this.execCommand("inserthtml", d);
                if (typeof this.opts.fileUploadCallback === "function") {
                    this.opts.fileUploadCallback(this, c)
                }
            }
            this.modalClose()
        },
        modalInit: function(f, e, c, g) {
            if (b("#redactor_modal_overlay").size() === 0) {
                this.overlay = b('<div id="redactor_modal_overlay" style="display: none;"></div>');
                b("body").prepend(this.overlay)
            }
            if (this.opts.overlay) {
                b("#redactor_modal_overlay").show();
                b("#redactor_modal_overlay").click(b.proxy(this.modalClose, this))
            }
            if (b("#redactor_modal").size() === 0) {
                this.modal = b('<div id="redactor_modal" style="display: none;"><div id="redactor_modal_close">&times;</div><div id="redactor_modal_header"></div><div id="redactor_modal_inner"></div></div>');
                b("body").append(this.modal)
            }
            b("#redactor_modal_close").click(b.proxy(this.modalClose, this));
            this.hdlModalClose = b.proxy(function(h) {
                if (h.keyCode === 27) {
                    this.modalClose();
                    return false
                }
            }, this);
            b(document).keyup(this.hdlModalClose);
            this.$editor.keyup(this.hdlModalClose);
            if (e.indexOf("#") == 0) {
                b("#redactor_modal_inner").empty().append(b(e).html())
            } else {
                b("#redactor_modal_inner").empty().append(e)
            }
            b("#redactor_modal_header").html(f);
            if (typeof b.fn.draggable !== "undefined") {
                b("#redactor_modal").draggable({
                    handle: "#redactor_modal_header"
                });
                b("#redactor_modal_header").css("cursor", "move")
            }
            if (b("#redactor_tabs").size() !== 0) {
                var d = this;
                b("#redactor_tabs a").each(function(h, j) {
                    h++;
                    b(j).click(function() {
                        b("#redactor_tabs a").removeClass("redactor_tabs_act");
                        b(this).addClass("redactor_tabs_act");
                        b(".redactor_tab").hide();
                        b("#redactor_tab" + h).show();
                        b("#redactor_tab_selected").val(h);
                        if (d.isMobile() === false) {
                            var i = b("#redactor_modal").outerHeight();
                            b("#redactor_modal").css("margin-top", "-" + (i + 10) / 2 + "px")
                        }
                    })
                })
            }
            b("#redactor_modal .redactor_btn_modal_close").click(b.proxy(this.modalClose, this));
            if (this.isMobile() === false) {
                b("#redactor_modal").css({
                    position: "fixed",
                    top: "-2000px",
                    left: "50%",
                    width: c + "px",
                    marginLeft: "-" + (c + 60) / 2 + "px"
                }).show();
                this.modalSaveBodyOveflow = b(document.body).css("overflow");
                b(document.body).css("overflow", "hidden")
            } else {
                b("#redactor_modal").css({
                    position: "fixed",
                    width: "100%",
                    height: "100%",
                    top: "0",
                    left: "0",
                    margin: "0",
                    minHeight: "300px"
                }).show()
            }
            if (typeof g === "function") {
                g()
            }
            if (this.isMobile() === false) {
                setTimeout(function() {
                    var h = b("#redactor_modal").outerHeight();
                    b("#redactor_modal").css({
                        top: "50%",
                        height: "auto",
                        minHeight: "auto",
                        marginTop: "-" + (h + 10) / 2 + "px"
                    })
                }, 20)
            }
        },
        modalClose: function() {
            b("#redactor_modal_close").unbind("click", this.modalClose);
            b("#redactor_modal").fadeOut("fast", b.proxy(function() {
                b("#redactor_modal_inner").html("");
                if (this.opts.overlay) {
                    b("#redactor_modal_overlay").hide();
                    b("#redactor_modal_overlay").unbind("click", this.modalClose)
                }
                b(document).unbind("keyup", this.hdlModalClose);
                this.$editor.unbind("keyup", this.hdlModalClose)
            }, this));
            if (this.isMobile() === false) {
                b(document.body).css("overflow", this.modalSaveBodyOveflow ? this.modalSaveBodyOveflow : "visible")
            }
            return false
        },
        setModalTab: function(c) {
            b(".redactor_tab").hide();
            var d = b("#redactor_tabs a");
            d.removeClass("redactor_tabs_act");
            d.eq(c - 1).addClass("redactor_tabs_act");
            b("#redactor_tab" + c).show()
        },
        uploadInit: function(d, c) {
            this.uploadOptions = {
                url: false,
                success: false,
                error: false,
                start: false,
                trigger: false,
                auto: false,
                input: false
            };
            b.extend(this.uploadOptions, c);
            if (b("#" + d).size() !== 0 && b("#" + d).get(0).tagName === "INPUT") {
                this.uploadOptions.input = b("#" + d);
                this.element = b(b("#" + d).get(0).form)
            } else {
                this.element = b("#" + d)
            }
            this.element_action = this.element.attr("action");
            if (this.uploadOptions.auto) {
                b(this.uploadOptions.input).change(b.proxy(function() {
                    this.element.submit(function(f) {
                        return false
                    });
                    this.uploadSubmit()
                }, this))
            } else {
                if (this.uploadOptions.trigger) {
                    b("#" + this.uploadOptions.trigger).click(b.proxy(this.uploadSubmit, this))
                }
            }
        },
        uploadSubmit: function() {
            this.uploadForm(this.element, this.uploadFrame())
        },
        uploadFrame: function() {
            this.id = "f" + Math.floor(Math.random() * 99999);
            var e = this.document.createElement("div");
            var c = '<iframe style="display:none" id="' + this.id + '" name="' + this.id + '"></iframe>';
            e.innerHTML = c;
            b(e).appendTo("body");
            if (this.uploadOptions.start) {
                this.uploadOptions.start()
            }
            b("#" + this.id).load(b.proxy(this.uploadLoaded, this));
            return this.id
        },
        uploadForm: function(g, e) {
            if (this.uploadOptions.input) {
                var h = "redactorUploadForm" + this.id;
                var c = "redactorUploadFile" + this.id;
                this.form = b('<form  action="' + this.uploadOptions.url + '" method="POST" target="' + e + '" name="' + h + '" id="' + h + '" enctype="multipart/form-data"></form>');
                if (this.opts.uploadFields !== false && typeof this.opts.uploadFields === "object") {
                    b.each(this.opts.uploadFields, b.proxy(function(j, f) {
                        if (f.toString().indexOf("#") === 0) {
                            f = b(f).val()
                        }
                        var l = b("<input/>", {
                            type: "hidden",
                            name: j,
                            value: f
                        });
                        b(this.form).append(l)
                    }, this))
                }
                var d = this.uploadOptions.input;
                var i = b(d).clone();
                b(d).attr("id", c);
                b(d).before(i);
                b(d).appendTo(this.form);
                b(this.form).css("position", "absolute");
                b(this.form).css("top", "-2000px");
                b(this.form).css("left", "-2000px");
                b(this.form).appendTo("body");
                this.form.submit()
            } else {
                g.attr("target", e);
                g.attr("method", "POST");
                g.attr("enctype", "multipart/form-data");
                g.attr("action", this.uploadOptions.url);
                this.element.submit()
            }
        },
        uploadLoaded: function() {
            var g = b("#" + this.id)[0];
            var h;
            if (g.contentDocument) {
                h = g.contentDocument
            } else {
                if (g.contentWindow) {
                    h = g.contentWindow.document
                } else {
                    h = window.frames[this.id].document
                }
            }
            if (this.uploadOptions.success) {
                if (typeof h !== "undefined") {
                    var f = h.body.innerHTML;
                    var e = f.match(/\{(.|\n)*\}/)[0];
                    var c = b.parseJSON(e);
                    if (typeof c.error == "undefined") {
                        this.uploadOptions.success(c)
                    } else {
                        this.uploadOptions.error(this, c);
                        this.modalClose()
                    }
                } else {
                    alert("Upload failed!");
                    this.modalClose()
                }
            }
            this.element.attr("action", this.element_action);
            this.element.attr("target", "")
        },
        oldIE: function() {
            if (b.browser.msie && parseInt(b.browser.version, 10) < 9) {
                return true
            }
            return false
        },
        outerHTML: function(c) {
            return b("<p>").append(b(c).eq(0).clone()).html()
        },
        normalize: function(c) {
            return parseInt(c.replace("px", ""), 10)
        },
        isMobile: function(c) {
            if (c === true && /(iPhone|iPod|iPad|BlackBerry|Android)/.test(navigator.userAgent)) {
                return true
            } else {
                if (/(iPhone|iPod|BlackBerry|Android)/.test(navigator.userAgent)) {
                    return true
                } else {
                    return false
                }
            }
        }
    };
    b.fn.getObject = function() {
        return this.data("redactor")
    };
    b.fn.getEditor = function() {
        return this.data("redactor").$editor
    };
    b.fn.getCode = function() {
        return b.trim(this.data("redactor").getCode())
    };
    b.fn.getText = function() {
        return this.data("redactor").$editor.text()
    };
    b.fn.getSelected = function() {
        return this.data("redactor").getSelectedHtml()
    };
    b.fn.setCode = function(c) {
        this.data("redactor").setCode(c)
    };
    b.fn.insertHtml = function(c) {
        this.data("redactor").insertHtml(c)
    };
    b.fn.destroyEditor = function() {
        this.each(function() {
            if (typeof b(this).data("redactor") != "undefined") {
                b(this).data("redactor").destroy();
                b(this).removeData("redactor")
            }
        })
    };
    b.fn.setFocus = function() {
        this.data("redactor").$editor.focus()
    };
    b.fn.execCommand = function(c, d) {
        this.data("redactor").execCommand(c, d)
    }
})(jQuery);
(function(b) {
    b.fn.dragupload = function(c) {
        return this.each(function() {
            var d = new a(this, c);
            d.init()
        })
    };

    function a(d, c) {
        this.opts = b.extend({
            url: false,
            success: false,
            error: false,
            preview: false,
            uploadFields: false,
            text: RLANG.drop_file_here,
            atext: RLANG.or_choose
        }, c);
        this.$el = b(d)
    }
    a.prototype = {
        init: function() {
            if (!b.browser.msie) {
                this.droparea = b('<div class="redactor_droparea"></div>');
                this.dropareabox = b('<div class="redactor_dropareabox">' + this.opts.text + "</div>");
                this.dropalternative = b('<div class="redactor_dropalternative">' + this.opts.atext + "</div>");
                this.droparea.append(this.dropareabox);
                this.$el.before(this.droparea);
                this.$el.before(this.dropalternative);
                this.dropareabox.bind("dragover", b.proxy(function() {
                    return this.ondrag()
                }, this));
                this.dropareabox.bind("dragleave", b.proxy(function() {
                    return this.ondragleave()
                }, this));
                var e = b.proxy(function(g) {
                    var f = parseInt(g.loaded / g.total * 100, 10);
                    this.dropareabox.text("Loading " + f + "%")
                }, this);
                var d = jQuery.ajaxSettings.xhr();
                if (d.upload) {
                    d.upload.addEventListener("progress", e, false)
                }
                var c = function() {
                        return d
                    };
                this.dropareabox.get(0).ondrop = b.proxy(function(h) {
                    h.preventDefault();
                    this.dropareabox.removeClass("hover").addClass("drop");
                    var g = h.dataTransfer.files[0];
                    var f = new FormData();
                    if (this.opts.uploadFields !== false && typeof this.opts.uploadFields === "object") {
                        b.each(this.opts.uploadFields, b.proxy(function(j, i) {
                            if (i.toString().indexOf("#") === 0) {
                                i = b(i).val()
                            }
                            f.append(j, i)
                        }, this))
                    }
                    f.append("file", g);
                    b.ajax({
                        url: this.opts.url,
                        dataType: "html",
                        data: f,
                        xhr: c,
                        cache: false,
                        contentType: false,
                        processData: false,
                        type: "POST",
                        success: b.proxy(function(j) {
                            var i = b.parseJSON(j);
                            if (typeof i.error == "undefined") {
                                this.opts.success(i)
                            } else {
                                this.opts.error(this, i);
                                this.opts.success(false)
                            }
                        }, this)
                    })
                }, this)
            }
        },
        ondrag: function() {
            this.dropareabox.addClass("hover");
            return false
        },
        ondragleave: function() {
            this.dropareabox.removeClass("hover");
            return false
        }
    }
})(jQuery);
(function(b) {
    var e = "http://";
    var d = /(^|&lt;|\s)(www\..+?\..+?)(\s|&gt;|$)/g,
        a = /(^|&lt;|\s)(((https?|ftp):\/\/|mailto:).+?)(\s|&gt;|$)/g,
        c = function() {
            var h = this.childNodes,
                g = h.length;
            while (g--) {
                var j = h[g];
                if (j.nodeType === 3) {
                    var f = j.nodeValue;
                    if (f) {
                        f = f.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(d, '$1<a href="' + e + '$2">$2</a>$3').replace(a, '$1<a href="$2">$2</a>$5');
                        b(j).after(f).remove()
                    }
                } else {
                    if (j.nodeType === 1 && !/^(a|button|textarea)$/i.test(j.tagName)) {
                        c.call(j)
                    }
                }
            }
        };
    b.fn.linkify = function() {
        this.each(c)
    }
})(jQuery);
eval(function(h, b, j, f, g, i) {
    g = function(a) {
        return (a < b ? "" : g(parseInt(a / b))) + ((a = a % b) > 35 ? String.fromCharCode(a + 29) : a.toString(36))
    };
    if (!"".replace(/^/, String)) {
        while (j--) {
            i[g(j)] = f[j] || g(j)
        }
        f = [function(a) {
            return i[a]
        }];
        g = function() {
            return "\\w+"
        };
        j = 1
    }
    while (j--) {
        if (f[j]) {
            h = h.replace(new RegExp("\\b" + g(j) + "\\b", "g"), f[j])
        }
    }
    return h
}('(5($){$.1.4.7={t:5(0,v){$(2).0("8",c);$(2).0("r",0);$(2).l(\'g\',$.1.4.7.b)},u:5(0){$(2).w(\'g\',$.1.4.7.b)},b:5(1){9 0=$(2).0("r");9 3=$.1.4.7.f(0).h();6(3!=\'\'){$(2).0("8",x);1.j="7";1.3=3;$.1.i.m(2,k)}},f:5(0){9 3=\'\';6(q.e)3=q.e();o 6(d.e) 3=d.e();o 6(d.p)3=d.p.B().3;A 3}};$.1.4.a={t:5(0,v){$(2).0("n",0);$(2).0("8",c);$(2).l(\'g\',$.1.4.a.b);$(2).l(\'D\',$.1.4.a.s)},u:5(0){$(2).w(\'g\',$.1.4.a.b)},b:5(1){6($(2).0("8")){9 0=$(2).0("n");9 3=$.1.4.7.f(0).h();6(3==\'\'){$(2).0("8",c);1.j="a";$.1.i.m(2,k)}}},s:5(1){6($(2).0("8")){9 0=$(2).0("n");9 3=$.1.4.7.f(0).h();6((1.y=z)&&(3==\'\')){$(2).0("8",c);1.j="a";$.1.i.m(2,k)}}}}})(C);', 40, 40, "data|event|this|text|special|function|if|textselect|textselected|var|textunselect|handler|false|rdocument|getSelection|getSelectedText|mouseup|toString|handle|type|arguments|bind|apply|rttt|else|selection|rwindow|ttt|handlerKey|setup|teardown|namespaces|unbind|true|keyCode|27|return|createRange|jQuery|keyup".split("|"), 0, {}));