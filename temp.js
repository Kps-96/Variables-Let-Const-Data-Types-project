function convert_f()
{
    let ip = document.getElementById("f_input");
    let output = document.getElementById("result1");
    let val = ip.value;
    if(val !== "")
    {
        let op = (val - 32)*5/9;
        output.innerHTML = op.toFixed(2)+ "°C";
        ip.value=" ";
    }
    else
    {
        alert("enter a valid input.")
    }
}

function convert_s()
{
    let ip = document.getElementById("s_input");
    let output = document.getElementById("result2");
    let val = ip.value;
    if(val !== "")
    {
        let op = (9/5)*val + 32;
        output.innerHTML = op.toFixed(2) + "°F";
        ip.value=" ";
    }
    else
    {
        alert("enter a valid input.")
    }
}