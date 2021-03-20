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
    var inputFill = "<input/>"
    var selectFill = "<select/>"
    $(".donor-form").append(
        // Creating Form Div and Adding <h2> and <p> Paragraph Tag in it.
        $("<h1/>").text("Wikimedia Donor Form"), $("<form/>", {
        action: '#',
        method: '#',
        id: 'myForm'
        }).append(
        // Create <form> Tag and Appending in HTML Div form1.
        $(inputFill, {
            type: 'text',
            id: 'firstName',
            name: 'firstName',
            placeholder: 'First Name'
        }), // Creating Input Element With Attribute.
        $(inputFill, {
            type: 'text',
            id: 'lastName',
            name: 'lastName',
            placeholder: 'Last Name'
        }),
        $(inputFill, {
            type: 'text',
            id: 'streetAddress',
            name: 'streetAddress',
            placeholder: 'Street Address'
        }),
        $(inputFill, {
            type: 'text',
            id: 'city',
            name: 'city',
            placeholder: 'City'
        }),
        $(inputFill, {
            type: 'text',
            id: 'stateRegion',
            name: 'stateRegion',
            placeholder: 'State/Region'
        }),
        $(selectFill, {
            class: 'country',
            name: 'country',
        }),
        $(inputFill, {
            type: 'text',
            id: 'postalCode',
            name: 'postalCode',
            placeholder: 'Postal Code'
        }),
        $(inputFill, {
            type: 'text',
            id: 'phone',
            name: 'phone',
            placeholder: 'Phone Number'
        }),
        $(inputFill, {
            type: 'email',
            id: 'Email',
            name: 'Email',
            placeholder: 'Email Address'
        }),
        $(inputFill, {
            type: 'text',
            id: 'amount',
            name: 'amount',
            placeholder: 'Donation Amount'
        }),
        $(selectFill, {
            class: 'contactPref',
            name: 'contactPref',
        }),
        $(selectFill, {
            class: 'paymentPref',
            name: 'paymentPref',
        }),
        $(selectFill, {
            class: 'donateFreq',
            name: 'donateFreq',
        }),
        $("<textarea/>", {
            id: 'comments',
            name: 'comments',
            placeholder: 'Comments'
        }),
        $('<button></button>', {
            id: 'reviewBtn',
            name: 'review',
            type: 'button'
        }).html('Review')
    ));
    $('#myForm').wrapInner("<fieldset class='field1 current'/>")
    var countryDrop = $('.country');
    var countryArray = getCountries.split("\n");
    countryArray.forEach(function(country){
        countryDrop.append(
            $(optionFill).html(country).val(country)
        );
    })
    $('#stateRegion').after('<br>')
    $('#country').after('<br>')
    $('#postalCode').before('<br>')
    $('.contactPref').before('<label>Contact Preference: </label>')
    $('.paymentPref').before('<br>' + '<label>Currency: </label>')
    $('.donateFreq').before('<br>' + '<label>Donation Frequency: </label>')
    var contactDrop = $('.contactPref')
    contactDrop.append(
        $(optionFill).html('Phone').val('phone'),
        $(optionFill).html('Email').val('email')
    )
    var payDrop = $('.paymentPref')
    payDrop.append(
        $(optionFill).html('USD').val('usd'),
        $(optionFill).html('Euro').val('eur'),
        $(optionFill).html('Bitcoin').val('btc')
    )
    var dontateFreq = $('.donateFreq')
    dontateFreq.append(
        $(optionFill).html('Monthly').val('monthly'),
        $(optionFill).html('Yearly').val('Yearly'),
        $(optionFill).html('One-time').val('One-time')
    )

    $('.donor-form').append(
        $('<fieldset/>',{class: 'field2'}).append(
            $(inputFill, {
                type: 'text',
                id: 'firstName',
                name: 'firstName',
                readonly: 'readonly'
            }),
            $(inputFill, {
                type: 'text',
                id: 'show_lastName',
                name: 'lastName',
                readonly: 'readonly'
            }),
            $(inputFill, {
                type: 'text',
                id: 'show_streetAddress',
                name: 'streetAddress',
                readonly: 'readonly'
            }),
            $(inputFill, {
                type: 'text',
                id: 'show_city',
                name: 'city',
                readonly: 'readonly'
            }),
            $(inputFill, {
                type: 'text',
                id: 'show_stateRegion',
                name: 'stateRegion',
                readonly: 'readonly'
            }),
            $(inputFill, {
                class: 'show_country',
                name: 'country',
                readonly: 'readonly',
            }),
            $(inputFill, {
                type: 'text',
                id: 'show_postalCode',
                name: 'postalCode',
                readonly: 'readonly'
            }),
            $(inputFill, {
                type: 'text',
                id: 'show_phone',
                name: 'phone',
                readonly: 'readonly'
            }),
            $(inputFill, {
                type: 'email',
                id: 'show_email',
                name: 'Email',
                readonly: 'readonly'
            }),
            $(inputFill, {
                type: 'text',
                id: 'show_amount',
                name: 'amount',
                readonly: 'readonly',
            }),
            $(inputFill, {
                class: 'show_contactPref',
                name: 'contactPref',
                readonly: 'readonly',
            }),
            $(inputFill, {
                class: 'show_paymentPref',
                name: 'paymentPref',
                readonly: 'readonly',
            }),
            $(inputFill, {
                class: 'show_donateFreq',
                name: 'donateFreq',
                readonly: 'readonly',
            }),
            $(inputFill, {
                id: 'show_comments',
                name: 'comments',
                readonly: 'readonly',
            }),
            $('<br><button/>', {
                id: 'submit',
                name: 'submit',
                type: 'submit'
            }).html('Submit'),
            $('<a/>', {
                id: 'cancel',
                name: 'cancel',
                type: 'cancel'
            }).html('Cancel')
        )
    )

    $('.field2').wrap("<form id='finalForm' action='./formaction.php' method='POST'/>")

    $('#reviewBtn').click(function () {
        var formValues = [];
        // get values from inputs in first fieldset
        $('.field1 :input').each(function () {
            formValues.push($(this).val());
        });
        
        formValues.pop(); //remove the button from input values
        
        // set values in second fieldset
        $('.field2 :input').each(function (index) {
            if (formValues[index]) {
                $(this).val(formValues[index]);  
            }
        });

        $('.field1').addClass('hidden')
        $('.field2').css({'display':'block'})
        currencyOps();
    });

    $('#cancel').click(function(){
        alert('Thank you for your consideration')
        location.reload()
    })
}

function currencyConversion(json){
    var results = json.result
    var freqDon = $('.show_donateFreq').val()
    if(freqDon == 'monthly'){
        var freq = 12
    }else{
        var freq = 1
    }
    var projDon = results * freq
    $('#finalForm').after(
        $('<p/>', {
            id: 'donateConv'
        }).html('Projected Donation: $' + projDon + ' USD')
    )
}


function currencyOps(){
    var fromCur = $('.show_paymentPref').val()
    var toCur = 'USD'
    var amount = $('#show_amount').val()
    var amountInt = parseInt(amount)
    var freqDon = $('.show_donateFreq').val()
    if(freqDon == 'monthly'){
        var freq = 12
    }else{
        var freq = 1
    }

    if($('.show_paymentPref').val() != 'usd'){
        $('#finalForm').after(
            $('<p/>', {
                id: 'usdAmount'
            }).html('Projected Donation: ' + amountInt * freq + ' ' + fromCur)
        )
        var requestUrl = 'https://api.exchangerate.host/convert?from=' + fromCur + '&to=' + toCur + '&amount=' + amount
        $.ajax({
            url: requestUrl,
            dataType: 'json',
            success: currencyConversion
        })
    }else{
        var projDon = freq * amountInt
        $('#finalForm').after(
            $('<p/>', {
                id: 'projectedDonate'
            }).html('Projected Donation: $' + projDon)
        )
    }
}
