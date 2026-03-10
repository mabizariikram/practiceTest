pipeline {
    agent{
                docker{
                    image 'mcr.microsoft.com/playwright:v1.54.0-noble'
                    args '-u root --entrypoint='
                }
            }

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                // Add your build commands here
                sh 'npm --version'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                // Add your test commands here
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                // Add your deploy commands here
            }
        }
    }
}