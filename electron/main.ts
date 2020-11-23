//creates shell of desktop application in electron

import { app, BrowserWindow } from "electron";
import * as path from "path";
import * as url from "url";

let mainWindow: Electron.BrowserWindow | null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: "./assets/templogo.png",
    webPreferences: {
      nodeIntegration: true,
    },
  });
  //macOS dock settings for logo
  if (process.platform === 'darwin') {
    app.dock.setIcon("./assets/templogo.png");
  }
  if (process.env.NODE_ENV === "development") {
    mainWindow.loadURL(`http://localhost:3000`);
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, "../index.html"),
        protocol: "file:",
        slashes: true,
      })
    );
  }
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", createWindow)

app.allowRendererProcessReuse = true;


//exports into webpack.electorn.config