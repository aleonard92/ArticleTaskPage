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
                        aws s3 rm s3://landig-leht-web-site/ --recursive
                        aws s3 cp build/ s3://landig-leht-web-site/ --recursive --metadata-directive REPLACE --expires 2034-01-01T00:00:00Z --acl public-read --cache-control max-age=2592000,public
                        aws cloudfront create-invalidation --distribution-id E1GTUHFOK9YVM1 --paths "/*"
                    '''
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
