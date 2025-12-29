# TechFlow - Fullstack Project

A multi-module fullstack application with Spring Boot backend and React + Vite frontend, featuring a modern Endava-style UI design.

## 🚀 Live Demo

Deployed on Heroku: *Coming soon*

## 📁 Project Structure

```
project/
├── backend/                 # Spring Boot module
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/       # Java source code
│   │   │   └── resources/  # Configuration & static files
│   │   └── test/           # Tests
│   └── pom.xml             # Maven module config
├── frontend/               # React + Vite module
│   ├── src/                # React components
│   ├── public/             # Static assets
│   ├── package.json        # npm config
│   └── vite.config.ts      # Vite config
├── pom.xml                 # Parent Maven POM
├── Procfile                # Heroku process file
├── system.properties       # Java version for Heroku
├── build.sh                # Build script
└── README.md
```

## ✨ Features

- **Modern UI Design** - Dark theme with purple accents, inspired by Endava
- **Smooth Animations** - Fade-in effects, hover states, pulse indicators
- **Responsive Layout** - Works on all screen sizes
- **Spring Boot API** - RESTful backend with health endpoint
- **React + TypeScript** - Type-safe frontend with Vite

## 🛠 Tech Stack

### Backend
- Java 17
- Spring Boot 3.2
- Maven

### Frontend
- React 18
- TypeScript
- Vite
- CSS3 with animations

## 📋 Requirements

- **Java**: 17+
- **Maven**: 3.8+
- **Node.js**: 18+
- **npm**: 9+

## 🏃 Running Locally

### Quick Start (Development)

**Terminal 1 - Backend:**
```bash
cd backend
mvn spring-boot:run
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm install
npm run dev
```

- Backend: http://localhost:8080
- Frontend: http://localhost:5173

### Production Build

```bash
chmod +x build.sh
./build.sh
java -jar backend/target/backend-1.0.0-SNAPSHOT.jar
```

Then open http://localhost:8080

## 🚀 Deploy to Heroku

### Prerequisites
- Heroku CLI installed
- Heroku account

### Deployment Steps

```bash
# Login to Heroku
heroku login

# Create app
heroku create your-app-name

# Set buildpacks
heroku buildpacks:add heroku/nodejs
heroku buildpacks:add heroku/java

# Deploy
git push heroku main

# Open app
heroku open
```

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |

## 🎨 UI Sections

1. **Header** - Fixed navigation with blur effect on scroll
2. **Hero** - Main landing section with animated gradients
3. **Industries** - Grid of industry cards with hover effects
4. **Capabilities** - Company capabilities showcase
5. **Highlights** - News and reports cards
6. **Partners** - Animated partner logos carousel
7. **CTA** - Call-to-action for careers
8. **Footer** - Links and social media

## 📝 License

MIT License

## 👤 Author

Created with ❤️ for portfolio purposes
