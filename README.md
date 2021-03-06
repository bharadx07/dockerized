<h1 align="center">Dockerized 🐳</h1>
<p align="center">Collection of Docker Learning Projects. This Repo Contains My Projects and Learnings.</p>
<h3 align="center">
  <a href="#">Docker Learnings</a>
  <span> · </span>
  <a href="#deploy">How To Properly Deploy A FullStack App</a>
</h3>


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


# Deploy
AKA How to Properly Deploy A FullStack App to AWS (Good Platform)

### Repo For My Version: https://github.com/bharadwajduggaraju/proper-fullstack-deployment
Example of how to deploy to the cloud properly. This uses React and Node, and everything is dockerized with NGINX for future proxying. Will use to deploy a full stack app. PRIVATE

### Example Repo For the Deployment Process: https://github.com/ashwin9798/node-react-nginx-docker-boilerplate
The Repo For A Good Starting Point and File Structure for a Full Stack App For Proper Deployment.


## Build and Test Locally

Make sure nothing is running on port 80 of your local machine

Run `docker-compose up --build` from the root of the project to spin up the containers

## Localhost Routes 
Backend: http://localhost:80/api/

Frontend: http://localhost:80/

## Setting up automated AWS Deployment (Elastic Beanstalk + CI/CD)

This project has pre-configured Terraform code that will create all our AWS infrastructure for us, and also create the CI/CD pipeline. There are a few manual steps to get everything working properly.

### Step 1: Download this repo as a zip, create your own git repository, and push to Github

Download the zip of this repo on your local machine. 

Then create an empty git repository inside with the `git init` command in the root directory. 

Also create a repository on Github that you will push to. Commit all the files and push to Github.

### Step 2: Run the initialization script
Run `./init.sh` in your terminal in the root directory, it will ask you for the following information:

**AWS Account ID:** The AWS Account ID is found by logging into your AWS console and clicking the dropdown next to your name. The number next to 'My Account' is the account ID.

**AWS Region:** Where you want your application to be hosted. A list of regions can be found here: https://howto.lintel.in/list-of-aws-regions-and-availability-zones/. Type in the code corresponding to the region you want to deploy to (us-west-1, us-east-1, etc.)

**Name of application:** What you'd like to name your application. All the AWS services that we will provision will have this in the prefix, so make it informative and related to the product.

### Step 3: Fill in terraform.tfvars

After you answer these questions, you will see a new file created in the terraform folder called `terraform.tfvars`, with a few fields already populated. You'll need to fill in the rest.

**aws_access_key** and **aws_secret_key**: follow the steps here: https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys to get access keys that will allow Terraform to access your AWS account and create everything.

**github_repo_name**: name of the Github repo that you created for your project

**github_username**: your GitHub username

**github_oauth_token**: Visit your GitHub settings page then go to -> Developer Settings -> Personal Access Tokens. Create a new access token and call it whatever you want. Just make sure it has access to the repo (check the repo checkbox). Copy the generated OAuth token into the tfvars file.

**NOTE:** If you want to change the aws_region, application_name, or aws_account_id, rerun the init script so that the variables are consistent everywhere.

### Step 4: Install Terraform

If you don't have Terraform installed already, follow the steps here: https://learn.hashicorp.com/tutorials/terraform/install-cli

Or use Homebrew: `brew install terraform`

### Step 5: Run Terraform to create the AWS infrastructure

`cd terraform` 

and then run the following commoand:

`terraform init`

After you run `terraform init`, there will likely be errors due to issues with 3rd party code. To fix these, make the following replacement:

`required_version  "~> 0.12.0"` --> `required_version = ">= 0.12.0, < 0.14.0"`

Make the above change in the following files:
- terraform/.terraform/modules/build.codebuild/versions.tf
- terraform/.terraform/modules/build.codebuild.label/versions.tf
- terraform/.terraform/modules/build.label/versions.tf

Rerun `terraform init`

Finally, run:

`terraform apply`

type "yes" when prompted to create the AWS infrastructure.

## Deployment

Push to the master branch of your repo and CI/CD takes care of the rest!