'use strict'
const toType = o => {
  return ({}).toString.call(o).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
const arrFilterNull = arr => arr.filter(i => i != null)
const filterNull = o => {
  if (!['object', 'array'].includes(toType(o))) {
    throw new Error('filterNull Only object or array input parameters are supported！')
  }
  for (const key in o) {
    if (o[key] == null) delete o[key]
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
      if (o[key] === '') delete o[key]
    }
    if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
      if (JSON.stringify(o[key]) === '{}') delete o[key]
    }
    if (toType(o[key]) === 'array') {
      o[key] = arrFilterNull(filterNull(o[key]))
      if (!o[key].length) delete o[key]
    }
  }
  if (toType(o) === 'array') o = arrFilterNull(o)
  return o
}

module.exports = filterNull
