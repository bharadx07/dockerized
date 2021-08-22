<h1 align="center">Dockerized 🐳</h1>
<p align="center">Collection of Docker Learning Projects. This Repo Contains My Projects and Learnings.</p>

## 1. The Dockerfile. (Examples in each repo).
#### Commands to build the image.

## 2. Docker Build
### ``` docker build -t getting-started .```
#### Build our image with the name "getting-started"

## 3. Docker Run
### ``` docker run -dp 3000:3000 getting-started```
### ``` docker run -dp 3000:3000 -v todo-db:/etc/todos getting-started```
#### Run the container "getting-started" on port 8080.

## 4. Docker Ps
### ``` docker ps```
#### List the running docker containers with their ids.

## 5. Docker Stop
### ``` docker stop <container-id>```
#### Stop a certain docker container from running.

## 6. Docker Remove
### ``` docker rm <container-id>```
#### Remove a docker container from the list. (Or do from the GUI - Docker Desktop)

## 7. Docker Login
### ``` docker login -u <username>```
#### Login to your docker hub account locally.

## 8. Docker Tag
### ``` docker tag <container-name> <username>/<container-name>```
#### Tag a container as yours with a name for pushing.

## 9. Docker Push
### ``` docker push <username>/<container-name>```
#### Push your container to docker hub.

## 10. Play
https://labs.play-with-docker.com/ - Use to test online containers.

## 11. Docker Volume
### ``` docker volume create todo-db```
#### Create a location for files to be persisted throughout different container runs locally.

## 12. Bind Mounts
``` docker run -dp 3000:3000 ` -w /app -v "$(pwd):/app" ` node:12-alpine ` sh -c "yarn install && yarn run dev" (Run on Powershell)```
#### Persistent DB with live reload and control over volume.

## 13. Database Connections
#### https://github.com/docker/getting-started/blob/master/docs/tutorial/multi-container-apps/index.md - My SQL
#### https://www.youtube.com/watch?v=-pTel5FojAQ - PERN Stack Docker
#### https://www.youtube.com/watch?v=0B2raYYH2fE - Mern
#### https://www.youtube.com/watch?v=A9bA5HpOk30 - PostgreSQL Only

## 14. Docker Scan
### ```docker scan <container-name>```
#### Scan your container for security issues.

## 15. Docker Image Historyc
### ```docker image history <container-name>```
#### View the history or layers of your container.

## 16. Docker Caching and Ignoring.
##### https://github.com/docker/getting-started/blob/master/docs/tutorial/image-building-best-practices/index.md#layer-caching

## 17. Orchestration
* Swarm
* Kubernetes