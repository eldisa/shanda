/**
There is an array, each item has such format:
{firstName: 'xxx', lastName: 'xxx', customerID: 'xxx', note: 'xxx',
profession: ‘xxx’}
lastName, note can be empty, customerID can only be a set of digital
numbers.
profession can only have ‘student’, ‘freelancer’, ‘productOwner’,
‘engineer’ or ‘systemAnalytics’.
**/
/**
Q1.1 Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’)
to sort this array and print it out.
**/
function sortUserName(users) {
    users.sort((a, b) => {
        // compare by firstName
        if (a.firstName < b.firstName) return -1;
        if (a.firstName > b.firstName) return 1;

        // compare by lastName if firstName is the same, 
        if (a.lastName < b.lastName) return -1;
        if (a.lastName > b.lastName) return 1;

        // compare by customerID if both firstName & lastName are the same
        return a.customerID - b.customerID;
    });
}

/**
Q2.2 Please sort by ‘profession’ to follow the principle.
(‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ >
‘student’’)
**/

// Define a custom order for professions
const professionOrder = {
    'systemAnalytics': 1,
    'engineer': 2,
    'productOwner': 3,
    'freelancer': 4,
    'student': 5
};

function sortByType(users) {

    users.sort((a, b) => {
        return professionOrder[a.profession] - professionOrder[b.profession];
    });

    console.log(users);
}

// Sample data
const users = [
    { firstName: 'John', lastName: 'Doe', customerID: '3', note: '', profession: 'engineer' },
    { firstName: 'Jane', lastName: 'Smith', customerID: '2', note: '', profession: 'student' },
    { firstName: 'John', lastName: 'Smith', customerID: '1', note: '', profession: 'freelancer' },
    { firstName: 'Jane', lastName: 'Doe', customerID: '4', note: '', profession: 'productOwner' },
    { firstName: 'Alice', lastName: '', customerID: '5', note: 'Great student', profession: 'systemAnalytics' }
];

// Test the functions
console.log("Sorted by userName:");
sortUserName(users);

console.log("Sorted by profession:");
sortByType(users);