function is_empty(num, end){
    if (num <= 0 || end <= 0)
    {
        alert('[ERROR]Typing for dates please')
        return true
    }
}
function calculate(){
    let num = Number(document.getElementById('num').value)
    let end = Number(document.getElementById('end').value)
    let output = document.getElementById('output')
    const OUT = document.getElementById('output')
    if (!is_empty(num,end)){
        output.innerHTML = `Board by ${num} is: <br>` 
        for(let i = 0; i <= end; i++){
            output.innerHTML += `${i} X ${num} = ${i*num} <br>`
        }
    }else{
        output = OUT
    }

}