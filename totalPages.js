const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
<<<<<<< HEAD
  if (arrayItems === undefined || arrayItems === null) {
    return undefined
  } else if (rowsPerPage === undefined || rowsPerPage === null) {
    return 1
  } else if(rowsPerPage === 0){
      return 1
  } else {
    return Math.ceil(arrayItems.length / rowsPerPage)
  }
  
  

=======
  //code here
  console.log('hello')
}
>>>>>>> deda2f7eb802a63dd6552ec3d382d6f598668a76
module.exports = totalPages
