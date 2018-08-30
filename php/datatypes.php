<?php 
    $answer;
    $question;
    
    function __init__() {    
        
        
    }
    function getQuestionType() {
        
    }
    
    function generateQuestion() {
        generateArithmeticQ();
        displayQuestion();
    }
    
    function generateArithmeticQ() {
        $x = rand(0, 20);
        $y = rand(1, 20);
        $arithmeticOperator = mt_rand(0, 4);
        global $answer;
        global $question;
        switch ($arithmeticOperator) {
            case 0:
                $answer = $x + $y;
                $question = "$x + $y";
                break;
            case 1:
                $answer = $x - $y;
                $question = "$x - $y";
                break;
            case 2:
                $answer = $x / $y;
                $question = "$x / $y";
                break;
            case 3:
                $answer = $x * $y;
                $question = "$x * $y";
                break;
            case 4:
                $answer = $x % $y;
                $question = "$x % $y";
                break;
            default:
                echo "error random not ok";
        }
        
    }
    
    function displayQuestion() {
        global $question;
        echo $question;
    }
    
    function getInput() {
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            if (!empty($_POST["answer"])) {
                global $answer;
                if ($_POST["answer"] == $answer) {
                    
                } else {
                    
                }
            } else {
                echo "Enter an answer! <br>";
            }
        }
    }
    
    function displayResult() {
        
    }

?>