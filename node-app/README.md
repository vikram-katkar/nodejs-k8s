# node_app
Hello World Node App

Usage

```sh
# Build docker image
docker build -t node .

# Run docker image
docker run -d -p 3000:3000 --name hello-world-node node

# Access the app
curl localhost:3000
```

```sh
# Stop container and remove
docker rm hello-world-node -f
```

