document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('testButton').addEventListener('click', () => {
        if(count == 0){
            count++
            runProgress()
        } else {
            count++
        }
        document.getElementById('countText').innerHTML = "Progressing .. " + count        
    })
})

let count = 0;
let runProgress = () => {
    document.getElementById('countText').innerHTML = "Progressing .. " + count
    let progressBar = document.getElementById('progressBar')
    progressBar.style.transition = "3s ease"
    progressBar.style.width = "100%"
    setTimeout(() => {
        progressBar.style.transition = "0s ease"
        progressBar.style.width = "0%"
        setTimeout(() => {
            count--
            if(count > 0){
                runProgress()
            }
        }, 100)
                   
    }, 3000)
}