# nodejs-k8s

A Hello world Node JS app.
Application code is in [node-app](node-app).
Kubernetes component is present in [k8s.yml](k8s.yml).
This contains:
- Deplyment
- SVC (Loadbalancer Type)
- HPA

Instruction to Docker Build:
```
# Make sure AWS-CLI is installed and configured
# Login to ECR
$(aws ecr get-login --region $AWS_DEFAULT_REGION --no-include-email)
cd node-app
# Build Docker image
docker build -t nodejs .
# Tage Docker image to ECR link
docker tag nodejs <ecr-link>
# Push the image to ECR
docker push <ecr-link>
```
Now edit the image URL in [k8s.yml](k8s.yml#L21). This should be automated via CI/CD pipeline.
Before we Apply this K8s manifest we need to create ImagePull Secret, so that kubernetes will be able
to pull the image. 

from last steps, we already loged in to ECR. This has created a config in ~/.docker/config.json
```
kubectl create secret generic regcred \
    --from-file=.dockerconfigjson=/root/.docker/config.json \
    --type=kubernetes.io/dockerconfigjson
```
change the path to config.json accordingly.

This will create a Secret with the name **regcred**.
We are good to go for deployement.

```
# cd to root directory
cd .. 
# Make sure kubectl is installed and configured with cluster
kubectl apply -f ./k8s.yml
# to see the deployed artifcats
kubectl get all
```
