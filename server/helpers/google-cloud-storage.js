const GoogleCloudStorage = require('@google-cloud/storage');
  
const GOOGLE_CLOUD_PROJECT_ID = process.env.GC_ID; // Replace with your project ID
const GOOGLE_CLOUD_KEYFILE = process.env.GCPATH; // Replace with the path to the downloaded private key

const storage = new GoogleCloudStorage.Storage({
  projectId: GOOGLE_CLOUD_PROJECT_ID,
  keyFilename: GOOGLE_CLOUD_KEYFILE,
});

module.exports = {
    storage, 
    getPublicUrl : (bucketName, fileName) => `https://storage.googleapis.com/${bucketName}/${fileName}`
}