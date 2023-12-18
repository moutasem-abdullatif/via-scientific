# Start MongoDB in the background
# mongod --fork --logpath /var/log/mongod.log

# Wait for MongoDB to start
# sleep 5

# Import the JSON file
# mongoimport --db viaScientificDB --collection genomics --file ./db.json --jsonArray 

# Keep the container running
# tail -f /dev/null