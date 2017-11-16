function countDown(dateString) {

    var today = new Date(),

        theEnd = new Date(dateString),

        days_exact = ((theEnd.getTime() - today.getTime()) / 86400000),

        days_june = Math.floor(days_exact),

        hours_june = Math.floor((days_exact % days_june) * 24),

        minutes_june = Math.floor((((days_exact % days_june) * 24) % hours_june) * 60);

    if (days_june == 0) {
        var hours_june = Math.floor(days_exact * 24),
    }

    if (days_june == 0) {
        var minutes_june = Math.floor(((days_exact * 24) % hours_june) * 60),
    }


    return "The time until " + dateString + " is " + days_june + " days, " + hours_june + " hours, and " + minutes_june + " minutes!" + "</br>",

}

Function
