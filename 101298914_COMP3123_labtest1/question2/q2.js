// Original delayedSuccess function
const delayedSuccess = () => { 
    setTimeout(() => {
        let success = {'message': 'delayed success!'}
        console.log(success)
    }, 500)
}

// Original delayedException function
const delayedException = () => {
    setTimeout(() => {
        try {
            throw new Error('error: delayed exception!');
        } catch (e) {
            console.error(e);
        }
    }, 500)
}

// New resolvedPromise function
const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({'message': 'resolved after 500ms!'});
        }, 500);
    });
}

// New rejectedPromise function
const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('error: rejected after 500ms!'));
        }, 500);
    });
}

// Calling delayedSuccess and delayedException
delayedSuccess();
delayedException();

// Handling resolvedPromise
resolvedPromise()
    .then((result) => {
        console.log(result); // { message: 'resolved after 500ms!' }
    })
    .catch((error) => {
        console.error(error);
    });

// Handling rejectedPromise
rejectedPromise()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error.message); // error: rejected after 500ms!
    });
