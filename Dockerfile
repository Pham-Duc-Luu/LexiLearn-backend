# Use an official Node.js image as the base image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy the entire application
COPY . .

# Build the application
RUN npm run build

EXPOSE 5050

# Command to run the application
CMD ["npm", "run", "start"]
