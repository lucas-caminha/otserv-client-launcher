const { contextBridge, ipcRenderer, shell } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    startGame: () => ipcRenderer.send('start-game'),
    readFile: (filePath) => fs.readFileSync(filePath, 'utf-8'),
    openExternal: (url) => ipcRenderer.send('open-external', url),
    shell: {
        openExternal: (url) => shell.openExternal(url)
    }
});
