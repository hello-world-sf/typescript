function flatten (array, result) {
  result = result || []

  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flatten(array[i], result)
    } else {
      result.push(array[i])
    }
  }

  return result
}

console.log(flatten([1, [2, [3, [4, [5], 6], 7], 8], 9]))
