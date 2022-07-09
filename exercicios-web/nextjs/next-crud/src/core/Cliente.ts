export default class Cliente{
    // Para o ES5
    // private id: string
    // private nome: string
    // private idade: number

    // Para o ES2015 -- Atributos privados do javascript
    #id: string
    #nome: string
    #idade: number

    constructor(nome: string, idade: number, id: string = null){
        this.#nome = nome
        this.#idade = idade
        this.#id = id
    }

    // Para criar um cliente vazio
    static vazio(){
        return new Cliente('', 0 )
    }

    // GETs 

    get id(){
        return this.#id
    }

    get nome(){
        return this.#nome
    }

    get idade(){
        return this.#idade
    }

}