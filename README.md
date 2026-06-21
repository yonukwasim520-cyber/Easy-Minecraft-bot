![Minecraft Bot](bot.png)
Easy Minecraft Bot

An easy-to-use Minecraft bot with a web control panel for managing and controlling your bots.

Requirements

- Termux
- Ubuntu inside Termux (Recommended)
- Internet connection
- Node.js and npm
- Git

Installation

1. Enter Ubuntu

If you have not installed Ubuntu in Termux yet, install it first and then log in to it.

2. Update the system

apt update && apt upgrade -y

3. Install Git

apt install git -y

4. Download the project

git clone https://github.com/yonukwasim520-cyber/Easy-Minecraft-bot.git
cd Easy-Minecraft-bot

5. Install dependencies

npm install

If the command above does not work, install the packages manually:

npm install mineflayer mineflayer-pathfinder express socket.io prismarine-viewer

6. Start the bot

node server.js

7. Open the web panel

After starting the server, a local web address will appear in the terminal. Open it in your browser to access the control panel and manage your bot.

Features

- Easy-to-use web interface
- Minecraft bot management
- Pathfinding support
- Prismarine Viewer integration
- Simple setup and configuration
- Works on both mobile and PC

Notes

- Ubuntu inside Termux is recommended for the best compatibility and performance.
- The project may work on other systems if all requirements are installed correctly.
- If you encounter any issues, please open an Issue on GitHub.

License

MIT License
