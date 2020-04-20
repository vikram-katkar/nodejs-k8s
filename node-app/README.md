# node_app
Hello World Node App

Usage

```sh
# Build docker image
docker build -t node .

# Run docker image
docker run -d -p 8080:8080 --name hello-world-node node

# Access the app
curl localhost:8080
```

```sh
# Stop container and remove
docker rm hello-world-node -f
```

