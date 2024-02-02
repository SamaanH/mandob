const res=document.getElementById('last-result');
const inp= document.getElementsByClassName("input-value");

var result=[];
var inpvalue;
var total=0;



function calc(operator,index){
    /*
    inpvalue=Number(inp[index].value);
    console.log(inpvalue);
    sum=sum+inpvalue;
*/

    result.push(Number(inp[index].value));
    console.log(result);
 total= result.reduce((p,c)=>{
    return p+c;
  });

    res.innerHTML=total;
}


