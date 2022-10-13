
document.getElementById("submit").click = () => {
    var body = document.getElementById("s").value;
    var link = `https://xfeedback.herokuapp.com/send?topic=NONE&user=[USERNAME]&message=${body}&api=B1o2q24Sq5y71HvCiLyN8w6cRLOw1EixamwPdiAVLBj-3JOwko4iaU7iZBXa9JDI`
    console.log(link);
    fetch(link).then(()=>{
        console.log("done")
    });
}