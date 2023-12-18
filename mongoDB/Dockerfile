FROM mongo:6.0

WORKDIR /usr/src/app
# Copy the seeding script into the container
COPY db-seed.sh ./mongo-seed.sh

# Make the script executable
RUN chmod +x ./mongo-seed.sh

# Execute the script when the container starts
CMD ["/usr/src/app/mongo-seed.sh"]