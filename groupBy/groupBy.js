const students = [
    {name: "bima dwi cahhya", marks: "75"},
    {name: "yudi hapippudin", marks: "80"},
    {name: "ridwan", marks: "70"},
    {name: "rizzyywan maolana", marks: "20"},
]
    function myCallback({marks}){
        return marks > 69 ? "pass" : "fail";
    }
    const result = Object.groupBy(students, myCallback);

    console.log(result)