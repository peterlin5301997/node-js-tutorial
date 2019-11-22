const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);

// Hostname (does not get port)
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialized Query
console.log(myUrl.search);

// Params (Object)
console.log(myUrl.searchParams);

// Add Params
myUrl.searchParams.append('abc', '123')
console.log(myUrl.searchParams);

// Loop through Params
myUrl.searchParams.forEach((value, key) => console.log(`${key}: ${value}`))
