(function() {
    'use strict';

    angular
        .module('app.forms')
        .run(coreMenu);

    coreMenu.$inject = ['Menus'];
    function coreMenu(Menus){

        Menus.addMenuItem('sidebar', 'Forms', 'form', 'dropdown', null, true, null, 4, 'icon-note');
        Menus.addSubMenuItem('sidebar', 'form', 'Standard',    'form/standard');
        Menus.addSubMenuItem('sidebar', 'form', 'Extended',    'form/extended');
        Menus.addSubMenuItem('sidebar', 'form', 'Validation',  'form/validation');
        Menus.addSubMenuItem('sidebar', 'form', 'Parsley',     'form/parsley');
        Menus.addSubMenuItem('sidebar', 'form', 'Wizard',      'form/wizard');
        Menus.addSubMenuItem('sidebar', 'form', 'Upload',      'form/upload');
        Menus.addSubMenuItem('sidebar', 'form', 'xEditable',   'form/xeditable');
        Menus.addSubMenuItem('sidebar', 'form', 'Image Crop',  'form/imagecrop');
        Menus.addSubMenuItem('sidebar', 'form', 'uiSelect',    'form/uiselect');

    }

})();