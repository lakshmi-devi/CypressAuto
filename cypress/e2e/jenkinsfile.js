pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }
        stage('build') {
            steps {
                echo 'building'
            }
        }
        stage('deploy') {
            steps {
                echo 'deploy'
            }
        }
        stage('test') {
            steps {
                echo 'test'
            }
        }
         stage('release') {
            steps {
                echo 'release'
            }
        }
    }
}
