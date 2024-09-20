# JetCabinControl

JetCabinControl is a user interface for private jet passengers. It allows them to control various aspects of the in-flight entertainment system (audio/video) as well as cabin functionalities such as lighting and temperature, through a tablet interface.

## Features

- **In-Flight Entertainment**: Manage audio and video routing.
- **Cabin Control**: Adjust lighting and temperature.
- **Responsive Interface**: Clean design optimized for tablets.
- **Modularity**: The code is organized to easily add new features (e.g., seat control, curtains, etc.).

## Project Structure

Here is the project structure:

```plaintext
JetCabinControl/
├── public/
│   ├── assets/
│   │   ├── images/           # Images, icons, logos
│   │   ├── fonts/            # Custom fonts
│   │   ├── videos/           # Video files
│   │   └── audio/            # Audio files
│   ├── css/
│   │   ├── style.css         # Main project styles
│   │   └── reset.css         # Reset default browser styles
│   ├── js/
│   │   ├── script.js         # Main JavaScript file
│   │   ├── modules/          # JavaScript modules to organize code
│   │   └── lib/              # External JavaScript libraries (e.g., jQuery)
│   ├── vendor/
│   │   ├── css/              # External CSS libraries (Bootstrap, Tailwind, etc.)
│   │   └── js/               # External JavaScript libraries
│   └── index.html            # Main HTML page
├── src/
│   ├── components/           # Reusable components (UI, JS)
│   └── views/                # HTML views if needed
├── config/
│   ├── webpack.config.js     # Webpack configuration
│   └── parcel.config.js      # Parcel configuration
├── README.md                 # Project documentation
├── .gitignore                # Files and folders to ignore in Git
└── package.json              # Project dependencies (if using npm or yarn)

Prerequisites
Before you begin, make sure you have the following installed:

- Node.js (version 12+)
- npm or yarn

Installation
Clone this repository to your local machine:

```bash
git clone https://github.com/your_username/JetCabinControl.git
```

Navigate to the project directory:

```bash
cd JetCabinControl
```

Install the dependencies:

If you're using **npm**:

```bash
npm install
```

If you're using **yarn**:

```bash
yarn install
```

Usage
To run the project locally, use a static server or serve it with a tool like parcel or webpack-dev-server.

If you're using **Parcel**:

```bash
parcel public/index.html
```

If you're using **Webpack**:

```bash
npm run start
```

Open your browser at the following address: `http://localhost:1234/` (for Parcel) or according to your Webpack configuration.

Development
### Adding Features
If you want to add new features, follow these steps:

- Add your JavaScript code in `public/js/modules/` to keep the code modular.
- Add additional CSS files in `public/css/` if needed.
- Use components in `src/components/` to reuse code across different parts of the interface.

### Build and Optimization
To optimize the project for production, use Webpack or Parcel to minify and bundle files:

For **Parcel**:

```bash
parcel build public/index.html
```

For **Webpack** (if configured):

```bash
npm run build
```

Contribution
If you want to contribute to the project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your_feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push the branch (`git push origin feature/your_feature`).
5. Open a Pull Request.

License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
