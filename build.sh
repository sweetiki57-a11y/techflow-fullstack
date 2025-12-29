#!/bin/bash
set -e

echo "Building frontend..."
cd frontend
npm install
npm run build

echo "Copying frontend to backend static folder..."
rm -rf ../backend/src/main/resources/static
mkdir -p ../backend/src/main/resources/static
cp -r dist/* ../backend/src/main/resources/static/

echo "Building backend..."
cd ../backend
mvn clean package -DskipTests

echo "Build complete!"
echo "Run with: java -jar backend/target/backend-1.0.0-SNAPSHOT.jar"
