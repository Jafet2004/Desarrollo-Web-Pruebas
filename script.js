document.getElementById('original-tonality').addEventListener('change', function() {
    let saxophoneType = document.getElementById('saxophone').value;
    let originalTonality = this.value;
    let convertedTonality = '';

    if (saxophoneType === 'alto') {
        switch (originalTonality) {
            case 'C': convertedTonality = 'A'; break;
            case 'D': convertedTonality = 'B'; break;
            case 'E': convertedTonality = 'C#'; break;
            case 'F': convertedTonality = 'D'; break;
            case 'G': convertedTonality = 'E'; break;
            case 'A': convertedTonality = 'F#'; break;
            case 'B': convertedTonality = 'G#'; break;
            default: convertedTonality = ''; break;
        }
    } else if (saxophoneType === 'soprano') {
        switch (originalTonality) {
            case 'C': convertedTonality = 'D'; break;
            case 'D': convertedTonality = 'E'; break;
            case 'E': convertedTonality = 'F#'; break;
            case 'F': convertedTonality = 'G#'; break;
            case 'G': convertedTonality = 'A'; break;
            case 'A': convertedTonality = 'B'; break;
            case 'B': convertedTonality = 'C#'; break;
            default: convertedTonality = ''; break;
        }
    }

    document.getElementById('converted-tonality').textContent = convertedTonality;

    // Activar la animación de aparición
    let resultDiv = document.getElementById('result');
    resultDiv.style.opacity = 1;
});
