/**
 * this will validate price between 100 and 100000
 */
function carPriceValidation(price) { 
    if(price < 100 || price > 100000) { 
        return false;
    }

    return true;
}

/**
 * this will validate all condition of form
 */
function validate(form) { 
    
    if(carPriceValidation(parseInt(form.carValue.value)) == false) {
        form.carValue.style.borderColor = "red";
        //form.carValue.value = "Expected value between 100 and 100000";
        return false;
    }

    // can call other validation 

    return true;
}