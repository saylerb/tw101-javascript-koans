"use strict";

/*
 Problem 4:

 Background:
 At present, currency notes in India are issued in the denomination of Rs.5, Rs.10, Rs.20, Rs.50, Rs.100, Rs.500 and
 Rs.1000.
 http://www.rbi.org.in/currency/faqs.html

 Problem statement:
 Write a program that will enable counting of money given in the form of Indian currency notes. The program must take
 a variable number of arguments. These arguments must be summed and the total must be displayed. For any input number
 that does not match a valid currency denomination, ignore the value and stop counting further, displaying the sum
 counted so far.

 Examples:

 Given Rs 10, 20, 100 notes
 When I count the money
 Then my total is Rs 130

 Given Rs 20, 50, 10, 20, 13, 500 notes
 When I count the money
 Then my total is Rs 100

*/
function changeElementText(element, answer) {
    $(element).text(answer);
}

function countMoney() {
    var validNotes = [5, 10, 20, 50, 100, 500, 1000]
    var notesString = ""
    var count = 0;
    var args = [].slice.call(arguments);

    args.forEach(function(note) {
        notesString += note.toString() + " ";
    });

    for (var i = 0; i < args.length; i++) {
        if (validNotes.indexOf(args[i]) > -1) {
            count += args[i];
        } else {
            break;
        }
    }

    changeElementText("#listOfNotes", notesString);
    changeElementText("#totalCount", count);
}

