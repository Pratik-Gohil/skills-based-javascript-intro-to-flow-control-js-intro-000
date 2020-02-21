function basicTeenager(age) {
  if (age >= 13 && age < 20) {
    return "You are a teenager"
  } else {
    return "You are not a teenager"
  }
}

console.log(`"basicTeenager"::${basicTeenager(13)}`)

function teenager(age) {
  if (age > 13 && age < 19) {
    return "You are a teenager"
  } else {
    return "You are not a teenager"
  }
}

teenager(20)

function ageChecker(age) {
  if (age > 13 && age < 19) {
    return "You are a teenager"
  } else if (age < 13) {
    return "You are a kid"
  }
}

ageChecker(10)

function ternaryTeenager(age) {
  return age > 13 && age < 19 ? "You are a teenager" : "You are not a teenager"
}

ternaryTeenager(12)

function switchAge(age) {
  if (age > 13 && age < 19) {
    teenager = true
  }
  switch(teenager) {
    case true:
      return "You are a teenager"
      break;
    case false:
      return "You have an age"
      break
  }
}

switchAge(19)
