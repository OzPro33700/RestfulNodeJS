console.log('Before');
getUser(1, getRepositories);
console.log('After');

function getRepositories(user) {
  getRepositories(user.gitHubUsername, getCommits);
}

function getUser(id, callback) {
  setTimeout(() => {
    console.log('Reading a user from a database...');
    callback({ id: id, gitHubUsername: 'mosh' });
  }, 2000);

  return 1;
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log(`Getting repositories of ${username}`);
    callback(['repo1', 'repo2', 'repo3']);
  }, 2000);

  return 1;
}

function displayRepositories(repos, callback) {}

function getCommits(repos, callback) {
  getCommits(repo, displayCommits);
}

function displayCommits(commits) {
  console.log(commits);
}
