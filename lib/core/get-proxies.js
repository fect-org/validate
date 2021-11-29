const getProxies = (draft) => {
  Object.keys(draft)
    .filter((k) => k.includes('__incorrect__'))
    .map((k) => delete draft[k])

  return draft
}

module.exports = { getProxies }
