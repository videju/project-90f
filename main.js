function login(){
    player1_name=document.getElementById("player_1").value;
    player2_name=document.getElementById("player_2").value;

  document.getElementById("second_screen").style.visibility= 'visible' ;
  document.getElementById("login_screen").style.visibility= 'hidden' ;
  
    localStorage.setItem("player_1" , player1_name);
    localStorage.setItem("player_2" , player2_name);

   
}