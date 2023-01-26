const delay = ms => new Promise (response => setTimeout(() => response(), ms));

async function dataBase() {
    try {
        console.log('Parsing...');
        await delay(2000);

        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();

        console.log('Data:', data);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

dataBase();