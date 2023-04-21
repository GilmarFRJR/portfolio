// header início------------------------------------------------------------------------------------------------------

function checarTela(){

if($('body').width() < 1210){

    $('#abrirTelaNav').on('click', function(){
        $('html, body').animate({scrollTop : 0},0)
        $('.telaNav').fadeIn().css('display', 'flex')
        $('body').css('overflow', 'hidden')
    })


    $('#abrirTelaContatos').on('click', function(){
        $('html, body').animate({scrollTop : 0},0)
        $('.telaContato').fadeIn().css('display', 'flex')
        $('body').css('overflow', 'hidden')
    })


    $('.fecharTelas, .navegar').on('click', function(){
        $('.telaContato, .telaNav').fadeOut()
        $('body').css('overflow', 'auto')
    })

} else{

    $('#abrirTelaNav').off('click')

    $('#abrirTelaContatos').off('click')

} }



setInterval(function(){
    checarTela()
}, 1000)



$('.irSobreMim').on('click', function(){
    $('html, body').animate({scrollTop: $('#tituloBasico1').offset().top}, 500)
    $('.telaContato, .telaNav').fadeOut()
    $('body').css('overflow', 'auto')
})

$('.irServicos').on('click', function(){
    $('html, body').animate({scrollTop: $('#tituloBasico2').offset().top}, 500)
    $('.telaContato, .telaNav').fadeOut()
    $('body').css('overflow', 'auto')
})

$('.irProjetos').on('click', function(){
    $('html, body').animate({scrollTop: $('#tituloBasico4').offset().top}, 500)
    $('.telaContato, .telaNav').fadeOut()
    $('body').css('overflow', 'auto')
})







// header fim------------------------------------------------------------------------------------------------------



// ------------------------------------------------------------------------------------------------------



// ------------------------------------------------------------------------------------------------------