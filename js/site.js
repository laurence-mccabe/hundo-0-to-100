function getValues() {

    var x = parseInt(document.getElementById("startValue").value);
    var y = parseInt(document.getElementById("endValue").value);
    
    if(x <= 0 || y <=0 || x > 100 || y >100)
    {
        document.getElementById("startValueId").classList.add("text-info", "fw-bold");
        document.getElementById("endValueId").classList.add("text-info", "fw-bold");

        document.getElementById(
            "startValueId").innerText =
            "Please enter a Numeric value greater than 0 and less than 100";
        document.getElementById(
                "endValueId").innerText =
                "Please enter a Numeric value greater than 0 and less than 100";
    }
    else{
        makeArray(x,y);
    }
}

function makeArray(int1,int2) {
    // can also create one big string and add to it each template row instead of using an array with .join()
    var arr = new Array;
    var count = 0;
    var num = 0;

    for (i = 1; i < 101; i++) {
        if(i % int1 == 0 && i % int2 ==0)
        {
            num ="<strong><b class ='text-danger'>FizzBuzz</b></strong>";
        }
        else if(i % int1 == 0 && i % int2 !=0)
        {
            num ="<i class ='text-primary'>Fizz</i>";
        }
        else if(i % int1 != 0 && i % int2 ==0)
        {
            num ="<i class ='text-info'>Buzz</i>";
        }
        else {num = i;}

        if(count == 0)
        {
            el = `<tr><td>${num}</td>`;
        }
        else if(count % 5 == 0)
        {
            el =`</tr><tr><td>${num}</td>`;
        }
        else{ el =`<td>${num}</td>`}

        arr[count] = el;
        count++;
    }
    
    displayResults(arr)
}
    function displayResults(arr)
    {
    var arr2 = new Array;
    // join method is for specifically adding all elements of an array together into one big string.
    arr2 = arr.join("")
    document.getElementById("results").innerHTML = arr2;
    }





// get the values - assign them to variables

// use a for loop and array to find values of each number and assign them to the array

// use for each var in array assign <tr><td @num<td></tr>
// add array with template to innerhtml

