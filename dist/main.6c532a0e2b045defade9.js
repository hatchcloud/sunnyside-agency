/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

var menuMobile = document.querySelector(".burger-menu"); //burger icon

var topBar = document.querySelector(".navbar"); //all navbar

var navMenu = document.querySelector(".navegacion-principal"); //enlaces

var windows = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; //Menu Mobile Click Burger

menuMobile.addEventListener('click', function () {
  if (navMenu.classList.contains('nav-mobile')) {
    navMenu.classList.add('hidden');
    navMenu.classList.remove('nav-mobile');
    topBar.classList.remove('mobile-navbar');
  } else {
    navMenu.classList.remove('hidden');
    navMenu.classList.add('nav-mobile');
    topBar.classList.add('mobile-navbar');
  }

  ;
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWluaWNpYWwvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsibWVudU1vYmlsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRvcEJhciIsIm5hdk1lbnUiLCJ3aW5kb3dzIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFkZCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixDQUFuQixDLENBQTJEOztBQUMzRCxJQUFNQyxNQUFNLEdBQU9GLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixTQUF2QixDQUFuQixDLENBQXNEOztBQUN0RCxJQUFNRSxPQUFPLEdBQU1ILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix1QkFBdkIsQ0FBbkIsQyxDQUFvRTs7QUFDcEUsSUFBTUcsT0FBTyxHQUFNQyxNQUFNLENBQUNDLFVBQVAsSUFDaEJOLFFBQVEsQ0FBQ08sZUFBVCxDQUF5QkMsV0FEVCxJQUVoQlIsUUFBUSxDQUFDUyxJQUFULENBQWNELFdBRmpCLEMsQ0FLQTs7QUFDQVQsVUFBVSxDQUFDVyxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxZQUFLO0FBQ3RDLE1BQUdQLE9BQU8sQ0FBQ1EsU0FBUixDQUFrQkMsUUFBbEIsQ0FBMkIsWUFBM0IsQ0FBSCxFQUE0QztBQUN4Q1QsV0FBTyxDQUFDUSxTQUFSLENBQWtCRSxHQUFsQixDQUFzQixRQUF0QjtBQUNBVixXQUFPLENBQUNRLFNBQVIsQ0FBa0JHLE1BQWxCLENBQXlCLFlBQXpCO0FBQ0FaLFVBQU0sQ0FBQ1MsU0FBUCxDQUFpQkcsTUFBakIsQ0FBd0IsZUFBeEI7QUFDSCxHQUpELE1BSU87QUFDSFgsV0FBTyxDQUFDUSxTQUFSLENBQWtCRyxNQUFsQixDQUF5QixRQUF6QjtBQUNBWCxXQUFPLENBQUNRLFNBQVIsQ0FBa0JFLEdBQWxCLENBQXNCLFlBQXRCO0FBQ0FYLFVBQU0sQ0FBQ1MsU0FBUCxDQUFpQkUsR0FBakIsQ0FBcUIsZUFBckI7QUFDQzs7QUFBQTtBQUNSLENBVkQsRSIsImZpbGUiOiJtYWluLmQ3OWZiYzIzMzRmMTVkOTZhZjljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5jb25zdCBtZW51TW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXJnZXItbWVudVwiKTsgLy9idXJnZXIgaWNvblxuY29uc3QgdG9wQmFyICAgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpOyAvL2FsbCBuYXZiYXJcbmNvbnN0IG5hdk1lbnUgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmVnYWNpb24tcHJpbmNpcGFsXCIpOyAvL2VubGFjZXNcbmNvbnN0IHdpbmRvd3MgICAgPSB3aW5kb3cuaW5uZXJXaWR0aFxufHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG58fCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuXG5cbi8vTWVudSBNb2JpbGUgQ2xpY2sgQnVyZ2VyXG5tZW51TW9iaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgaWYobmF2TWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ25hdi1tb2JpbGUnKSl7XG4gICAgICAgIG5hdk1lbnUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIG5hdk1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LW1vYmlsZScpO1xuICAgICAgICB0b3BCYXIuY2xhc3NMaXN0LnJlbW92ZSgnbW9iaWxlLW5hdmJhcicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5hdk1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIG5hdk1lbnUuY2xhc3NMaXN0LmFkZCgnbmF2LW1vYmlsZScpO1xuICAgICAgICB0b3BCYXIuY2xhc3NMaXN0LmFkZCgnbW9iaWxlLW5hdmJhcicpO1xuICAgICAgICB9O1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9