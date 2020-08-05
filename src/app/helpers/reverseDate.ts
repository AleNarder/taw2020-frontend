function reverseDate (date: string) {
  const newDate = new Date(date)
  if (newDate) {
    return newDate.getTime()
  }
  return null
}

export {reverseDate}
