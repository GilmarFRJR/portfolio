// header início------------------------------------------------------------------------------------------------------

function checarTela(){

if($('body').width() < 1210){

    $('#abrirTelaNav').click(function(){
        $('.blocoNav').fadeIn().css('display', 'flex')
        $('body').css('overflow', 'hidden')
    })


    $('#abrirTelaContatos').on('click', function(){
        $('.blocoContato').fadeIn().css('display', 'flex')
        $('body').css('overflow', 'hidden')
    })


    $('.fecharTelas').on('click', function(){
        $('.blocoContato, .blocoNav').fadeOut()
        $('body').css('overflow', 'auto');
    })

} else{
    return
} }



setInterval(function(){
    checarTela()
}, 1000)




// header fim------------------------------------------------------------------------------------------------------



// ------------------------------------------------------------------------------------------------------



// ------------------------------------------------------------------------------------------------------