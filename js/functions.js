$(document).ready(function(){
    getCountries();
})

// Get country list
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
    var countryDrop = $('.country');
    var countryArray = getCountries.split("\n");
    countryArray.forEach(function(country){
        countryDrop.append(
            $(optionFill).html(country).val(country)
        );
    })

    // When review is clicked, pop the values out of the first form and into the other
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
        // Hide the first form and show the second
        $('.field1').addClass('hidden')
        $('.field2').css({'display':'block'})

        // Currency calculation and conversion if needed
        currencyOps();
    });

    // Reloads the window and clears the inputs
    $('#cancel').click(function(){
        alert('Thank you for your consideration')
        location.reload()
        $('input').val('')
    });

    // Make form2 editable
    $('#edit').click(function(){
        $('.field2 input').removeAttr('readonly').toggleClass('editable')
    });
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
