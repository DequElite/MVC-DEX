import { createServiceFiles } from '../utils/fileSys';

export async function handleAdd(serviceName: string) {
  const projectPath = process.cwd();
  await createServiceFiles(serviceName, projectPath);
}
