// select elements as variables
const inputText = document.querySelector(".inputBox")
const qrCodeWrap = document.querySelector(".qrImageWrap")
const qrImage = document.getElementById("qrImage")

// console.log(inputText, qrCodeWrap)


function generateQr(){
  if(inputText.value.length > 0){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputText.value
    qrCodeWrap.classList.add("showId")
  }else{
    inputText.classList.add("error")
    setTimeout(()=>{
      inputText.classList.remove("error")
    },1000)
  }
  
}