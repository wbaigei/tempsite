
document.getElementById("submit").click = () => {
    var body = document.getElementById("s").value;
    var link = `https://xfeedback.herokuapp.com/send?topic=NONE&user=[USERNAME]&message=${body}&api=MfDTklWx9FEJ1ghVd7n57egFZ9FJT5thbqsD9Dp8Y7kF1yjuZe8-glVeh2zRN15D`
    console.log(link);
    fetch(link).then(()=>{
        console.log("done")
    });
}