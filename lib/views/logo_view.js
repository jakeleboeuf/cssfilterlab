(function() {
    
    function LogoView(filterDock) {
        this.filterDock = filterDock;
        this.filterDockToggleEl = $("#filter-store-toggle");
        this.outsideLayerEl = $("<div />").addClass("clicks-catcher");
        this.dockPanel = new Global.DockPanel("Logo");
        this.logoEl = $("#logo").appendTo(this.dockPanel.el);
        this.init();
    }

    LogoView.prototype = {
        init: function() { 
            this.filterDock.containerEl.hide();
            this.outsideLayerEl.click(this.hideFilterDock.bind(this));
            this.filterDockToggleEl.click(this.showFilterDock.bind(this));
        },

        showFilterDock: function() {
            this.filterDockToggleEl.addClass("selected");

            var offset = this.filterDockToggleEl.offset(),
                width = this.filterDockToggleEl.outerWidth();
                height = this.filterDockToggleEl.outerHeight();
            this.filterDock.containerEl
                .css("left", offset.left + width / 2)
                .css("top", offset.top + height);

            this.filterDock.containerEl.show();
            this.filterDock.containerEl.before(this.outsideLayerEl);
        },

        hideFilterDock: function() {
            this.filterDockToggleEl.removeClass("selected");
            this.outsideLayerEl.detach();
            this.filterDock.containerEl.hide();
        }
    }

    Global.LogoView = LogoView;

})();