pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/sanjay101103/MY-Portfolio.git'
            }
        }

        stage('Deploy to IIS') {
            steps {
                bat '''
                xcopy "%WORKSPACE%\\*" "C:\\inetpub\\wwwroot\\" /E /Y /I
                iisreset
                '''
            }
        }
    }
}
