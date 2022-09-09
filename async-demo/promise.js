const p = new Promise((resolve, reject) => {
  resolve(1);
});

p.then((result) => console.log('Result', result));
