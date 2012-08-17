(function() {
	
	function CSSCodeView(animation) {
		this.animation = animation;
		this.dockPanelCode = new Global.DockPanel("CSS Syntax");
        this.dockPanelAnimationCode = new Global.DockPanel("CSS Animation Syntax");
		this.filterCodeEl = $("#filter-code").appendTo(this.dockPanelCode.el);
        this.animationCodeEl = $("#animation-code").appendTo(this.dockPanelAnimationCode.el);
        this.animation.on("filtersUpdated", this.onFiltersUpdated.bind(this));
	}

	CSSCodeView.prototype = {
		NoFiltersAddedText: "No filters applied. Add a filter from the left panel to see the CSS syntax for it.",
        NoAnimationAddedText: "No keyframes applied. Add a filter from the left panel and change the values to see the CSS syntax for it.",

		onFiltersUpdated: function(cssFilters, filterCodeHtml, animationCodeHtml) {
            if (!filterCodeHtml.length)
                filterCodeHtml = this.NoFiltersAddedText;
            if (!animationCodeHtml.length)
                animationCodeHtml = this.NoAnimationAddedText;

            this.filterCodeEl.html(filterCodeHtml);
            this.animationCodeEl.html(animationCodeHtml);
        },
	}

	Global.CSSCodeView = CSSCodeView;

})();