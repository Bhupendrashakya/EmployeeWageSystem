//UC 1
const is_Absent=0;

let empCheck= Math.floor(Math.random()*10)%2;
if(empCheck == is_Absent){
    console.log("Employee is Absent !");
    return;
}else{
    console.log("Employee is Present !");
}