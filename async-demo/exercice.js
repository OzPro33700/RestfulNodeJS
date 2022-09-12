async function displayCustomer() {
  try {
    const customer = await getCustomer(1);
    console.log('Customer : ', customer);
    const movies = await getTopMovies(customer);
    console.log('Top movies : ', movies);
    const mail = await sendEmail(customer.email, movies);
    console.log('Email sent...', mail);
  } catch (err) {
    console.log('Error', err.message);
  }
}

displayCustomer();

function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: id,
        name: 'Osiris Malbranque',
        isGold: true,
        email: 'osiris.malbranque@fr.thalesgroup.com',
      });
    }, 1000);
  });
}

function getTopMovies(customer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (customer.isGold) {
        resolve(['Star Wars', 'Star Trek', 'Titanic']);
      } else {
        reject(new Error('The customer is not Gold...'));
      }
    }, 1000);
  });
}

function sendEmail(email, movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        email: email,
        movies: movies,
        msgText: `To: ${email} | Here are your favorite movies ${JSON.stringify(
          movies
        )}`,
      });
    }, 500);
  });
}
