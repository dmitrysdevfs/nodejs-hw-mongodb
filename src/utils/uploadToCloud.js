import fs from 'node:fs/promises';
import cloudinary from 'cloudinary';
import { getEnvVar } from './getEnvVar.js';

cloudinary.v2.config({
  cloud_name: getEnvVar('CLOUD_NAME'),
  api_key: getEnvVar('API_KEY'),
  api_secret: getEnvVar('API_SECRET'),
});

export const uploadToCloud = async (filePath) => {
  const result = await cloudinary.v2.uploader.upload(filePath);
  await fs.unlink(filePath);
  return result.secure_url;
};
