FROM mongo

# Copy the seeding script into the container
COPY db-seed.sh db.json /

# Make the script executable
RUN chmod +x db-seed.sh

# Execute the script when the container starts
# CMD ["/db-seed.sh"]
