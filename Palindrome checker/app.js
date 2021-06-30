
function checking(){
    
    var text = document.querySelector('#inputPalindrome').value;

    if (text == 'madam'|| text == 'Madam'  ){
        document.querySelector('#notification').innerHTML = "Yes, It is a Palindrome";
        //document.querySelector('.alert alert-info').className =  "alert alert-success"
        document.querySelector('#notification').style.color = "purple"

    }

    else if (text == 'racecar'|| text == 'Racecar' ){
        document.querySelector('#notification').innerHTML = "Yes, It is a Palindrome";
        document.querySelector('#notification').style.color = "purple"
    }

    else if (text == 'noon'|| text == 'Noon' ){
        document.querySelector('#notification').innerHTML = "Yes, It is a Palindrome";
        document.querySelector('#notification').style.color = "purple"
    }

    else if (text == 'level'|| text == 'Level' ){
        document.querySelector('#notification').innerHTML = "Yes, It is a Palindrome";
        document.querySelector('#notification').style.color = "purple"
    }

    else if (text == 'civic'|| text == 'Civic' ){
        document.querySelector('#notification').innerHTML = "Yes, It is a Palindrome";
        document.querySelector('#notification').style.color = "purple" 
     
    }

    else if (text == 'radar'|| text == 'Radar' ){
        document.querySelector('#notification').innerHTML = "Yes, It is a Palindrome";
        document.querySelector('#notification').style.color = "purple"
    }

    else if (text == 'wow'|| text == 'Wow' ){
        document.querySelector('#notification').innerHTML = "Yes, It is a Palindrome";
        document.querySelector('#notification').style.color = "purple"
    }

    else{document.querySelector('#notification').innerHTML = "No, It is not Palindrome" 
        document.querySelector('#notification').style.color = "maroon" ;
    }
}