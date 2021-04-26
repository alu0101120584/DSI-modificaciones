
import * as fs from 'fs';
import {spawn} from 'child_process';
import {access, constants} from 'fs';

const filename = process.argv[2];
const comando = process.argv[3];

if (!filename) {
  console.log('Debe especificar un fichero');
  process.exit(1);
}

access(filename, constants.F_OK, (err) => {
  console.log(`${filename} ${err ? 'no exist' : 'existe'}`);
  if (err) {
    process.exit(1);
  } else {
    fs.watch(filename, (eventType, filename) => {
      const ls = spawn(comando, ['-l', '-h', filename]);

      if (eventType == 'rename') {
        console.log('Fichero eliminado, terminando ejecucuión');
        process.exit(1);
      }

      let output = '';
      console.log(output);

      ls.stdout.on('data', (chunk) => (output += chunk));

      ls.on('close', () => {
        const parts = output.split(/\s+/);
        console.log([parts[0], parts[4], parts[8]]);
      });
    });
  }
});


