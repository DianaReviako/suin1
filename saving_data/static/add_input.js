function calculateInputNumber(form) {
    /**
     * Calculates the number of inputs in a form by subtracting one hidden input and returns that number
     * @param {object} form - form with dynamically added inputs
     * @return {number} - serial number
     */
    return $("input:not(:hidden)", form).length
}


function createFormInput(form) {
    /**
     * Finds the first "input" and for the next one replaces "name" with "name" with a sequential number
     * @param {object} form - form with dynamically added inputs
     * @return {object} element input with name="data + serial number"
     */
    let newInput = document.createElement('input');
    let firstInput = $("input:not(:hidden)", form).first();
    let firstInputName = firstInput.attr('name');
    let newInputName = `${firstInputName}${calculateInputNumber(form)}`;
    $(newInput).attr('name', newInputName);
    return newInput
}


function addInput() {
    /**
     *Adds a new input to the form
     */
    let form_id = $(this).attr('form');
    let form = $(`#${form_id}`);
    let input = createFormInput(form);
    form.append(input);
}


$(document).ready(function() {
  $("#add_input").on("click", addInput);
});



