pipeline {
    agent{
                docker{
                    //ajouter l'image docker de playwright(node,playwright,chromium,firefox,webkit)
                    image 'mcr.microsoft.com/playwright:v1.58.2-noble'
                    
                    args '-u root --entrypoint='
                    
                }
            }
            //ajout des paramètres pour le pipeline
    parameters {
        choice(name: 'BROWSER', choices: ['chromium', 'firefox', 'webkit'], description: 'choisir le navigateur pour les tests ')
        booleanParam(name: 'ALLURE', defaultValue:false, description: 'choisir si on veut générer le rapport allure ou pas  ')
        choice(name:'TAG', choices: ['@regression', '@smoke', '@e2e'], description: 'choisir le tag pour les tests ')
        }


    stages {
        stage('install dependencies') {
            steps {
                echo 'Building...'
                // voir la version de npm pour vérifier que l'image est bien utilisée
                sh 'npm --version'
                // installer les dépendances du projet
                sh "npm install"
                // installer les navigateurs pour playwright
                sh "npx playwright install"

            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                // lancer les tests avec playwright
                //sh "npx playwright test"
                script{
                    switch (params.BROWSER) {
                        case "chromium":
                                if(params.ALLURE){
                                sh "npx playwright test --project=chromium --grep ${params.TAG} --reporter=allure-playwright"
                            }   else {
                                sh "npx playwright test --project=chromium --grep ${params.TAG}"
                                
                            }
                                break;
                        case "firefox":
                            if(params.ALLURE){
                                sh "npx playwright test --project=firefox --grep ${params.TAG} --reporter=allure-playwright"
                            }   else {  
                            sh "npx playwright test --project=firefox --grep ${params.TAG}"
                            }
                            break;

                        default :
                        if(params.ALLURE){
                                sh "npx playwright test --project=webkit --grep ${params.TAG} --reporter=allure-playwright"
                            }   else {
                            sh "npx playwright test --project=webkit --grep ${params.TAG}"
                            }
                            break;

                       
                    }
                }
                
            }
        }
        
    }
}