const { argv } = require('./config/yargs');
const colors = require('colors');
const { crear: porHacer, getListado, actualizar, borrar } = require('./porHacer/por-hacer');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        let listar = getListado();

        for (let tarea of listar) {
            console.log('============='.green);
            console.log('==POR HACER=='.green);
            console.log(tarea.descripcion);
            console.log(`Estado: ${tarea.completado}`);
            console.log('========'.green);
        }
        break;
    case 'crear':
        let tarea = porHacer(argv.descripcion);
        break;
    case 'actualizar':
        let update = actualizar(argv.descripcion, argv.completado)
        console.log(update);
        break;
    case 'borrar':
        let brr = borrar(argv.descripcion);
        console.log(brr);
        break;
    default:
        console.log('comando no reconocido');
        break;
}