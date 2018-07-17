$(document).ready(() => {
    $('form').validate();

   
    $('#second-box').hide();
    $('#first-box').hide();
    $('#third-box').hide();

    $('#box1').on('mouseenter', () => {
        $('#first-box').show("slow");
    }).on('mouseleave', () => {
        $('#first-box').hide('slow');
    });

    $('#box2').on('mouseenter', () => {
        $('#second-box').show('slow');
    }).on('mouseleave', () => {
        $('#second-box').hide('slow');
    });

    $('#box3').on('mouseenter', () => {
        $('#third-box').show('slow');
    }).on('mouseleave', () => {
        $('#third-box').hide('slow');
    });


    
})