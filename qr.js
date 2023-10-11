



const QRSection = document.querySelector(".QRSection"),
qrinput = QRSection.querySelector(".form input"),
generateBtn = QRSection.querySelector(".form button"),
qrImg = QRSection.querySelector(".qr-code img");

    generateBtn.addEventListener("click", ()=>
        {
            let qrValue = qrinput.value;
            if(!qrValue) return; //checking if input is empty
            generateBtn.innerText = "Generating QR Code...";
            console.log(qrValue);
            console.log("ssssss");

            qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;

            qrImg.addEventListener("load",()=> { //after it will be loaded
                QRSection.classList.add("active");
                generateBtn.innerText = "Generate qr code";
            });

        }
    )
