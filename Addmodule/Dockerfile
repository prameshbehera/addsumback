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

# Make port 3001 available to the world outside this container
EXPOSE 3001

# Define environment variable
ENV PORT=3001

# Run add-service.js when the container launches
CMD ["node", "add-service.js"]
