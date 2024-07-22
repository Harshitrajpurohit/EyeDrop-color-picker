let body = document.querySelector("body");
let btn = document.querySelector(".click");
let resultP = document.querySelector("p");

btn.addEventListener("click", () => {
    if (!window.EyeDropper) {
        resultP.innerText = "your browser does not support EyeDroper";
        return;
    }
    const eyeDropper = new EyeDropper();
    eyeDropper.open().then((result) => {
        resultP.innerText = result.sRGBHex;
        body.style.backgroundColor = result.sRGBHex;
    }).catch((e) => {
        
        })

})


// img upload
let imgtag = document.querySelector("img");
let img = document.querySelector("#image");
let upload_img="";
img.addEventListener("change",()=>{
    const reader = new FileReader();
    reader.addEventListener("load",()=>{
        imgtag.src = reader.result;
        
    })
    reader.readAsDataURL(img.files[0]);
})