export const convertToThousand = (angka) => {
    let thousand = '';
    const angkarev = angka.toString().split('').reverse().join('');
    for (let i = 0; i < angkarev.length; i++) if (i % 3 === 0) thousand += `${angkarev.substr(i, 3)}.`;
    return thousand.split('', thousand.length - 1).reverse().join('');
};