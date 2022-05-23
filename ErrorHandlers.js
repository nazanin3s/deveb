const errorMiddleWare = ( req, res, next ) => {
  const error = new Error(`Not Found - ${req.originalUrl}`)
  res.status(404)
  next(error)
}

const errorHandler = (error, req, res, next) => {

  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  console.log('In Error Handler')
  
  res.status(statusCode)
  res.json({
		success: false,
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? '' : error.stack
  })
}

module.exports = {
  errorHandler,
  errorMiddleWare
}