angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Vinho 1',
    lastText: 'Descrição',
    face: 'img/wine.png'
  }, {
    id: 1,
    name: 'Suco 1',
    lastText: 'Descrição',
    face: 'img/wine.png'
  }, {
    id: 2,
    name: 'Espumante 1',
    lastText: 'Descrição',
    face: 'img/wine.png'
  }, {
    id: 3,
    name: 'Vinho 2',
    lastText: 'Descrição',
    face: 'img/wine.png'
  }, {
    id: 4,
    name: 'Vinho 3',
    lastText: 'Descrição',
    face: 'img/wine.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
