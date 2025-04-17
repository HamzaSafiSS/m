let names = prompt("Please enter the student Name:");
let subNumber = Number(prompt("please enter number of subject you have."))
let totalScore = 0;
let Average = 0;
let grade = null;
for(let i = 1 ; i <= subNumber ; i++) {
   let score = Number(prompt(`Please enter score of number ${i} subject`))
   while(score < 0 || score > 100) {
    score = Number(prompt(`The number should be 0 to 100 Please enter score of number ${i} subject`))
   }
  
   totalScore = totalScore + score;

}

const average = () => totalScore/subNumber;
     Average = average();

     const Grade = () => {
        if( Average >=90  )   grade = "A";
        
        else if(Average >= 80)  grade = "B";
        
        else if(Average >=70 ) grade = "C";
        
        else if(Average >=60  )  grade = "D";
        
        else grade = "F";
               
     };
     Grade();


console.log(`Name: ${names}`);
console.log(`Average Score: ${Average.toFixed(2)}`);
console.log(`Grade: ${grade}`);

switch (grade) {
    case "A":
      console.log("Feedback: OutStanding")
      break;
    case "B":
      console.log("Feedback: Great JOb!")
      break;
    case "C":
    case "D":
      console.log("Feedback: Good Effort!")
      break;
    case "F":
    console.log("Feedback: Needs Improvement")
    break;
    default:
        console.log("Feedback: Failed. Work Harder!")
}
