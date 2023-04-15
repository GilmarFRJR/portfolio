// header início------------------------------------------------------------------------------------------------------

function checarTela(){

if($('body').width() < 1210){

    $('#abrirTelaNav').on('click', function(){
        $('.blocoNav').fadeIn().css('display', 'flex')
        $('body').css('overflow', 'hidden')
    })


    $('#abrirTelaContatos').on('click', function(){
        $('.blocoContato').fadeIn().css('display', 'flex')
        $('body').css('overflow', 'hidden')
    })


    $('.fecharTelas, .navegar').on('click', function(){
        $('.blocoContato, .blocoNav').fadeOut()
        $('body').css('overflow', 'auto')
    })

} else{

    $('#abrirTelaNav').off('click')

    $('#abrirTelaContatos').off('click')

} }



setInterval(function(){
    checarTela()
}, 1000)




// header fim------------------------------------------------------------------------------------------------------



// ------------------------------------------------------------------------------------------------------



// ------------------------------------------------------------------------------------------------------