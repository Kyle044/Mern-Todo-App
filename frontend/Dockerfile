# Use Node.js for building the React app
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire React project
COPY . .

# Expose frontend port
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]