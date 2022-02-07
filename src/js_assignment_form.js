//javascipt
function submitForm(){
    
    var name=document.getElementById("name").value;
    var age=parseInt(document.getElementById("age").value);
    var weight=parseInt(document.getElementById("weight").value);
    validation(name,age,weight);
    console.log("Name is : " +name);
    console.log("Age is : " +age);
    console.log("Weight is : " +weight);
}

function validation(name,age,weight){
    if (isNaN(age) || isNaN(weight)){
        document.getElementById("result").innerHTML=("Sorry "+name+ ",age or weight cant be in text format.Please enter correct input.");
    }else{
        calculation(name,age,weight);
    }
}

function calculation(name,age,weight){
    if(age<5 || age>20){
       document.getElementById("result").innerHTML=("Sorry "+name+ ",Your age is out of range");
        console.log("Out of range");
    }else if(age>=5 && age<=7){
        if(weight>=15 && weight<=20){
            document.getElementById("result").innerHTML=("Hello "+name+ ",Your weight " + weight + " is Perfect according to your " +age);
        }
        if(weight>20){
            document.getElementById("result").innerHTML=("Hello "+name+ ",Your weight " + weight + " is greater than recommended value of 20 according to your age " +age);
        }
        if(weight<15){
            document.getElementById("result").innerHTML=("Hello "+name+ ",Your weight " + weight + " is less than recommended value of 15 according to your age " +age);
        }
    }else if(age>=8 && age<=10){
        if(weight>=21 && weight<=25){
            document.getElementById("result").innerHTML=("Hello "+name+ ",Your weight " + weight + " is Perfect according to your " +age);
        }
        if(weight>25){
            document.getElementById("result").innerHTML=("Hello "+name+ ",Your weight " + weight + " is greater than recommended value of 25 according to your age " +age);
        }
        if(weight<21){
           document.getElementById("result").innerHTML=("Hello "+name+ ",Your weight " + weight + " is less than recommended value of 21 according to your age " +age);
        }
    }else if(age>=11 && age<=15){
        if(weight>=26 && weight<=30){
            document.getElementById("result").innerHTML=("Hello "+name+ ",Your weight " + weight + " is Perfect according to your " +age);
        }
        if(weight>30){
            document.getElementById("result").innerHTML=("Hello "+name+ ",Your weight " + weight + " is greater than recommended value of 30 according to your age " +age);
        }
        if(weight<26){
           document.getElementById("result").innerHTML=("Hello "+name+ ",Your weight " + weight + " is less than recommended value of 26 according to your age " +age);
        }
    }else if(age>=16 && age<=20){
        if(weight>=31 && weight<=40){
            document.getElementById("result").innerHTML=("Hello "+name+ ",Your weight " + weight + " is Perfect according to your " +age);
        }
        if(weight>40){
           document.getElementById("result").innerHTML=("Hello "+name+ ",Your weight " + weight + " is greater than recommended value of 40 according to your age " +age);
        }
        if(weight<31){
           document.getElementById("result").innerHTML=("Hello "+name+ ",Your weight " + weight + " is less than recommended value of 31 according to your age " +age);
        }
    }
}





