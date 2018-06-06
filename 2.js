$("#window > button:nth-of-type(1)").click(function () {
    if(id == 1)
    {
    $("#mbody").show();
    $("#window").css("display", "none");
    }
});

$("#btn").click(function () {
    $("#mbody").hide();
    $("#mbody2").show();
    var count = 0;
    function appear() {
        count += 1;
        var num = Math.floor(Math.random() * 9);
        console.log(num);
        $('#D' + num).css('display', 'block');
        $('#D' + num).on('click', function () {
            $('#M' + num).css('background-image', 'url(img/must.png)');
            setTimeout(function () { $('#D' + num).css('display', 'none') }, 500)
        })
        $('#M' + num).css('background-image', 'url(img/newhole.png)');
        if (count < 31) {
            setTimeout(function () { appear() }, 1500)
        }
    }
    appear();
})

var timeup = 46;
var timeup2 = setInterval(function () {

$("mbody2").click(function () {
    $("finish").show();
});

$("#turtleback2").click(function () {
    $("#mbody2").hide();
    return;
});
