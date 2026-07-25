document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("childForm");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            const child = {
                name: document.getElementById("name").value,
                dob: document.getElementById("dob").value,
                gender: document.getElementById("gender").value,
                guardian: document.getElementById("guardian").value,
                height: document.getElementById("height").value,
                weight: document.getElementById("weight").value,
                temperature: document.getElementById("temperature").value,
                bp: document.getElementById("bp").value,
                pulse: document.getElementById("pulse").value,
                spo2: document.getElementById("spo2").value,
                complaint: document.getElementById("complaint").value,
                prescription: document.getElementById("prescription").value
            };

            let children = JSON.parse(localStorage.getItem("children")) || [];

            children.push(child);

            localStorage.setItem("children", JSON.stringify(children));

            alert("Child Record Saved Successfully!");

            form.reset();

        });

    }

});