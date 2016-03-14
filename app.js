'use strict'
var app = require('app')
var locals = {title: 'the title'};
var j = require('electron-jade')({pretty: true}, locals);
var BrowserWindow = require('browser-window')

app.on('ready', () => {
  var mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })
  mainWindow.loadURL('file://' + __dirname + '/main.jade')
  mainWindow.openDevTools()
})
