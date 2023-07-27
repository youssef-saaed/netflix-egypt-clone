function isNumeric(text)
{
    for(var i of text)
    {
        if (i < "0" || i > "9")
        {
            return false;
        }
    }
    return true;
}

function isEmail(text)
{
    let at = false;
    let dot = false;
    let i = 0;
    for (var c of text)
    {
        if ((c == "@" || c == ".") && i == 0)
        {
            return false;
        }
        if (c == "." && !at) 
        {
            return false;
        }
        if (c == "@")
        {
            at = true;
        }
        if (c == "." && (text[i-1] == "@" || i == text.length - 1)){
            return false;
        }
        if (c == ".") {
            return true;
        }
        i++;
    }
}

document.getElementById("moreBTN").addEventListener("click", ()=>{
    document.getElementById("hiddenMore").classList.remove("d-none");
    document.getElementById("moreBTN").classList.add("d-none");
});

document.getElementById("SIF").addEventListener("click", (e)=>{
    e.preventDefault();   
    var EOP = document.getElementById("EOP").value;
    var pass = document.getElementById("pass").value;
    var em = false;
    var ps = false;
    if (!((isNumeric(EOP) && EOP.length == 11) || isEmail(EOP)))
    {
        document.getElementById("EOP").classList.add("warnedinput");
        document.getElementById("W1").classList.remove("d-none");
    } 
    else
    {
        document.getElementById("EOP").classList.remove("warnedinput");
        document.getElementById("W1").classList.add("d-none");
    }
    if (pass.length < 4 || pass.length > 60)
    {
        document.getElementById("pass").classList.add("warnedinput");
        document.getElementById("W2").classList.remove("d-none");
    } 
    else
    {
        document.getElementById("pass").classList.remove("warnedinput");
        document.getElementById("W2").classList.add("d-none");
    }
});