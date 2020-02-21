function basicTeenager(age) {
  if (age > 13 || age < 19) {
    console.log("You are a teenager")
    return "You are a teenager"
  } else {
    console.log("You are not a teenager")
    return "You are not a teenager"
  }
}

basicTeenager(20)

function teenager(age) {
  if (age > 13 && age < 19) {
    "You are a teenager"
  } else {
    "You are not a teenager"
  }
}

teenager(20)

function ageChecker(age) {
  if (age > 13 && age < 19) {
    "You are a teenager"
  } else if (age < 13) {
    "You are a kid"
  }
}

ageChecker(10)

function ternaryTeenager(age) {
  age > 13 && age < 19 ? "You are a teenager" : "You are not a teenager"
}

ternaryTeenager(12)

function switchAge(age) {
  if (age > 13 && age < 19) {
    teenager = true
  }
  switch(teenager) {
    case true:
      "You are a teenager"
      break;
    case false:
      "You have an age"
      break
  }
}
