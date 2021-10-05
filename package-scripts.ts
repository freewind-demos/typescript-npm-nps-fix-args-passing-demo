function getArgs() {
  // release --dbHosts=ARCHER_64P2
  const lastArgv = [...process.argv].pop();
  if (lastArgv?.includes(' --')) {
    return ' --' + lastArgv.split(' --').pop();
  } else {
    return '';
  }
}

function parallel(...tasks: string[]): string {
  return 'run-p ' + tasks.map((task) => `'start "${task}${getArgs()}"'`).join(' ');
}

function series(...tasks: string[]): string {
  return 'run-s ' + tasks.map((task) => `'start "${task}${getArgs()}"'`).join(' ');
}

module.exports = {
  scripts: {
    hello: {
      default: series('hello.bbb', 'hello.aaa'),
      parallel: parallel('hello.aaa', 'hello.bbb'),
      aaa: 'echo aaa',
      bbb: 'echo bbb',
    }
  }
};
