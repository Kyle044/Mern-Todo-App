# Use Node.js on Alpine for a lightweight image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install && npm install -g nodemon && npm install express mongoose cors dotenv

# Copy the rest of the app
COPY . .

# Expose backend port
EXPOSE 5000

# Start the backend
CMD ["node", "server.js"]