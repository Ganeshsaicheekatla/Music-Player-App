// Get the theme toggle checkbox
const themeToggle = document.getElementById('theme-toggle');

// Add event listener for theme toggle
themeToggle.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', this.checked);
    
    if(document.body.style.color == 'white')
        document.body.style.color='black';
   else
        document.body.style.color = 'white';
        
    const themeText= document.getElementById("mode-theme-text");
    if(themeText.textContent == 'Light')
        themeText.textContent='Dark';
    else
        themeText.textContent="Light";
});


