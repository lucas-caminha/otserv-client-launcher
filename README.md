# OTServ Client Launcher

![OTServ Client Launcher Logo](assets/icons/otserv-client-launcher.png)

OTServ Client Launcher is an Electron-based application designed to manage Open Tibia server clients. It offers a seamless experience for players, allowing them to launch the game, check server status, view server information, and update the client when new versions are available.

## 🌟 Features

- 🎮 Launch the game with a single click
- 🔄 Check real-time server status
- ℹ️ Display comprehensive server information
- 🏆 Showcase the top 5 characters
- 🔄 Automatic client updates

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/your-username/otserv-client-launcher.git
   cd otserv-client-launcher
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Place your OTServ client files in the \`client\` folder:
   \`\`\`
   otserv-client-launcher/
   ├── client/
   │   ├── Tibia.exe
   │   └── ...other client files
   \`\`\`

4. Start the application:
   \`\`\`bash
   npm start
   \`\`\`

## ⚙️ Configuration

Customize the \`config.js\` file to match your server settings:

\`\`\`javascript
const config = {
  serverName:      'YourOTServer',
  version:         '13.40',
  serverType:      'PvP',
  experienceRate:  3,
  skillRate:       2,
  magicLevelRate:  1,
  backgroundImage: 'path/to/background-image.jpg',
  websiteUrl:      'https://yourwebsite.com'
};
\`\`\`

## 📁 Project Structure

\`\`\`
otserv-client-launcher/
│
├── assets/
│   └── icons/
│       └── otserv-client-launcher.ico
│
├── client/
│   └── ... (client files)
│
├── config.js
├── index.html
├── main.js
├── preload.js
├── renderer.js
├── style.css
└── .gitignore
\`\`\`

## 🏗️ Building the Application

1. Install \`electron-packager\`:
   \`\`\`bash
   npm install electron-packager --save-dev
   \`\`\`

2. Add a build script to \`package.json\`:
   \`\`\`json
   "scripts": {
     "start": "electron .",
     "build": "electron-packager . otserv-client-launcher --platform=win32 --arch=x64 --out=dist --icon=assets/icons/otserv-client-launcher.ico --overwrite"
   }
   \`\`\`

3. Run the build script:
   \`\`\`bash
   npm run build
   \`\`\`

The built application will be available in the \`dist\` folder.

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the project
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

Made by [caminha](https://github.com/lucas-caminha)
\`\`\`

