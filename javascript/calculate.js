function display(textTobeDisplayed ,i) //function with parameters
{
    var para = document.createElement("P");               // Create a <p> element
    var t = document.createTextNode(i+textTobeDisplayed); // Create a text node
    para.appendChild(t);                                  // Append the text to <p>
    document.body.appendChild(para);                      // Append the <p> to the body
}

function multiple()
{
    for(var i=1;i<=100;i++)
    {
        if(!(i%3==0 || i%5==0))
        {
            continue; /*The continue statement breaks one iteration in the loop, if a specified condition
                        occurs, and continues with the next iteration in the loop.*/
        }
        else if(i%3==0 && i%5==0)
        {
            var txtDisplay="FizzBuzz";
            display(txtDisplay ,i);
       
        }
        else if(i%3==0)
        {
            var txtDisplay="Fizz";
            display(txtDisplay,i);    
        }
        else if(i%5==0)
        {
            var txtDisplay="Buzz";
            display(txtDisplay,i);       
    }
}
}