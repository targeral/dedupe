const dedupe = (
  client,
  hasher = JSON.stringify
) => {
  const clone = []
  const lookup = {}
  const len = client.length

  for (let i = 0; i < len; i++) {
    let elem = client[i]
    let hashed = hasher(elem)

    if (!lookup[hashed]) {
      clone.push(elem)
      lookup[hashed] = true
    }
  }

  return clone
}

module.exports = dedupe
