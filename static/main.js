document.querySelector("#registration-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries())

    fetch(
        "/login",
        {
            method: "post",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
        }
    )
        .then(async (response) => {
            const data = await response.json();

            return { status: response.status,data };
        })
        .then(({status, data}) => {
            const messageNode = document.createElement("div");

            if(status === 400){
                messageNode.style.color = "red";
                messageNode.textContent = data.message;
            }
            else{
                messageNode.style.color = "green";
            }

            messageNode.textContent = data.message;

            document.body.appendChild(messageNode);
        })
})