angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Josimar Vieira',
    face: 'img/ben.png',
    telephone: '+55 32 99979-3377',
    profissao: 'Engenheiro de Software',
    email: 'josimarsv@outlook.com',
    endereco: 'Rua Adalberto andrade de carvalho, 46 - Ubá/MG',
    site: 'www.jorvs.com',
    facebook: 'josimarsv',
    youtube: 'jorvs',
    twitter: 'josimarsv',
    github: 'josimarsv',
  }, {
    id: 1,
    name: 'Osvaldo Silva',
    telephone: '+55 32 95555-5555',
    face: 'img/max.png',
    profissao: 'Engenheiro de Software',
    email: 'josimarsv@outlook.com',
    endereco: 'Rua Adalberto andrade de carvalho, 46 - Ubá/MG',
    site: 'www.jorvs.com',
    facebook: 'josimarsv',
    youtube: 'jorvs',
    twitter: 'josimarsv',
    github: 'josimarsv',
  }, {
    id: 2,
    name: 'Joaquim Jose',
    telephone: '+55 32 99999-9999',
    face: 'img/adam.jpg',
    profissao: 'Engenheiro de Software',
    email: 'josimarsv@outlook.com',
    endereco: 'Rua Adalberto andrade de carvalho, 46 - Ubá/MG',
    site: 'www.jorvs.com',
    facebook: 'josimarsv',
    youtube: 'jorvs',
    twitter: 'josimarsv',
    github: 'josimarsv',
  }, {
    id: 3,
    name: 'Antonio Alves',
    telephone: '+55 32 1234-5678',
    face: 'img/perry.png',
    profissao: 'Engenheiro de Software',
    email: 'josimarsv@outlook.com',
    endereco: 'Rua Adalberto andrade de carvalho, 46 - Ubá/MG',
    site: 'www.jorvs.com',
    facebook: 'josimarsv',
    youtube: 'jorvs',
    twitter: 'josimarsv',
    github: 'josimarsv',
  }, {
    id: 4,
    name: 'Alberto Severino',
    telephone: '+55 32 5555-5555',
    face: 'img/mike.png',   
    profissao: 'Engenheiro de Software',
    email: 'josimarsv@outlook.com',
    endereco: 'Rua Adalberto andrade de carvalho, 46 - Ubá/MG',
    site: 'www.jorvs.com',
    facebook: 'josimarsv',
    youtube: 'jorvs',
    twitter: 'josimarsv',
    github: 'josimarsv',
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
