// Index js 
document.getElementById("currentYear").innerText = new Date().getFullYear()

        document.getElementById("myForm").addEventListener("submit", function (event) {
            event.preventDefault();

            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let message = document.getElementById("message").value;
            let sentMess = document.querySelector(".sentmessage");

            sentMess.style.opacity = '1';

            setTimeout(() => {
                sentMess.style.opacity = '0';
            }, 5000);

            let storedMessages = JSON.parse(localStorage.getItem("contactMessages")) || [];
            storedMessages.push({ name, email, message });
            localStorage.setItem("contactMessages", JSON.stringify(storedMessages));

            document.getElementById("myForm").reset();
        });



        // ADMIN PAGE JS

    function loadMessages() {
        let storedMessages = JSON.parse(localStorage.getItem("contactMessages")) || [];
        let tableBody = document.getElementById("messageTableBody");
        tableBody.innerHTML = ""; // Clear table before loading

        if (storedMessages.length > 0) {
            storedMessages.forEach((msg, index) => {
                let row = document.createElement("tr");
                row.innerHTML = `
                    <td>${msg.name}</td>
                    <td>${msg.email}</td>
                    <td>${msg.message}</td>
                    <td>
                        <button class="delete-btn" onclick="deleteMessage(${index})">Delete</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        } else {
            tableBody.innerHTML = "<tr><td colspan='4' class='text-center'>No Messages Yet</td></tr>";
        }
    }

var scrollToTopBtn = document.getElementById("scrollToTop");
window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});