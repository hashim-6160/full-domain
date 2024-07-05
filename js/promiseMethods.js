let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'First');
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 200, 'Second');
});

let promise3 = new Promise((resolve, reject) => {
    setTimeout(reject, 150, 'Third');
});

// Using Promise.all
Promise.all([promise1, promise2])
    .then((values) => console.log('Promise.all:', values))
    .catch((error) => console.error('Promise.all error:', error));

// Using Promise.allSettled
Promise.allSettled([promise1, promise2, promise3])
    .then((results) => console.log('Promise.allSettled:', results));

// Using Promise.race
Promise.race([promise1, promise2, promise3])
    .then((value) => console.log('Promise.race:', value))
    .catch((error) => console.error('Promise.race error:', error));

// Using Promise.any
Promise.any([promise3, promise1])
    .then((value) => console.log('Promise.any:', value))
    .catch((error) => console.error('Promise.any error:', error));
