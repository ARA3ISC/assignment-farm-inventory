# Use Node.js as a base image
FROM node:22.3.0

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

RUN npm install

# Copy the rest of the application code
COPY . .


EXPOSE 5173

# Start the React development server
CMD ["npm", "run", "dev"]

