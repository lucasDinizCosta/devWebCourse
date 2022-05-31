module.exports = words => {
    return new Promise((resolver, reject) => {
        try {
            // ['ana', 'ana', 'ana', 'bia', 'bia']
            // { ana: 3, bia: 2 }

            const groupedWords = words.reduce((obj, word) => {
                if(obj[word]){
                    obj[word]++
                }
                else{
                    obj[word] = 1
                }
                return obj
            }, {})

            const groupedWrodsArray = Object
                .keys(groupedWords)
                .map(key => ({ name: key, amount: groupedWords[key] }))
                .sort((w1, w2) => w2.amount - w1.amount)
            resolver(groupedWrodsArray)
        }
        catch(e){
            reject(e)
        }
    })
}