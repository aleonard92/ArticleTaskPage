pipeline 
{
    agent {label 'master'}
    environment {
        AWS_ACCESS_KEY_PROD_ACCOUNT = credentials('FYSELF_AWS_ACCESS_KEY_PROD_ACCOUNT')
        AWS_SECRET_KEY_PROD_ACCOUNT = credentials('FYSELF_AWS_SECRET_KEY_PROD_ACCOUNT')
    }
    stages 
    {
        stage('Deploy Dev') {
		    when {expression { env.BRANCH_NAME == 'master' }}
                agent any
                tools {
                    nodejs 'node_v12.10.0'
                }
                steps {
				    sh '''
                    #!/bin/bash

                    npm cache clean --force #to clean cache
                    npm install -g yarn

                    yarn cache clean #to clean cache
					yarn --update-checksums #--verbose #to clean cache

                    rm -rf package-lock.json
                    echo Deploying ....
                    '''
	                withNPM(npmrcConfig:'da305a47-c516-4bf6-a8c9-1f60f35df82a') {
    	                echo "Performing npm build..."
    	                sh '''
    	                yarn install #--verbose
    	                yarn build
    	                '''
    	            }
    	            sh'''
                        docker build -f Dockerfile -t landing-leht:master .

                        sudo $(aws ecr get-login --no-include-email --region us-east-1)

                        docker tag landing-leht:master 045641265786.dkr.ecr.us-east-1.amazonaws.com/landing-leht:master
                        docker push 045641265786.dkr.ecr.us-east-1.amazonaws.com/landing-leht:master
                    '''

                withCredentials([file(credentialsId: 'FYSELF_NEXO_SERVER_ACCESS_PEM', variable: 'keyfile')])
                {
                        sh '''
                        #get aws ecr credential
                        ssh -i ${keyfile}  ubuntu@ec2-44-204-63-98.compute-1.amazonaws.com "cat <<EOF >>env.aws
AWS_ACCESS_KEY_PROD_ACCOUNT=$AWS_ACCESS_KEY_PROD_ACCOUNT
AWS_SECRET_KEY_PROD_ACCOUNT=$AWS_SECRET_KEY_PROD_ACCOUNT
AWS_REGION=us-east-1
EOF"

                        #restar container
                        #ssh -i ${keyfile}  ubuntu@ec2-44-204-63-98.compute-1.amazonaws.com 'bash -s' < deploy/master/restart-master-container.sh

                        #remove credentials
                        #ssh -i ${keyfile}  ubuntu@ec2-44-204-63-98.compute-1.amazonaws.com rm env.aws
                        '''
                }
				}
		}
		stage('Deploy Prod')
        {
            when {expression { env.BRANCH_NAME == 'masqwqter' }}
            agent any
            tools
            {
                nodejs 'node_v12.10.0'
            }
            steps
            {

                sh '''
                      cat <<EOF >>env.aws
AWS_ACCESS_KEY_PROD_ACCOUNT=$AWS_ACCESS_KEY_PROD_ACCOUNT
AWS_SECRET_KEY_PROD_ACCOUNT=$AWS_SECRET_KEY_PROD_ACCOUNT
AWS_REGION=us-east-1
EOF
                    '''
                //sh "bash -v deploy/master/deploy-app-master-dps-nexo.sh"

                withCredentials([file(credentialsId: 'FYSELF_NEXO_SERVER_ACCESS_PEM', variable: 'keyfile')])
                {
                        sh '''
                        #get and upload nginx configuration
                        aws s3 cp s3://dps-private-data/nginx_nexo/ nginx --recursive
                        sudo ssh-keygen -R ec2-54-204-251-85.compute-1.amazonaws.com
                        sudo ssh-keygen -R 54.204.251.85
                        ssh -i ${keyfile}  ubuntu@ec2-54-204-251-85.compute-1.amazonaws.com "mkdir -p /home/ubuntu/nginx;rm -r /home/ubuntu/nginx/"
                        scp -i ${keyfile} -r nginx ubuntu@ec2-54-204-251-85.compute-1.amazonaws.com:/home/ubuntu/nginx/

                        #get aws ecr credential
                        ssh -i ${keyfile}  ubuntu@ec2-54-204-251-85.compute-1.amazonaws.com "cat <<EOF >>env.aws
AWS_ACCESS_KEY_PROD_ACCOUNT=$AWS_ACCESS_KEY_PROD_ACCOUNT
AWS_SECRET_KEY_PROD_ACCOUNT=$AWS_SECRET_KEY_PROD_ACCOUNT
AWS_REGION=us-east-1
EOF"

                        #restar container
                        #ssh -i ${keyfile}  ubuntu@ec2-54-204-251-85.compute-1.amazonaws.com 'bash -s' < deploy/master/restart-master-dps-nexo.sh

                        #remove credentials
                        #ssh -i ${keyfile}  ubuntu@ec2-54-204-251-85.compute-1.amazonaws.com rm env.aws
                        '''
                }
            }
		}
	}
	post
	{
            success 
            {
                sh '''
                       curl -X POST -H "Content-Type: application/json"  https://api.telegram.org/bot1285826100:AAHHfIvTg2GKf1pvTds_j5Bd6IsEcHg-Q3Y/sendMessage  -d '{"chat_id": "-1001404537016", "text": "The landing leht ( '$BRANCH_NAME' ) job execution was successfully", "disable_notification": true}'
                   '''                    
            }
            failure 
            {
                sh '''
                      curl -X POST -H "Content-Type: application/json"  https://api.telegram.org/bot1285826100:AAHHfIvTg2GKf1pvTds_j5Bd6IsEcHg-Q3Y/sendMessage  -d '{"chat_id": "-1001404537016", "text": "The landing leht ( '$BRANCH_NAME' ) job execution was failure", "disable_notification": true}'
                        '''
            }
            aborted
            {
                sh '''
                            curl -X POST -H "Content-Type: application/json"  https://api.telegram.org/bot1285826100:AAHHfIvTg2GKf1pvTds_j5Bd6IsEcHg-Q3Y/sendMessage  -d '{"chat_id": "-1001404537016", "text": "The landing leht ( '$BRANCH_NAME' ) job execution was aborted", "disable_notification": true}'
                '''
            }
    }
}
