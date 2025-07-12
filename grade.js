function evaluateGrade(){
    // catch the elements done
    // create message variable done
    //if cond. on degrees with suitable messages
    /**
     * degrees should be between 0 and 100
     * degrees >= 90 --> you got A, excellent, keep the good work
     * degrees >= 80 --> you got B, very good, Aim for excellent
     * degrees >= 70 --> you got C, good, you can do better
     * degrees >= 60 --> you got D, Fair, Focus more
     * from 59 to 0 --> F, fail, Don't give up, try again

     */
    // assign message to innerText of paragraph
let grade = +(document.getElementById("grade").value);
let messageEl = document.getElementById("message");
console.log(grade)
/** input element --> allows the user to 
 * enter STRING data ONLY  */
let message = "";
if (grade >= 0 && grade <= 100) {
    if (grade >=90){
        message = "you got A, excellent, keep the good work"
    } else if (grade >=80) {
        message = "you got B, very good, Aim for excellent"
    } else if (grade >= 70){
        message = "you got C, good, you can do better"
    } else if (grade >= 60){
        message = "you got D, Fair, Focus more"}
        else {
            message = "you got F, fail, Don't give up, try again "
        }
    /**degrees >= 90 --> you got A, excellent, keep the good work
     * degrees >= 80 --> you got B, very good, Aim for excellent
     * degrees >= 70 --> you got C, good, you can do better
     * degrees >= 60 --> you got D, Fair, Focus more
     * from 59 to 0 --> F, fail, Don't give up, try again */
}
else {
    messageEl.textContent = "Enter a valid degree";
}
messageEl.textContent = message;
}