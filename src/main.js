'use strict';
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const countdown = require('./countdown')
const ipc = electron.ipcMain;

let mainWindow;
app.on('ready', _ => {

  mainWindow = new BrowserWindow({
    title: 'First Electron App',
    // autoHideMenuBar: true,
    height: 768,
    width: 1024
  });

  // mainWindow.loadURL(`file://${__dirname}/countdown.html`); // works
  mainWindow.loadURL('file://' + __dirname + '/countdown.html'); // also works

  mainWindow.on('closed', _ => {
    mainWindow = null;
  });

});

app.on('quit', () => {
  console.log('app.on  quit!');
});

ipc.on('countdown-start', _ => {
  console.log('ipc.on  countdown-start');
});

ipc.on('quit-app', _ => {
  console.log('ipc.on  quit-app');
  app.exit();
});
