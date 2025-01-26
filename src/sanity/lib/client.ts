import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: "ijm6r3v6", // Replace with your actual project ID
  dataset: "production", // Your dataset name
  apiVersion: "2023-01-01", // Use the correct API version
  useCdn: true, // Use CDN for caching
});