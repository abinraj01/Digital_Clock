function clockTime(){
    // to get system time 

    let date=new Date()
    let hours=date.getHours()
    let minutes=date.getMinutes()
    let seconds=date.getSeconds()

    output.innerHTML=`${hours}:${minutes}:${seconds}`
    setTimeout(()=>{
        clockTime()
    },1000)
}
// function call 
clockTime()