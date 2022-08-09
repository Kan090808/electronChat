const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('e_notification', {
    sendNotification(message) {
        alert('receive');
        ipcRenderer.send('notify', message);
    }
});