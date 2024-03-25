/**
 * We pass the appropriate Data and URLs json, according to the environment we are running (staging - production)
 */

import * as productionURLs from './productionURLs.json'
import * as productionData from './productionData.json'
import * as stagingURLs from './stagingURLs.json'
import * as stagingData from './stagingData.json'

interface UserCredentials {
    username: string
    password: string
}

interface EnvironmentData {
    users: { [key: string]: UserCredentials }
    // Add more environment dependent variables as needed
}

interface EnvironmentURLs {
    URLs: { [key: string]: string }
    APIs: { [key: string]: string }
    // Add more environment dependent variables as needed
}

export const ENVIRONMENT: string = 'production'
export const ENV_DATA: EnvironmentData = ENVIRONMENT === 'production' ? productionData : stagingData
// export const DOMAIN: string = ''


// Handle staging and production URLs
let envURLs: EnvironmentURLs

if (ENVIRONMENT === 'production') {
    // Load production URLs from JSON file
    envURLs = productionURLs
}
else {
    // Load staing URLs from JSON file
    envURLs = stagingURLs

    /*      In case we have multiple staging environments we use the code below to dynamically replace
        the part that changes. Here the part that changes is the 'stg'

    // Replace 'stg' with the currect domain for staging environment (in case of multiple staging environemnts)
    const urls: { [key: string]: string } = {}
    for (const [key, value] of Object.entries(envURLs.urls)) {
        urls[key] = value.replace('stg', DOMAIN)
    }
    envURLs.urls = urls
    */
}
export const ENV_URLS: EnvironmentURLs = envURLs