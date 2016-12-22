'use strict';
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const countdown = require('./countdown')
const ipc = electron.ipcMain;

const windows = [];

app.on('ready', _ => {
  [1, 2, 3].forEach(() => {

    let win = new BrowserWindow({
      title: 'First Electron App',
      // autoHideMenuBar: true,
      height: 400,
      width: 600
    });

    // win.loadURL(`file://${__dirname}/countdown.html`); // works
    win.loadURL('file://' + __dirname + '/countdown.html'); // also works

    win.on('closed', _ => {
      win = null;
    });

    windows.push(win);
  });
});

app.on('quit', () => {
  console.log('app.on  quit!');
});

ipc.on('countdown-start', _ => {
  countdown(count => {
    windows.forEach(win => {
      win.webContents.send('countdown', count);
    });
  });
});

ipc.on('quit-app', _ => {
  console.log('ipc.on  quit-app');
  app.exit();
});
