let name = 'k8805';
let letter1 = 'Dear ' +name+ '\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' +name+ ' The point of using ' +name+ ' Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. ' +name + '\n';

let letter2 = `Dear ${name}

It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ${name} The point of using ${name} Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. ${name}`;

console.log(letter1);
console.log(letter2);
