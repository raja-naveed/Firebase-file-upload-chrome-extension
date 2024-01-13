import { S3Client } from '@aws-sdk/client-s3';

// Set up the S3 client
const s3Client = new S3Client({
  region: 'YOUR_AWS_REGION', // Replace with your AWS region
  credentials: {
    accessKeyId: 'YOUR_ACCESS_KEY_ID',
    secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
  },
});

export default s3Client;
