module.exports = function countdown() {
  let count = 10

  let timer = setInterval(_ => {
    count--
    if (count === 0)
      clearInterval(timer)
  }, 1000) // runs every 1 second
}
