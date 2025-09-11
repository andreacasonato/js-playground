// Loop through an object and print all of its key-value pairs.

const userProfile = {
    username: 'andre091',
    email: 'andre091@email.com',
    status: 'online',
};

Object.keys(userProfile).forEach(key => {
    console.log(`${key}: ${userProfile[key]}`);
});

// username: andre091 
// email: andre091@email.com
// status: online

