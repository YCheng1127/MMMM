

$("#btn").click(function () {
    $("#mbody").hide();
    $("#mbody2").show();
    var count = 0;
    function appear() {
        count += 1;
        var numm = Math.floor(Math.random() * 9);
        console.log(numm);
        $('#D' + numm).css('display', 'block');
        $('#D' + numm).on('click', function () {
            $('#M' + numm).css('background-image', 'url(img/must.png)');
            setTimeout(function () { $('#D' + numm).css('display', 'none') }, 500)
        })
        $('#M' + numm).css('background-image', 'url(img/newhole.png)');
        if (count < 31) {
            setTimeout(function () { appear() }, 1500)
        }
    }
    appear();
    var timeup = 45;
var timeup2 = setInterval(function () {
    timeup--;
    $("#timeup").text(timeup);
    if (timeup ==0)
        clearInterval(timeup2);
}, 1000);
});





$("mbody2").click(function () {
    $("finish").show();
});

$("#turtleback2").click(function () {
    $("#mbody2").hide();
    return;
});
