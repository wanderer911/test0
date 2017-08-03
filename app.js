'use strict';

var myApp = angular.module('myApp', []);

myApp.
    component('itemComponent', {
        templateUrl: 'main.html',
        controller: function ItemsController() {
            self = this;
            self.textarea = '';
            self.selected = null;
            self.items = JSON.parse(localStorage.getItem('items')) || [];

            self.addItem = function (item) {
                self.items.push({ id: Math.floor((Math.random() * 1000000) + 1), text: item, comments: [] });
                localStorage.setItem('items', JSON.stringify(self.items))
                
            };

            self.delItem = function (id) {
                self.items = self.items.filter(item => {
                    return item.id != id;
                });
                localStorage.setItem('items', JSON.stringify(self.items))

            };

            self.select = function (item) {
                self.selected = item;
            }

            self.showComments = function (item) {
                self.comments = item.comments;
            }

            self.addComment = function (textarea) {
                self.comments.push({ id: Math.floor((Math.random() * 1000000) + 1), text: textarea });
                localStorage.setItem('items', JSON.stringify(self.items))
                self.textarea = '';
                
            }
        }
    });

