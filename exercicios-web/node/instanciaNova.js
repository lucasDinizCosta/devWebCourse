// Uma factory retorna um novo objeto de forma que 'dribla' o cache do Node permitindo criar
// novos objetos
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++;
        }
    }
}