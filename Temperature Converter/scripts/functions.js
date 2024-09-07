function convertTemperature() {
    // Input Values
    const tempInput = document.getElementById('tempInput').value;
    const scaleSelect = document.getElementById('scaleSelect').value;
    
    // No Input Determined
    if (tempInput === '') {
        document.getElementById('result').textContent = 'Please enter a temperature.';
        return;
    }
    
    const temperature = parseFloat(tempInput);
    let convertedTemp;
    
    if (scaleSelect === 'C') {
        // Convert Celsius to Fahrenheit
        convertedTemp = (temperature * 9/5) + 32;
        document.getElementById('result').textContent = `${temperature}°C is ${convertedTemp}°F`;
    } else if (scaleSelect === 'F') {
        // Convert Fahrenheit to Celsius
        convertedTemp = (temperature - 32) * 5/9;
        document.getElementById('result').textContent = `${temperature}°F is ${convertedTemp}°C`;
    }
}