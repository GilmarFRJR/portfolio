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



// projetos começo ------------------------------------------------------------------------------------------------------

$('#secaoProjeto1').on('click', function(){
    $('.espacoProjetosEstilo').removeClass('espacoProjetosEstilo')
    $('#instrucaoProjetos').fadeOut(0001)
    $('#projetosSites').fadeIn(1000)

    $('#projetosJS, #projetosAPI').css('display', 'none')
    $('html, body').animate({scrollTop: $('#tituloBasico3').offset().top}, 500)
})


$('#secaoProjeto2').on('click', function(){
    $('.espacoProjetosEstilo').removeClass('espacoProjetosEstilo')
    $('#instrucaoProjetos').fadeOut(0001)
    $('#projetosJS').fadeIn(1000)

    $('#projetosSites, #projetosAPI').css('display', 'none')
    $('html, body').animate({scrollTop: $('#tituloBasico3').offset().top}, 500)
})


$('#secaoProjeto3').on('click', function(){
    $('.espacoProjetosEstilo').removeClass('espacoProjetosEstilo')
    $('#instrucaoProjetos').fadeOut(0001)
    $('#projetosAPI').fadeIn(1000)

    $('#projetosSites, #projetosJS').css('display', 'none')
    $('html, body').animate({scrollTop: $('#tituloBasico3').offset().top}, 500)
})


// projetos fim ------------------------------------------------------------------------------------------------------


// animação de rolagem começo ------------------------------------------------------------------------------------------------------

$(document).ready(function() {

    $(window).scroll(function() {

      $('.esconder').each(function() {

        var posicao = $(this).offset().top
        var mostrar = $(window).scrollTop() + $(window).height()
        if (posicao < mostrar) {

          $(this).addClass('mostrar')
        }
      })
    })})
 


// animação de rolagem fim ------------------------------------------------------------------------------------------------------