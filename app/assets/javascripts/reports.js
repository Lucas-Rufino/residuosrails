$(document).on('turbolinks:load', function() {
    $('#rb1_list').show();
    $('#rb2_list').hide();
    $('#rb3_list').hide();
    $("#rb0").click(function(){
    $("#select_bd").hide();
    $("#select_ed").hide();
    $('#rb1_list').hide();
    $('#rb2_list').hide();
    $('#rb3_list').hide();
    });
    $("#rb1").click(function(){
    $("#select_bd").show();
    $("#select_ed").show();
    $('#rb1_list').show();
    $('#rb2_list').hide();
    $('#rb3_list').hide();
    });
    $("#rb2").click(function(){
    $("#select_bd").show();
    $("#select_ed").show();
    $('#rb1_list').hide();
    $('#rb2_list').show();
    $('#rb3_list').hide();
    });
    $("#rb3").click(function(){
    $("#select_bd").show();
    $("#select_ed").show();
    $('#rb1_list').hide();
    $('#rb2_list').hide();
    $('#rb3_list').show();
    });
});
