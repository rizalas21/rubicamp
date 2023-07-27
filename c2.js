function deretKaskus(n) {
    var start = []
    var end = [] 
        for (let i = 1; i <= n; i++) {
            let number = i * 3;
            start.push(number)
        }

        for (let j = 0; j <  start.length; j++) {
            if (start[j] % 5 === 0 && start[j] % 6 === 0) {
                end.push('KASKUS')
            } else if (start[j] % 5 === 0) {
                end.push('KAS');
            } else if (start[j] % 6 === 0) {
                end.push('KUS')
            } else {
                end.push(start[j])
            }
        }
        return end;
    }

console.log(deretKaskus(10));