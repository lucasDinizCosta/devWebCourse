import $ from 'jquery'

const loadHtmlSuccessCallbacks = []

export function onLoadHtmlSuccess(callback){
    if(!loadHtmlSuccessCallbacks.includes(callback)){
        loadHtmlSuccessCallbacks.push(callback)
    }
}

// parent: TAG que tem o wm-include
function loadIncludes(parent){
    if(!parent) parent = 'body'
    $(parent).find('[wm-include]').each(function(i, e){
        const url = $(e).attr('wm-include')
        // Fazendo uma chamada ajax
        $.ajax({
            url,
            success(data){
                $(e).html(data)
                // Remove para evitar que a propriedade seja processada mais de uma vez
                $(e).removeAttr('[wm-include]')

                loadHtmlSuccessCallbacks.forEach(
                    callback => callback(data)
                )
                // Função recursiva pra processar todos os outros includes
                loadIncludes(e)
            }
        })
    })
}

loadIncludes()