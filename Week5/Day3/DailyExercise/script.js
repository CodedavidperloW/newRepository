function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { message: "Data successfully fetched" };
            resolve(data);
        }, 2000);
    });
}

function processData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const processedData = `${data.message} - Processed`;
            resolve(processedData);
        }, 1500);
    });
}