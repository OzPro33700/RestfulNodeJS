console.log('Before');
getUser(1, (user, someone) => {
  console.log('User', user);
  console.log('Someone', someone);

  // Get the repositories
  /*getRepositories(user.gitHubUsername, (repositories) => {
    console.log('Repositories', repositories);
  });*/
});
console.log('After');

function getUser(id, callback) {
  setTimeout(() => {
    console.log('Reading a user from a database...');
    callback({ id: id, gitHubUsername: 'mosh' }, { a: 'aaa', c: 'ccc' });
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
