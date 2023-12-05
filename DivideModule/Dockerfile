# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Copy all local files to the image
COPY . .

# Make port 3002 available to the world outside this container
EXPOSE 3003

# Define environment variable
ENV PORT=3003

# Run devide-service.js when the container launches
CMD ["node", "devide-service.js"]
