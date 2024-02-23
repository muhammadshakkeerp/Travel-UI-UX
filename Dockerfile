FROM node:alpine 

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install --silent

# Copy the rest of the source code into the container
COPY . .

# Build the Next.js application
RUN npm run build

# Stage 2: Serve the built application
FROM node:alpine

# Set working directory in the container
WORKDIR /app

# Copy built files from the builder stage into the final image
COPY --from=builder /app/.next ./.next

# Install only production dependencies (optional)
COPY --from=builder /app/node_modules ./node_modules

# Expose port 3000
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
