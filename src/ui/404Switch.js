(function() {
    "use strict";

    /* globals $ */

    const ui = window.app.ui;

    Object.defineProperty(HTMLElement.prototype, "isAll", {
        get: function() {
            const input = this.querySelector("input");
            if (input) {
                return input.checked;
            }
        },
        set: function(val) {
            const input = this.querySelector("input");
            if (input) {
                input.checked = !!val;
            }
        }
    });

    window.app.create404Switch = function() {
        return document.importNode(ui.notFoundSwitchTemplate[0].content, true);
    };
})();
