
function gameOverModal(winner) {
    $('#myModal').css({'display': 'block'});
    $('#winner').html(winner + " YOU WON");
    $('#startAgain').on('click', function() {
        $('#myModal').css({'display': 'none'});
        btcRushGame.restartGame();
        restartPlayers();
        start();
        createNewChart();
        clearCampusBorders();
    }) 
}



    /* window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    span.onclick = function() {
        modal.style.display = "none";
    }
} */
