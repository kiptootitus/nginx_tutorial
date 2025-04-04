# Nginx_tutorial with docker, docker-compose

## Setup
1. Install Docker
2. Install node.js `for linux`, use the following command:
    ```bash
    curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
    ```
   or run below script:
    ```bash
     chmod +x nodejs_download.sh
    ./nodejs_download.sh
    ```
3. Install docker-compose

4. Clone this repository
5. Run `docker-compose up --build -d` in the terminal
6. Access the application at `http://localhost:3001`
7. To stop the application, run `docker-compose down`

## Nginx Configuration
- The Nginx configuration file is located at `nginx/default.conf`
- The default server listens on port 80 and proxies requests to the backend server on port 3000
- The backend server is defined in the `docker-compose.yml` file

## Nginx Modules
#### `events`
    – Handles general connection processing, including connection limits and worker processes. Essential for managing incoming client connections.

#### `http`
    – Governs HTTP traffic, covering web requests, proxying, caching, and load balancing.

#### `mail` 
    – Manages email-related traffic, including SMTP, IMAP, and POP3 proxying.

#### `stream`
    – Handles TCP and UDP traffic, useful for managing low-level networking like database connections and custom protocols.

# Events Module
- The `events` module is responsible for handling connections and managing worker processes.    

## listen 
    – Specifies the IP address and port where the server will accept requests (e.g., listen 80; for HTTP or listen 443 ssl; for HTTPS).

## server_name 
    – Defines the domain or IP address the server should respond to (e.g., server_name example.com www.example.com;).

# Location
    Determines how specific request types (like certain URLs or file types) should be handled. For example:
        1. location /images/ {} can handle all requests under /images/.
        2. location ~* \.(jpg|png|gif)$ {} can handle image files.

## proxy_pass
    Forwards requests to another server or service, typically used for load balancing or reverse proxying. For example:
        1. proxy_pass http://backend:3000; forwards requests to the backend server on port 3000.
        2. proxy_pass http://localhost:8080; forwards requests to a local service on port 8080.
### Upstream Block
    Defines backend servers to which Nginx forwards requests (e.g., an application server like Node.js, Django, or a database).

#### "Upstream" Name
    Comes from the direction of data flow; requests move "upstream" from Nginx to the backend.


#### Upstream Servers 
    Handle requests from clients by forwarding them to an application or database server.

#### Downstream Servers
    The traffic flowing back from the upstream servers to the client is called "downstream."