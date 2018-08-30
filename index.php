<html>
    <head>
		<link rel="stylesheet" type="text/css" href="css/main.css"/>
    </head>
    <body>
    	<audio id="correctAudio">
            <source src="audio/correct.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
    	<audio id="wrongAudio">
            <source src="audio/wrong.wav" type="audio/wav">
            Your browser does not support the audio element.
        </audio>
    	<audio id="winAudio">
            <source src="audio/victory_fanfare.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
        
    	<header>
    	</header>
    	<main>
    		<form autocomplete="off" action="<?php echo $_SERVER['PHP_SELF'];?>" method="post">
        		Question: <p id="question"><?php generateArithmeticQ();?></p>
        		<input id="input" type="text" id="answer" placeholder="Answer" autofocus><br>    		
        		<button id="submit_button" type="submit" disabled>New</button>
        	</form>
        	<button id="test-button" onclick="correct();">Submit</button>
        	
        	<div id="res-container">
        		<a id="info-res">Result:</a>
        		<div id="answer1" class="answers"></div>
        		<div id="answer2" class="answers"></div>
        		<div id="answer3" class="answers"></div>
        		<div id="answer4" class="answers"></div>
        		<div id="answer5" class="answers"></div>
        		<div id="answer6" class="answers"></div>
        		<div id="answer7" class="answers"></div>
        		<div id="answer8" class="answers"></div>
        		<div id="answer9" class="answers"></div>
        		<div id="answer10" class="answers"></div>
        	</div>
        	
		</main>
		<?php 
            function generateArithmeticQ() {
                $x = rand(0, 20);
                $y = rand(1, 20);
                $arithmeticOperator = mt_rand(0, 4);
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
                echo $question;
                echo "<script>localStorage.setItem('arithmeticAnswer', '$answer')</script>";
            }
		?>
		
		<script type="text/javascript" src="js/main.js"></script>
    </body>
</html>