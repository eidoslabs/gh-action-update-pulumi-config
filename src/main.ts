import * as core from '@actions/core';

async function run(): Promise<void> {
  try {
    const repo: string = core.getInput('repo');
    core.info(`Repo: ${repo}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
