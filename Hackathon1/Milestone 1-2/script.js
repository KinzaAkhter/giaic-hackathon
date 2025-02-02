var customButton = document.getElementById('reveal');
var skillSection = document.getElementById('skill-set');
customButton.addEventListener('click', function () {
    if (skillSection.style.display === 'none') {
        skillSection.style.display = 'block';
    }
    else {
        skillSection.style.display = 'none';
    }
});
