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

But, a piece of advice
You have to rely apt It is forbidden to use pkg Do not use it in any way, or it will never work. Be careful; any small mistake will cause everything to break and you will have to start all over again. If you want to use the tool without needing it ub It's impossible to exploit performance unless you're inside ub Or else you'll have to start all over again. But the performance works even on a computer, but it needs to be in the system ub This means that people using Windows cannot utilize the performance except by using applications that emulate the system ub Or, even easier, you can download the app Termux But you need to use the computer version. If you're on a phone, use the mobile app; if you're on a computer, use the computer app. Everyone needs to read about this; it's important advice. Pay attention
