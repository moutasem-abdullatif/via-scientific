## Description

This comprehensive Fullstack application is designed to manage and analyze vast amounts of gene expression data. It enables users to perform
queries and statistical analyses to identify outliers and other significant patterns. The application is built with a `node.js` REST API and
a `next.js` frontend, utilizing `MongoDB` for data storage and `nginx` for managing virtual hosts.

## Installation

Before initiating the application, please ensure the following prerequisites are met:

- A functioning Docker client should be available.
- To align with project specifications, the `backend` should be mapped to `x.xyz.com` and the `frontend` to `y.xyz.com`. To facilitate this,
  configure your virtual hosts appropriately:
  - For MacOS/Linux users, a script named `hosts.sh` in the root directory is provided. Execute it with `sudo sh ./hosts.sh` to
    automatically set up your hosts file.
  - Windows users will need to modify their hosts file via Powershell. Guidance for this process is beyond the scope of this document 😁.

## Running the Application

- Execute `docker-compose up -d` to begin building the Docker images and to start the containers in detached mode.
- Upon completing the above steps, the API will be accessible at `x.xyz.com` (verify by issuing a GET request), and the frontend will be
  available at `y.xyz.com`.

## Project Structure Overview

- `API`: This directory contains the `node.js` REST API backend (for detiled information about the API endpoints and usage refer to the
  [API](./api/) folder).
- `frontend`: This directory hosts the `next.js` frontend application.
- `MongoDB`: Includes the database seeding script (`js` script, replacing the initial `bash` script) and the `db.json` database file, which
  was converted from the `.tsv` file provided in the task email.
  - _Note_: The seeding process was switched from a `bash` script to a `js` script due to connection issues encountered with MongoDB in
    `--fork` mode.
- `nginx`: This directory contains the server configuration for the virtual hosts. These configurations are copied into the Docker container
  and constitute the primary nginx path.
