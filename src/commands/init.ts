import path from 'path';
import { createProjectStructure } from '../utils/fileSys';

export async function handleInit(projectName: string) {
  const projectPath = path.join(process.cwd(), projectName);
  await createProjectStructure(projectPath, projectName);
}
