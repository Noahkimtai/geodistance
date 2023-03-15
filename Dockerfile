# Dockerfile

# Base image
FROM ruby:3.0.2

# Install dependencies
RUN apt-get update && apt-get install -y nodejs postgresql-client

# Set working directory
WORKDIR /geodistance

# Copy Gemfile and Gemfile.lock and install gems
COPY Gemfile Gemfile.lock ./
RUN bundle install --binstubs --jobs 4 --retry 3

# Copy package.json and package-lock.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install --check-files

# Copy the rest of the application code
COPY . .

# Precompile assets
RUN bundle exec rake assets:precompile

# Start Rails server
CMD ["rails", "server", "-b", "0.0.0.0"]