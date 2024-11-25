#✨ My Unique CLI Tool
  A simple CLI tool built using Node.js to greet users and display personal information. With colorful outputs powered by chalk and efficient command handling via commander, this project serves as a practical      example of creating a custom CLI tool.


###🌟 Features
  Greet: A personalized greeting based on the user's input.
  Info: Display key personal details, including work, social media, and contact info.


### 🚀 Getting Started

  You can follow these steps to set up and use the CLI tool.

###📂 1. Clone the Repository

  First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/my-unique-cli-tool.git
cd my-unique-cli-tool
```

###🛠 2. Initialize the Project
  Create a package.json file by running the following command:

```bash
npm init -y
```
  This command initializes the project and creates a package.json file, which will manage the project’s dependencies.

###📦 3. Install Dependencies
  Install the necessary dependencies required for this CLI tool:

```bash
npm install chalk commander
```
  This installs the chalk and commander packages, which are used for colorful output and managing CLI commands, respectively.

### ✍️ 4. Create the CLI File

### ⚙️ 5. Make the Script Executable (Optional for Unix-based Systems)

### 🔗 6. Link the CLI Tool
  To make your CLI tool globally accessible from anywhere in your terminal, link it using:

```bash
npm link
```
  This command creates a symbolic link in the global node_modules directory, allowing you to use the my-cli-tool command from anywhere on your system


### 🌐 7. Publish the CLI Tool (Optional)
  If you'd like to share your CLI tool with others, you can publish it to the npm registry. First, make sure you're logged in to npm by running:

```bash
npm login
```
  Then, run the following command to publish the package:

```bash
npm publish
```
  This will upload your package to the npm registry, making it available for others to install using npm install my-unique-cli-too


### 📋 Usage

  Once you've set up your CLI tool, you can use the following commands:

### 1️⃣ Greet Command
  Greets the user with a customizable name. You can pass the --name argument to specify the name to greet.

```bash
my-cli-tool greet --name "Vishwa"
```
Output:
Hello, Vishwa!


### 2️⃣ Info Command
  Displays your personal information such as your work, social media, and contact details.

```bash
my-cli-tool info
```
Output:
```
╔══════════════════════════════════════════════════════════════════════╗
║                           My Info                                    ║
╠══════════════════════════════════════════════════════════════════════╣
║ Work: MCA Student at Marwadi University                              ║
║ Twitter: https://x.com/goswami_vi43561                               ║
║ GitHub: https://github.com/VishwaGoswami1407                         ║
║ LinkedIn: https://linkedin.com/in/vishwagoswami                      ║
║ Discord: Vishwa Goswami                                              ║
╚══════════════════════════════════════════════════════════════════════╝
```

### 🛠 Project Structure
📁 index.js or bin/card.js
  It contains the core CLI logic for handling commands.

📄 package.json
  Holds metadata about the project, including its name, dependencies, and commands.

📂 node_modules/
  Includes all installed dependencies.


### ⚙️ Development Workflow
  ### Install Dependencies:
    Run npm install to install required packages like chalk and commander.
  ### Build Commands:
    Could you define your custom commands and flags inside index.js or the relevant file?
  ### Link Your CLI Tool: 
    Run npm link to globally link the CLI tool and make it available across your system.  
  ### Publish:
    Optionally, if you'd like to publish your CLI tool on npm, run npm publish.
### 📜 License
    This project is licensed under the MIT License - see the LICENSE file for details.



Vishwa Goswami

🌐 GitHub
💼 LinkedIn
🐦 Twitter
🎮 Discord: Vishwa Goswami













