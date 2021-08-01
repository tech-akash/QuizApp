const answer=["opt-one","opt-one","opt-second","opt-third"];
const questions=["Question 1","Question2","Question3","Question4"];
const choosen=[];
var choose;
var score=0;
var questionNo=0;
var timmer=setInterval(countDown,1000);
var currentCorrect=0;
var currentWrong=0;
var startTime= new Date();
var finishHour=0;
var finishMinutes=0;
var finishSeconds=10;
countDown();
setQuestion()
$(".QuestionRemaing").text(4-questionNo-1)
$(".btn-block").click(chooseOption);
function countDown(){

  if(finishSeconds>0){
      finishSeconds--;
  }else if(finishMinutes>0){
      finishMinutes--;
      finishSeconds+=59;
  }else if(finishHour>0){
          finishHour--;
          finishMinutes+=59;
          finishSeconds+=59;
  }else{
      clearInterval(timmer);
      

//    $(".one").addClass("hide");
   $(".score").text(currentCorrect);
   $(".finished").text("Times Up :(")
   $(".two").addClass("bg-text").delay(2000).queue(function(next){
    $(this).removeClass("bg-text");
    $(".one").addClass("hide")
    next();
});
//    $(".finished").removeClass("hide")
//    $(".one").addClass("hide");
   $(".two").removeClass("hide");
  }
var s= finishHour 
$(".seconds").text(finishSeconds%60);
$(".minutes").text(finishMinutes%60);
$(".hours").text(finishHour);
}
function chooseOption(){
    $(".btn-block").removeClass("selected")
    $(this).toggleClass("selected");
var btnClass=$(this)[0].classList[2];
choose=btnClass;


}
$(".btn-lg").click(sendAnswer);
function sendAnswer(){
choosen.push(choose);
console.log(choosen)



    $("."+answer[questionNo]).addClass("choosen-correct").delay(100).queue(function(next){
        $(this).removeClass("choosen-correct");
        next();
    });
    if(choose==answer[questionNo]){
        currentCorrect++;
        $(".correct").text(currentCorrect);
    }else{
        currentWrong++;
        $(".wrong").text(currentWrong);
    }
    questionNo++;
    $(".QuestionRemaing").text(4-questionNo-1)
    if(questionNo==4){
        
        clearInterval(timmer);

        $(".score").text(currentCorrect);
        $(".finished").text("Quiz Finished :)")
        $(".two").addClass("bg-text").delay(2000).queue(function(next){
            $(this).removeClass("bg-text");
            $(".one").addClass("hide")
            next();
        });
        
        
        $(".two").removeClass("hide");
        //$(".one").addClass("hide");
    }else{

        setQuestion();
    }
    console.log(questionNo);
}
function setQuestion(){
    console.log(questions[questionNo]);
    $(".card-title").text(questions[questionNo]);
}