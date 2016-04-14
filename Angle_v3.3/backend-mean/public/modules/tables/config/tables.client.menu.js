(function() {
    'use strict';

    angular
        .module('app.tables')
        .run(coreMenu);

    coreMenu.$inject = ['Menus'];
    function coreMenu(Menus){

        Menus.addMenuItem('sidebar', 'Tables', 'table', 'dropdown', null, true, null, 6, 'icon-grid');
        Menus.addSubMenuItem('sidebar', 'table', 'Standard',     'table/standard');
        Menus.addSubMenuItem('sidebar', 'table', 'Extended',     'table/extended');
        Menus.addSubMenuItem('sidebar', 'table', 'DataTables',   'table/datatable');
        Menus.addSubMenuItem('sidebar', 'table', 'ngTables',     'table/ngtable');
        Menus.addSubMenuItem('sidebar', 'table', 'uiGrid',       'table/uigrid');
        Menus.addSubMenuItem('sidebar', 'table', 'xEditable',    'table/xeditable');
        Menus.addSubMenuItem('sidebar', 'table', 'Angular Grid', 'table/angulargrid');

    }

})();