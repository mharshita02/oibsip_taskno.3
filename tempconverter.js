const calculatetemp = () => {
    const numbertemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_diff');
    const valuetemp = temp_diff.options[tempSelected.selectedIndex].value;

    const celcTofah = (celc) => {
        let fahrenheit = Math.round((celc * 9 / 5) + 32);
        return fahrenheit;
    }
    const fahTocelc = (fah) => {
        let celsius = Math.round((fah - 32) * 5 / 9);
        return celsius;
    }

    let result;
    if (valuetemp == 'celc') {
        result = celcTofah(numbertemp);
        // templete String.
        document.getElementById('resultcontainer').innerHTML = `= ${result}°Fahrenheit`; 
    }
    else {
        result = fahTocelc(numbertemp);
        // templete String.
        document.getElementById('resultcontainer').innerHTML = `= ${result}°Celsius`;
    }
}