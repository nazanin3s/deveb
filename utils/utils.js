const tryCatchWrapper = ( cb ) => async ( req, res, next ) => {
  try {
    await cb(req,res,next)
  } catch( err ) {
    console.log(err.message)
    console.log(err.name)
    
    next(err)
  }
}

module.exports = tryCatchWrapper