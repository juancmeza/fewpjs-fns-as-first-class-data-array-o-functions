function wakeDog(dogName, dogBreed) {
    let st = `Wake ${dogName} the ${dogBreed}`
    console.log(st);
    return st
  }

  function leashDog(dogName, dogBreed) {
    let st = `Leash ${dogName} the ${dogBreed}`
    console.log(st);
    return st
  }

  function walkToPark(dogName, dogBreed) {
    let st = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(st);
    return st
  }

  function throwFrisbee(dogName, dogBreed) {
    let st = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(st);
    return st
  }

  function walkHome(dogName, dogBreed) {
    let st = `Walk home with ${dogName} the ${dogBreed}`
    console.log(st);
    return st
  }

  function unleashDog(dogName, dogBreed) {
    let st = `Unleash ${dogName} the ${dogBreed}`
    console.log(st);
    return st
  }

  let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

  function exerciseDog(dogName, dogBreed){
    let values = []
    routine.forEach(activity => values.push(activity(dogName, dogBreed)))
    return values

  }



