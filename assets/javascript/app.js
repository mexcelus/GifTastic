var fruits = [
    'banana',
    'watermellon',
    'apple',
    'pineapple',
    'tomato'
]
console.log(fruits);


for (var i = 0; i < fruits.length; i++) {
    console.log(i);
    var button = $("<button></button>");
    button.text(fruits[i]);
    button.attr('data', fruits[i]);
    button.addClass("run-api")
    $("#buttons-here").append(button);
    
}

$(".run-api").click( function() {
    alert($(this).attr('data'))
})