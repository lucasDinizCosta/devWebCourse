const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(x in nums){
    if(x == 5){
        break   // interrompe o laço
    }
    console.log(`${x} = ${nums[x]}`);
}

for(y in nums){
    if(y == 5){
        continue   // interrompe a execução atual e continua a partir da próxima repetição
    }
    console.log(`${y} = ${nums[y]}`);
}

// Utilizando rótulo (NAO RECOMENDADO)
externo: for(a in nums){
    for(b in nums){
        if(a == 2 && b == 3) break externo; // atua no laço externo
        console.log(`Par = ${a},${b}`);
    }
}