
const currentPath = window.location.pathname;


function checkPassover() {
    // Replace this logic with the actual date-checking logic
    const now = new Date();
    // Example: Assume Passover is from April 15 to April 23 for demonstration
    const passoverStart = new Date(now.getFullYear(), 3, 12); // April is 3 (0-indexed)
    const passoverEnd = new Date(now.getFullYear(), 3, 19);
    return now >= passoverStart && now <= passoverEnd;
}

document.addEventListener("DOMContentLoaded", function () {
    switch (currentPath) {
        case "/": {
            const button = document.getElementById("checkPassover");
            const result = document.getElementById("result");
            const loadingTime = 5;

            if (button && result) {
                button.addEventListener("click", function () {
                    // Show a loading message
                    result.classList.add("loading");
                    result.textContent = "Checking...";

                    // Simulate a delay for loading (e.g., fetching data)
                    setTimeout(() => {
                        const isPassover = checkPassover();
                        result.classList.remove("loading");
                        result.textContent = isPassover ? "Yes." : "No.";
                    }, loadingTime * 1000); // Simulates a delay
                });
            }
            break;
        }

        case "/api/": {
            document.body.textContent = JSON.stringify({ isPassover: checkPassover() });
            break;
        }

        case "/index.html"  : {
            // redirect to '/'
            window.location.href = '/';
            break;
        }

        default: {
            console.warn("No logic implemented for this path.");
            break;
        }
    }
});
