import * as express from 'express';
import {join} from 'path';
import {spawn} from 'child_process';

const app = express();

app.use(express.static(join(__dirname, '../public')));

app.get('/execmd', (req, res) => {
  if (!req.query.cmd) {
    return res.send({
      error: 'A command has to be provided',
    });
  } else {
    if (!req.query.arg) {
      return res.send({
        error: 'An argumment has to be provided',
      });
    } else {
      const command = spawn(req.query.cmd as string, [req.query.arg as string]);

      command.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      command.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      command.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code == 0) {

        } else {
          console.log(`child process exited with code ${code}`);
        }
      });
      return res.send({
        notes: [
          {
            title: 'Blue note',
            body: 'This is a blue note',
            color: 'blue',
          },
        ],
      });
    }
  }
});

app.get('*', (_, res) => {
  res.send('<h1>404</h1>');
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
