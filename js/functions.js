$(document).ready(function(){
    getCountries();
})

function getCountries(){
    $.ajax({
        url: `https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries`,
        data: 'text',
        success: function(data){
            return data
        }
    })
    .then(data => {formCreate(data);})
}

function formCreate(getCountries){
    var optionFill = "<option></option>"
    $(".donor-form").append(
        // Creating Form Div and Adding <h2> and <p> Paragraph Tag in it.
        $("<h3/>").text("Wikimedia Donor Form"), $("<form/>", {
        action: 'formaction.php',
        method: 'POST'
        }).append(
        // Create <form> Tag and Appending in HTML Div form1.
        $("<input/>", {
            type: 'text',
            id: 'firstName',
            name: 'firstName',
            placeholder: 'First Name'
        }), // Creating Input Element With Attribute.
        $("<input/>", {
            type: 'text',
            id: 'lastName',
            name: 'lastName',
            placeholder: 'Last Name'
        }),
        $("<input/>", {
            type: 'text',
            id: 'streetAddress',
            name: 'streetAddress',
            placeholder: 'Street Address'
        }),
        $("<input/>", {
            type: 'text',
            id: 'city',
            name: 'city',
            placeholder: 'City'
        }),
        $("<input/>", {
            type: 'text',
            id: 'stateRegion',
            name: 'stateRegion',
            placeholder: 'State/Region'
        }),
        $("<select/>", {
            class: 'country',
            name: 'country',
        }),
        $("<input/>", {
            type: 'text',
            id: 'postalCode',
            name: 'postalCode',
            placeholder: 'Postal Code'
        }),
        $("<input/>", {
            type: 'text',
            id: 'phone',
            name: 'phone',
            placeholder: 'Phone Number'
        }),
        $("<input/>", {
            type: 'email',
            id: 'Email',
            name: 'Email',
            placeholder: 'Email Address'
        }),
        $("<select/>", {
            class: 'contactPref',
            name: 'contactPref',
        }),
        $("<select/>", {
            class: 'paymentPref',
            name: 'paymentPref',
        }),
        $("<select/>", {
            class: 'donateFreq',
            name: 'donateFreq',
        }),
        $("<textarea/>", {
            id: 'comments',
            name: 'comments'
        }),
        $('<button>Submit</button>', {
            id: 'submit',
            name: 'submit',
            type: 'submit'
        })
    ));
    var countryDrop = $('.country');
    var countryArray = getCountries.split("\n");
    countryArray.forEach(function(country){
        countryDrop.append(
            $(optionFill).html(country).val(country)
        );
    })
    var contactDrop = $('.contactPref')
    contactDrop.append(
        $(optionFill).html('Phone').val('phone'),
        $(optionFill).html('Email').val('email')
    )
    var payDrop = $('.paymentPref')
    payDrop.append(
        $(optionFill).html('USD').val('usd'),
        $(optionFill).html('Euro').val('euro'),
        $(optionFill).html('Bitcoin').val('btc')
    )
    var dontateFreq = $('.donateFreq')
    dontateFreq.append(
        $(optionFill).html('Monthly').val('monthly'),
        $(optionFill).html('Yearly').val('yearly'),
        $(optionFill).html('Once-time').val('once')
    )
}