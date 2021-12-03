/**
 * Padrão de projeto chain of responsibility ou middleware: É um padrão
 * muito presente na web e no node.
 *  A ideia é diminuir o acoplamento de funções garantindo uma maior liberdade
 * e utilizando a cadeia de funções com uso do Next para indicar o próximo passo.
 */
// Middleware pattern(chain of responsibility)
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = (ctx) => {
    ctx.valor3 = 'mid3'
}

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length && middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx);
// exec(ctx, passo2, passo1, passo3)
// console.log(ctx);
// exec(ctx, passo3, passo1, passo2)
// console.log(ctx);
