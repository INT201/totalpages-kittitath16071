const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  if (arrayItems === undefined || arrayItems === null) {
    return undefined
  } else if (rowsPerPage === undefined || rowsPerPage === null) {
    return 1
  } else if(rowsPerPage === 0){
      return 1
  } else {
    return Math.ceil(arrayItems.length / rowsPerPage)
  }
  
  

module.exports = totalPages
