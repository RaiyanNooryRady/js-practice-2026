try {
    //alerrt('hello');
    console.log('success');
    let x = 5;
    if (x < 6) throw "x is smaller than 6";
    else {
        alert('success');
    }
}
catch (err) {
    document.getElementById('dev-array').innerHTML = err;
}
function testInput() {
    let val = document.getElementById('input-box').value;
    let showValId = document.getElementById('input-value');
    try {
        if (val == "") throw "empty";
        if (isNaN(val)) throw "Not a number";
        if (val == 0) throw "zero";
        if (val <= 5) throw "value is smaller than 5";
        if (val > 10) throw {
            message: "too high",
            name: "highError"
        }
    }
    catch (err) {
        if (val > 10) {
            showValId.innerHTML = err.message;
        }
        else {
            showValId.innerHTML = err;
        }

    }
    finally {
        console.log('this is a test');
    }

}