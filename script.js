//your JS code here. If required.
const input = document.getElementById("ip");
const btn = document.getElementById("btn");
const div = document.getElementById("output");

btn.addEventListener("click", function () {

    const val = Number(input.value);

    // Step 1: Initial Promise - 2 seconds
    const p1 = new Promise((resolve) => {
        setTimeout(() => {
            resolve(val);
        }, 2000);
    });

    p1.then((res) => {

        // Display the initial number
        div.textContent = `Result: ${res}`;

        return res;

    })

    // Step 2: Multiply by 2 - 2 seconds
    .then((res) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const multiplied = res * 2;

                div.textContent = `Result: ${multiplied}`;

                resolve(multiplied);
            }, 2000);
        });
    })

    // Step 3: Subtract 3 - 1 second
    .then((res) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const subtracted = res - 3;

                div.textContent = `Result: ${subtracted}`;

                resolve(subtracted);
            }, 1000);
        });
    })

    // Step 4: Divide by 2 - 1 second
    .then((res) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const divided = res / 2;

                div.textContent = `Result: ${divided}`;

                resolve(divided);
            }, 1000);
        });
    })

    // Step 5: Add 10 - 1 second
    .then((res) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const finalResult = res + 10;

                div.textContent = `Final Result: ${finalResult}`;

                resolve(finalResult);
            }, 1000);
        });
    })

    // Handle errors
    .catch((error) => {
        console.error(error);
        div.textContent = "Something went wrong!";
    });

});