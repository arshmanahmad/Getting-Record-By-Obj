const users = [
    {
        name: 'John Doe',
        id: "us1",
        joined: "2015",
        email: "john@gmail.com",
        password: "john1122",
        country: "US",
        postalCode: "56339",
    },
    {
        name: 'Marry Jane',
        id: "jp1",
        joined: "2016",
        email: "jane@gmail.com",
        password: "jane1122",
        country: "Japan",
        postalCode: "43556",
    },
    {
        name: 'John Smith',
        id: "us2",
        joined: "2018",
        email: "johnsmith@gmail.com",
        password: "jSmith1122",
        country: "US",
        postalCode: "59830",
    },
    {
        name: 'Alice Bob',
        id: "us3",
        joined: "2015",
        email: "aliceBob@gmail.com",
        password: "aliceBob11",
        country: "US",
        postalCode: "56339",
    },
]


const transactions = [
    {
        transactionId: "XX232324265",
        userId: "us1",
        amount: 50000,
        currency: "USD",
        paymentMethod: "Credit Card",
        paymentType: "Funds",
        date: "2023-10-01T11:11:14.000Za"
    },
    {
        transactionId: "XX2542324265",
        userId: "us1",
        amount: 300000,
        currency: "USD",
        paymentMethod: "Mada Card",
        paymentType: "Shopping",
        date: "2022-8-01T11:11:14.000Zb"
    },
    {
        transactionId: "XX2327624265",
        userId: "jp1",
        amount: 160000,
        currency: "EUR",
        paymentMethod: "Apple Pay",
        paymentType: "Other",
        date: "2023-10-01T11:11:14.000Zc"
    },
    {
        userId: "us2",
        amount: 120000,
        currency: "USD",
        transactionId: "XX236824265",
        paymentMethod: "ATM",
        date: "2023-10-01T11:11:14.000Z",
        paymentType: "Funds",
    },
]
const finder = (property, value, array) => {
    const len = array.length;
    const tempData = [];
    if (typeof value === "number") {
        if (array[i][property] <= value) {
            tempData.push(array[i])
        }
    }
    for (let i = 0; i < len; i++) {
        if (array[i][property] === value) {
            tempData.push(array[i])
        }
    }
    return tempData.length > 0 ? tempData : [];
}

const filterRecords = (filters) => {
    const { amount, currency, paymentType, paymentMethod } = filters;

    let tempArray = [];
    if (amount) {
        tempArray = finder("amount", amount, tempArray.length > 0 ? tempArray : transactions)
    }

    if (currency) {
        tempArray = finder("currency", currency, tempArray.length > 0 ? tempArray : transactions)
    }
    if (paymentType) {
        tempArray = finder("paymentType", paymentType, tempArray.length > 0 ? tempArray : transactions)
    }
    if (paymentMethod) {
        tempArray = finder("paymentMethod", paymentMethod, tempArray.length > 0 ? tempArray : transactions)
    }

    return tempArray.length > 0 ? tempArray : "Record Not Found"
}

console.log(filterRecords({
    amount: 120000,
    // currency: "USD",
    // paymentType: "Funds",
    // paymentMethod: "ATM",
}));