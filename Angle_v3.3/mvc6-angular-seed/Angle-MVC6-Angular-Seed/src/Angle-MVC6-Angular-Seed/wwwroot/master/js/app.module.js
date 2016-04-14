/*!
 * 
 * Angle - Bootstrap Admin App + AngularJS
 * 
 * Version: @version@
 * Author: @author@
 * Website: @url@
 * License: @license@
 * 
 */

// APP START
// ----------------------------------- 

(function() {
    'use strict';

    angular
        .module('angle', [
            'app.core',
            'app.routes',
            'app.sidebar',
            'app.navsearch',
            'app.preloader',
            'app.loadingbar',
            'app.translate',
            'app.settings',
            'app.utils'
        ]);
})();

