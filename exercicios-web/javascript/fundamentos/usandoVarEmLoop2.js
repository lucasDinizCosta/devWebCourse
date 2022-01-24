const funcs = []
for(var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i);
    });
}
// Como o VAR nao tem escopo de função terá o valor 10 nos dois
funcs[2]()  // 10
funcs[8]()  // 10