# Scooter

## Description

Fetches the closest `x` scooters for a given position (specified by latitude and longitude) within `y` meters and plot them on a map.

## Setup

### Web

- `yarn install`
- Set environment variable
  - `REACT_APP_GOOGLE_API_KEY`: Google API key with Maps JavaScript API enabled
  - `REACT_APP_API_URL`: API URL

### Server

- `yarn install`
- Set environment variable
  - `MYSQL_HOST`
  - `MYSQL_USER`
  - `MYSQL_PORT`
  - `MYSQL_PASSWORD`

## Discussion

To plot all the scooters in Singapore (hundreds of thousands) for the operations team to understand where all the scooters are currently at, we can utilise the following strategies to optimise usability, performance and scalability:

### Web

- When viewing the entire Singapore map (no zoom), split map into multiple uniform regions and display the total count in each region (instead of displaying all the markers) to give the operators an overall view of scooter distribution
- Operators can zoom in to reveal precise locations of scooters

### Server

- With stateless architecture, start multiple server instances with NodeJS cluster module. Create multiple cloud servers with load balancer for further scaling
- Enable GET request caching via Nginx and CloudFront

### Database

- Master-Slave Replication to distribute read-only queries across multiple replicated databases
- Use in-memory database if server has sufficient memory
