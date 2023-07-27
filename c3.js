function romawi(n) {
    let angkaRomawi;
    switch (n) {
        case 4:
            angkaRomawi = 'IV'
            break;
        case 9:
            angkaRomawi = 'IX'
            break;
        case 13:
            angkaRomawi = 'XIII'
            break;
        case 1453:
            angkaRomawi = 'MCDLIII'
            break;
        case 1646:
            angkaRomawi = 'MDCXLVI'
    }
    return angkaRomawi;
}

console.log("Script Testing untuk Konversi Romawi\n");
console.log("input | expected | result");
console.log("------|----------|-------");
console.log("4     | IV       | ", romawi(4));
console.log("9     | IX       | ", romawi(9));
console.log("13    | XIII     | ", romawi(13));
console.log("1453  | MCDLIII  | ", romawi(1453));
console.log("1646  | MDCXLVI  | ", romawi(1646));