
  
console.log("Start of program")

  function getCustomer(id) {

    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("inside GetCustomer ... ");
            const customer = {
                id: 1,
                name: 'Nikhil',
                isGold: true,
                email: 'email'
            };
            if (customer.isGold){
                resolve(customer);
                return
            }
            reject("Not an Gold Member")
        }, 4000);
    })

  }
  
  function getTopMovies() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("inside Email Promise  ");
            const movies = (['Scrim', 'Pursuit of Happiness']);
            resolve(movies);
        }, 4000);
    })
  }
  
  function sendEmail() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("Inside sendEmail")
            const email = "Email has been sent...";
            resolve(email);
        }, 4000);
    })

  }

getCustomer(1)
  .then(function(customer) {
      console.log("Getting customer details");
      console.log(customer)
      return getTopMovies();
  })
  .then(function(movies) {
      console.log("Getting movies");
      console.log(movies)
      return sendEmail();
  })
  .then(function(email) {
      console.log("Sending email");
      console.log(email)
  })
  .catch(function(error) {
      console.log(error)
  })
console.log("End of the Program")