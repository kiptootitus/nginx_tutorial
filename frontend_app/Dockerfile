FROM node:18-alpine

# Set the working directory
WORKDIR /app


# Copy the rest of the application code
COPY server.js .

COPY public ./public
COPY index.html ./

# Copy package.json and package-lock.json
COPY package*.json ./
# Install dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 3000

# Start the application

CMD ["node", "server.js"]