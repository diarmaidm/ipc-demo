'use strict';
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const countdown = require('./countdown')

let mainWindow;
app.on('ready', _ => {

  mainWindow = new BrowserWindow({
    title: 'First Electron App',
    // autoHideMenuBar: true,
    height: 768,
    width: 1024
  });

  mainWindow.loadURL(`file://${__dirname}/countdown.html`); // works
  // mainWindow.loadURL('file://' + __dirname + '/countdown.html'); // also works

  countdown();

  mainWindow.on('closed', _ => {
    mainWindow = null;
  });

});

app.on('quit', () => {
  // console.log('app.on  quit!');
})
