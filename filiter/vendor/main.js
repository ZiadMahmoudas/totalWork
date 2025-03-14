let arr = [];
let tbody = document.querySelector("tbody"),
 notation = document.querySelector("#notation"),
 clearUsers = document.getElementById("clear"),
  fullscreen = document.querySelector(".navbar-brand i")
     /* Full Screen  */
        fullscreen.addEventListener("click", () => {
            const element = document.documentElement;
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.webkitRequestFullscreen) { 
                element.webkitRequestFullscreen();
            } else if (element.mozRequestFullScreen) { 
                element.mozRequestFullScreen();
            } else if (element.msRequestFullscreen) { 
                element.msRequestFullscreen();
            } else {
                console.error("Fullscreen API is not supported in this browser.");
            }
        });
        fullscreen.addEventListener("mouseover", () => {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        });
 let clearAllusers = _=>{
    arr=[];
    display(arr)
 }
 clearUsers.addEventListener("click",clearAllusers)
let display = data=>{
    let result="";
    for(let i=0;i<data.length;i++){
    result += `<tr>
    <td> <div class="delete"onclick="delete(${i})"><span>حذف</span>
    <i class="fa-solid fa-trash "></i>
    </div>
    </td>
<td class="text-white">${data[i].notation}</td>
<td class="text-white">${data[i].time}</td>
<td class="text-white">${data[i].enter}</td>
<td class="text-white">
  <div class="btns">
        <button class="btn btn-danger" >لايوجد بطاقة</button>
        <button class="btn btn-danger" >لايوجد معلومات</button>
  </div>
  </td>
    <td><button class="btn btn-success" onclick="update(${i})">Update</button></td>
<td class="text-white">${data.enter[i]}</td>
    </tr>`
}
tbody.innerHTML = result;
}
display(arr)


