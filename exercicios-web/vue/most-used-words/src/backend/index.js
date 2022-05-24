// ipc: Inter-Process Communicaton
const { ipcMain } = require('electron')

ipcMain.on('blabla', (event, arg) => {
    console.log(arg)
})