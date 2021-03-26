student_array=[];

function submit()
{
    var student1=document.getElementById("student.1").value;
    var student2=document.getElementById("student.2").value;
    var student3=document.getElementById("student.3").value;
    var student4=document.getElementById("student.4").value;
    
    student_array.push(student1);
    student_array.push(student2);
    student_array.push(student3);
    student_array.push(student4);
    
    console.log(student_array);
    document.getElementById("display_name").innerHTML=student_array;
    
    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block"; 
}
function sort() 
{
  student_array.sort();
    console.log(student_array);
    document.getElementById("display_name").innerHTML=student_array;
}
