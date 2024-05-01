// bunx --bun vite && unocss -w
// until Bun shell supports background processes

import process from 'node:process'

const vite = Bun.spawn(
  ['bunx', '--bun', 'vite', '--host'],
)

const uno = Bun.spawn(
  ['unocss', '-w'],
)

printStream(vite.stdout)
printStream(uno.stdout)

async function printStream(stream: ReadableStream<Uint8Array>) {
  const reader = stream.getReader()
  let result = await reader.read()

  while (!result.done) {
    process.stdout.write(new TextDecoder().decode(result.value))
    result = await reader.read()
  }
}
