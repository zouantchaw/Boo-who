// Check if a value is classifiesd as a boolean primitive.
// Return true or false

function booWho(bool) {
  let boolean = typeof true
  let isBoolean = typeof bool
  console.log(isBoolean)

  if (isBoolean === boolean) {
    return true
  } else {
    return false
  }
}

// one line abstraction
function booWho2(bool) {
  return typeof bool === "boolean";
}

booWho(null);