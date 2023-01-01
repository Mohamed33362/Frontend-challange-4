let notificates = document.querySelectorAll(".notificate")
let notificateArray = Array.from(notificates)
let markAll = document.getElementById("mark")
let number = document.getElementById("number")
let checkCondition = notificateArray.forEach((ele) => {
  return ele.classList.contains("clicked");
});


notificateArray.forEach((ele) => {
    ele.addEventListener("click",()=>{
        ele.classList.add("clicked")
        check()
    })
})

markAll.addEventListener("click",()=>{
    notificateArray.forEach((ele)=>{
        ele.classList.add("clicked")
        check()
    })
})


function check() {
    if (!checkCondition) {
      number.innerHTML = notificateArray.filter((ele) =>
        ele.classList.contains("clicked") ? false : true
      ).length;
      return false;
    } else {
      console.log(checkCondition);
    }
}

check()