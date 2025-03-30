document.getElementById("adminLoginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let adminID = document.getElementById("adminID").value;

    let correctAdminID = [
        "UEB3237122", "UEB3211422", "UEB3236322", "UEB3236422", "UEB3236522",
        "UEB3236622", "UEB3236722", "UEB3237022",
        "UEB3237222", "UEB3237322", "UEB3237422", 
    ]


    if (correctAdminID.includes(adminID)) {
        window.location.href = "admin.html";
    } else {
        Swal.fire({ 
            icon: "error",
            title: "You dey smoke ebo abii",
            text: document.getElementById("errorMessage").innerText = "Invalid Admin ID!",
            footer: "Masa carry your index away"
        });
    }
});  


