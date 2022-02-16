import $ from 'jquery'

import { onLoadHtmlSuccess } from '../core/includes'

const duration = 300

function filterByCity(city) {
    $('[wm-city]').each(function(i, e){
        const isTarget = $(this).attr('wm-city') === city
            || city === null
        
        if(isTarget){
            $(this).parent().removeClass('d-none')
            $(this).fadeIn(duration)
        }
        else{
            $(this).fadeOut(duration, () => {
                $(this).parent().addClass('d-none')
            })
        }
    })
}

// Criando o plugin com o JQuery
$.fn.cityButtons = function(){
    const cities = new Set
    $('[wm-city]').each(function(i, e){
        cities.add($(e).attr('wm-city'))
    })

    // Transforma a cidade em botão
    const btns = Array.from(cities).map(city => {
        const btn = $('<button>')
            .addClass(['btn', 'btn-info'])
            .html(city)
        btn.click(e => filterByCity(city))
        return btn
    })

    const btnAll = $('<button>')
        .addClass(['btn', 'btn-info', 'active']).html('Todas')
    btnAll.click(e => filterByCity(null))
    btns.push(btnAll)

    const btnGroup = $('<div>').addClass(['btn-group'])
    btnGroup.append(btns)

    $(this).html(btnGroup)

    // Para poder fazer o chaining de chamadas de funções como essa
    return this
}

onLoadHtmlSuccess(function(){
    // Só criará os botões quando a página tiver
    // o carregamento bem sucedido
    $('[wm-city-buttons]').cityButtons()
})

