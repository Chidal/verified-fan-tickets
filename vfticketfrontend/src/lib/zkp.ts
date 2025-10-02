import { AIRKit } from './moca';

export async function generateZKP({ credentialType, threshold }: { credentialType: string; threshold: number }) {
  return await AIRKit.generateZKP({ credentialType, threshold });
}