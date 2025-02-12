const { app, BrowserWindow, ipcMain, shell, Menu } = require('electron');
const { exec } = require('child_process'); 
const path = require('path');

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 600,
    icon: path.join(__dirname, 'assets/icons/eclipseot.ico'),
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), 
      contextIsolation: true,
      enableRemoteModule: false,
      nodeIntegration: false
    }
  });

  mainWindow.loadFile('index.html');

  const emptyMenu = Menu.buildFromTemplate([]);
  Menu.setApplicationMenu(emptyMenu); 
  
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

ipcMain.on('start-game', () => {
    exec(__dirname + '/client/bin/client.exe', (err, stdout, stderr) => {
        if (err) {
            console.error(`Erro ao iniciar o jogo: ${err.message}`);
            return;
        }
        console.log('Jogo iniciado com sucesso.');
    });
});

ipcMain.on('open-external', (event, url) => {
    shell.openExternal(url); 
});