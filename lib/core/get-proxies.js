const getProxies = (draft) => {
  Object.keys(draft).map((key) => key.includes('__incorrect__') && delete draft[key])

  return draft
}

module.exports = { getProxies }
