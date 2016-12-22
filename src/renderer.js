const electron = require('electron');
const ipc = electron.ipcRenderer;

document.getElementById('start').addEventListener('click', _ => {
  ipc.send('countdown-start');
});

document.getElementById('quit').addEventListener('click', _ => {
  if (confirm('Are you sure?')) {
    ipc.send('quit-app');
  }
});

ipc.on('countdown', (evt, count) => {
  document.getElementById('count').innerHTML = count;
});
