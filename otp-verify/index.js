let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
let btn = document.getElementById("btn");
let send = document.getElementById("send");
let msg = document.getElementById("msg");
let h1 = document.querySelector("h1");
let n = 4;
let otp = "";
for (let i = 1; i <= n; i++) {
    let num = Math.ceil(Math.random() * 9);
    otp += num;
}
//alert(`Your OTP is : ${otp}`);
h1.textContent = "OTP : " + otp;

function progress() {
    let value = input1.value + input2.value + input3.value + input4.value;
    if (otp === value) {
        console.log("verified");
        msg.textContent = "Verified";
        msg.style.color = "green";
    } else {
        send.classList.toggle("send");
        input1.value = "";
        input2.value = "";
        input3.value = "";
        input4.value = "";
        msg.textContent = "Invalid OTP";
        send.textContent = "send Again";
        send.addEventListener("click", () => {
            msg.textContent = "";
            progress();
        });
    }
}

btn.addEventListener("click", (event) => {
    event.preventDefault();
    progress();
});
