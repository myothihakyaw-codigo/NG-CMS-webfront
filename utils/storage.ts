const storage = {
  get: (name: string) => {
    const value = localStorage.getItem(name) || ''
    const firstLetter = value[0]
    if (firstLetter === '[' || firstLetter === '{') return JSON.parse(value)
    return value
  },
  set: (name: string, value: any) => {
    const newValue = JSON.stringify(value)
    localStorage.setItem(name, newValue)
  },
  clear: () => localStorage.clear(),
  remove: (name: string) => {
    localStorage.removeItem(name)
  },
}

export default storage
