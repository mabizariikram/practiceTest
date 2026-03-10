pipeline {
    agent{
                docker{
                    //ajouter l'image docker de playwright(node,playwright,chromium,firefox,webkit)
                    image 'mcr.microsoft.com/playwright:v1.54.0-noble'
                    args '-u root --entrypoint='
                    
                }
            }

    stages {
        stage('install dependencies') {
            steps {
                echo 'Building...'
                // voir la version de npm pour vérifier que l'image est bien utilisée
                sh 'npm --version'
                // installer les dépendances du projet
                sh "npm install"

            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                // lancer les tests avec playwright
                sh "npx playwright test"
            }
        }
        
    }
}