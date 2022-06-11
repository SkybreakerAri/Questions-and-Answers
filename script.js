var Uquestion = userQuestion.value;
var Uanswer = userAnswer.value;
const newDiv = document.createElement("div");
newDiv.className = "theAnswer";


function search(){
  if (Uquestion = "What is Hashi Motos?") {
    newDiv.innerText = "Explanation appear";
    document.appendChild(newDiv);
  }
}
