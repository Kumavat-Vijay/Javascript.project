function getmark(){
    var maths=Number(document.getElementById('maths').value);
    var english=Number(document.getElementById('english').value);
    var physics=Number(document.getElementById('physics').value);
    var chemistry=Number(document.getElementById('chemistry').value);


    var total=400;
    var totalmark=maths+english+physics+chemistry;
    var percentage=(totalmark/total)*100;

    document.getElementById('percentage').innerHTML=percentage+'%';

    if(percentage>=80){
        document.getElementById('grade').innerHTML="A";
        document.getElementById('pass').innerHTML='Congratulation, You get the top grade!';
    }
    else if(65<=percentage && 80>percentage){
        document.getElementById('grade').innerHTML="B";
        document.getElementById('pass').innerHTML='Congratulation, You get the second-top grade!';
    }
    else if(55<=percentage && 64>=percentage){
        document.getElementById('grade').innerHTML="C";
        document.getElementById('pass').innerHTML='Congratulation, You get the third-top grade!';
    }
    else if(50<=percentage && 54>=percentage){
        document.getElementById('grade').innerHTML="D";
        document.getElementById('pass').innerHTML='Congratulation, You get the forth-top grade!';
    }
    else if(0<percentage && 49>=percentage){
        document.getElementById('grade').innerHTML="E";
        document.getElementById('pass').innerHTML='Congratulation, You get the five-top grade!';
    }
}