const prefix2SecondsMap = {
  s: 1,
  m: 60,
  h: 60 * 60,
  d: 60 * 60 * 24
}

function reverseClock (clock: string) {
  return clock.split(':').map((t, i) => {
    return parseInt(t.slice(0, -1), 10) * prefix2SecondsMap[t.slice(-1)]
  }).reduce((curr, acc) => {
    return curr + acc
  })
}

export { reverseClock }
