// header início------------------------------------------------------------------------------------------------------

function checarTela(){

if($('body').width() < 1210){

    $('#abrirTelaNav').on('click', function(){
        $('.telaNav').fadeIn().css('display', 'flex')
        $('body').css('overflow', 'hidden')
    })


    $('#abrirTelaContatos').on('click', function(){
        $('.telaContato').fadeIn().css('display', 'flex')
        $('body').css('overflow', 'hidden')
    })


    $('#abrirTelacertificado').on('click', function(){
        $('.telaCertificado').fadeIn().css('display', 'flex')
        $('body').css('overflow', 'hidden')
    })


    $('.fecharTelas, .navegar').on('click', function(){
        $('.telaContato, .telaNav, .telaCertificado').fadeOut()
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