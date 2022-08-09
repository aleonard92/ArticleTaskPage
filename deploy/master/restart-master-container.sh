#!/bin/bash
set -x
set -e
set -o pipefail

set -a
. env.aws
set +a

#stop old docker
sudo docker stop landing-leht

#remove old image
sudo docker rmi 045641265786.dkr.ecr.us-east-1.amazonaws.com/landing-leht:master

#loging aws ecr
sudo $(sudo docker run --rm \
-e AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_PROD_ACCOUNT \
-e AWS_SECRET_ACCESS_KEY=$AWS_SECRET_KEY_PROD_ACCOUNT \
-e AWS_DEFAULT_REGION=us-east-1 \
banst/awscli ecr get-login --no-include-email --region us-east-1)

#pulling new images from aws ecr
sudo docker pull 045641265786.dkr.ecr.us-east-1.amazonaws.com/landing-leht:master

#start new container
sudo docker run -d --rm --mount='type=bind,source=/home/ubuntu/nginx/,target=/etc/nginx' --name landing-leht -p 80:80 045641265786.dkr.ecr.us-east-1.amazonaws.com/landing-leht:master
