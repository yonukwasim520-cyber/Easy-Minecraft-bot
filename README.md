Easy Minecraft Bot - Installation Guide

Requirements

- Termux
- Internet connection

Step 1: Install Ubuntu

Open Termux and run:

proot-distro login ubuntu

If Ubuntu is not installed, install it first. After the installation is complete, run the command again:

proot-distro login ubuntu

---

Step 2: Install Git

apt update
apt install git -y

---

Step 3: Download Easy Minecraft Bot

git clone https://github.com/yonukwasim520-cyber/Easy-Minecraft-bot.git

---

Step 4: Open the Project Folder

cd Easy-Minecraft-bot

---

Step 5: Install Required Packages

npm install mineflayer mineflayer-pathfinder express socket.io prismarine-viewer

Wait until all packages finish installing.

---

Step 6: Start Easy Minecraft Bot

node server.js

---

Step 7: Open the Web Panel

After starting the server, a website address will appear in the terminal.

Open the website in your browser, connect your bot, configure the settings, and enjoy using Easy Minecraft Bot.

Features

- Easy web-based control panel
- Minecraft bot management
- Pathfinding support
- Real-time web interface
- Prismarine Viewer integration
- Simple setup and configuration

Enjoy!
