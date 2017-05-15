(function () {
  'use strict';

  angular
    .module('articles')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    menuService.addMenuItem('topbar', {
      title: 'Opciones',
      state: 'articles',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'articles', {
      title: 'Ubicación',
      state: 'home',
      roles: ['*']
    });
     // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'articles', {
      title: 'Historial',
      state: 'home',
      roles: ['*']
    });
     // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'articles', {
      title: 'Notificaciones',
      state: 'home',
      roles: ['*']
    });
     // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'articles', {
      title: 'Configuración',
      state: 'home',
      roles: ['*']
    });
  }
}());
