// var app = require('app');  // Module to control application life.

// var BrowserWindow = require('browser-window');  // Module to create native browser window.
const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;
// const Menu = electron.Menu
const app = electron.app;

// Keep a global reference of the window object. If you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
    // Create the browser window
    mainWindow = new BrowserWindow({width: 900, height: 600});

    // and load the index.html of the app.
    mainWindow.loadURL('file://' + __dirname + '/index.html');

    // Returned when the window is closed.
    mainWindow.on('closed', function() {
        // Dereference the window object. Usually you would store windows
        // in an array if your app supports multi windows. This is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });

    // On a PC, the app will quit when we close all windows.
    // On a Mac, applications must be explicitly closed.
    app.on('window-all-closed', function() {
        if (process.platform != 'darwin') {
            app.quit();
        }
    });
});