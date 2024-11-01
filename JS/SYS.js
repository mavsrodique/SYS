let backgroundMusic = document.getElementById('background-music');

// Function to start background music
function startBackgroundMusic() {
    backgroundMusic.play().catch(error => {
        console.error("Error playing background music: ", error);
    });
    
    // Hide the modal and show the main content
    document.getElementById('modal').style.display = 'none';
    document.querySelector('.container').style.display = 'block';
}

// Function to show the response based on user's choice
function showResponse(answer) {
    const response = document.getElementById('response');
    const yesImage = document.getElementById('yes-image');
    const noImage = document.getElementById('no-image');
    const yesAudio = document.getElementById('yes-audio');
    const noAudio = document.getElementById('no-audio');

    // Stop the background music when an answer is given
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0; // Reset background music to the beginning

    // Stop and reset audio tracks
    yesAudio.pause();
    yesAudio.currentTime = 0; // Reset "yes" audio
    noAudio.pause();
    noAudio.currentTime = 0; // Reset "no" audio

    if (answer === 'yes') {
        response.textContent = "Yay! Can't wait! 🎉❤️";
        yesImage.style.display = 'block'; // Show happy image
        noImage.style.display = 'none'; // Hide sad image
        yesAudio.play(); // Play the "yes" audio
    } else {
        response.textContent = "That's okay, maybe another time! 😊";
        yesImage.style.display = 'none'; // Hide happy image
        noImage.style.display = 'block'; // Show sad image
        noAudio.play(); // Play the "no" audio
    }
    response.style.opacity = '1'; // Optional: for fading in response
}
