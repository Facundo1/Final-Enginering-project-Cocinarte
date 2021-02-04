const { spawn } = require('child_process')
const path = require('path')
const cron = require('node-cron')

/*Los comandos básicos de volcado son:
1. mongodump --db = rbac_tutorial --archive =. / Rbac.gzip --gzip
2. mongorestore --db = rbac_tutorial --archive =. / Rbac.gzip --gzip
Usando mongodump - sin ningún argumento:
  volcará todos y cada uno de los db en una carpeta llamada "dump" en el directorio desde donde se ejecutó.
Usando mongorestore, sin ningún argumento:
  intentará restaurar cada base de datos desde la carpeta "dump" en el directorio actual, si la carpeta "dump" no existe, simplemente fallará.
*/
const DB_NAME = 'Cocinarte'
const ARCHIVE_PATH = path.join(
  __dirname,
  'server/public/backup_folder',
  `${DB_NAME}.gzip`
)
// Programación de la copia de seguridad cada 7 dias (usando node-cron)
cron.schedule('0 0 * * 0', () => backupMongoDB())

function backupMongoDB() {
  const child = spawn(
    'mongodump',
    [`--db=${DB_NAME}`, `--archive=${ARCHIVE_PATH}`, '--gzip'],
    { shell: true }
  )
  child.stdout.on('data', data => {
    console.log('stdout:\n', data)
  })
  child.stderr.on('data', data => {
    console.log('stderr:\n', Buffer.from(data).toString())
  })
  child.on('error', error => {
    console.log('error:\n', error)
  })
  child.on('exit', (code, signal) => {
    if (code) console.log('Process exit with code:', code)
    else if (signal) console.log('Process killed with signal:', signal)
    else console.log('Backup is successfull ✅')
  })
}
