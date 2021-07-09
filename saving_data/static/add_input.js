function calculateInputNumber(form) {
    /**
     * Calculates the number of inputs in the form and returns this number increased by one
     * @param {object} form - form with dynamically added inputs
     * @return {number} - serial number
     */
    let count = $('input', form).length
    return count++
}


function createFormInput(form) {
    /**
     * Assigns a name with a sequential number to the "name" attribute of the new input
     * @param {object} form - form with dynamically added inputs
     * @return {object} element input with name="data + serial number"
     */
    let newInput = document.createElement('input');
    let inputNameTemplate = $('input', form).first().attr('name')
    let newInputName = `${inputNameTemplate}${calculateInputNumber(form)}`
    $(newInput).attr('name', newInputName)
    return newInput
}


function addInput() {
    /**
     *Adds a new input to the form
     */
    let form_id = $(this).attr('form')
    let form = $(`#${form_id}`)
    let input = createFormInput(form)
    form.append(input)
}


$(document).ready(function() {
  $("#add_input").on("click", addInput);
});



