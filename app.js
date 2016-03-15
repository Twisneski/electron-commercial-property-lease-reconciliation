'use strict'
var app = require('app')
var locals = {title: 'Main'};
var j = require('electron-jade')({pretty: true}, locals);
var BrowserWindow = require('browser-window')
var ipc = require('electron').ipcMain

app.on('ready', function () {
  var mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })
  mainWindow.loadURL('file://' + __dirname + '/main.jade')
  mainWindow.openDevTools()


  var newLeaseWindow = new BrowserWindow({
    width: 400,
    height: 400,
    show: false
  })
  newLeaseWindow.loadURL('file://' + __dirname + '/newLease.jade')

  ipc.on('toggle-newLease', function () {
    if (newLeaseWindow.isVisible())
      newLeaseWindow.hide()
    else
      newLeaseWindow.show()
      newLeaseWindow.openDevTools()
    })
})
