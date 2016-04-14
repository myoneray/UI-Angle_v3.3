(function() {
    'use strict';

    angular
        .module('app.charts')
        .run(coreMenu);

    coreMenu.$inject = ['Menus'];
    function coreMenu(Menus){

        Menus.addMenuItem('sidebar', 'Charts', 'chart', 'dropdown', null, true, null, 5, 'icon-graph');
        Menus.addSubMenuItem('sidebar', 'chart', 'Flot',     'chart/flot');
        Menus.addSubMenuItem('sidebar', 'chart', 'Radial',   'chart/radial');
        Menus.addSubMenuItem('sidebar', 'chart', 'Chart JS', 'chart/chartjs');
        Menus.addSubMenuItem('sidebar', 'chart', 'Rickshaw', 'chart/rickshaw');
        Menus.addSubMenuItem('sidebar', 'chart', 'MorrisJS', 'chart/morris');
        Menus.addSubMenuItem('sidebar', 'chart', 'Chartist', 'chart/chartist');

    }

})();