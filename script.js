document.addEventListener('DOMContentLoaded', () => {
    // هێنانە ناوەوەی فایلە دەنگییەکان
    const hoverSound = new Audio('hover.mp3'); 
    const clickSound = new Audio('click.mp3'); 

    // ڕێکخستنی ئاستی دەنگەکان
    hoverSound.volume = 0.2; 
    clickSound.volume = 0.5; 

    // دۆزینەوەی هەموو دوگمەکان
    const menuButtons = document.querySelectorAll('button');

    // پێدانی فەرمان بە هەر دوگمەیەک
    menuButtons.forEach(button => {
        
        button.addEventListener('mouseenter', () => {
            hoverSound.currentTime = 0; 
            hoverSound.play().catch(e => console.log("Audio play prevented - Requires user interaction first"));
        });

        button.addEventListener('click', () => {
            clickSound.currentTime = 0;
            clickSound.play().catch(e => console.log("Audio play prevented"));
        });
    });
});
