export const cssvars = (vars: {}) => {
  return Object.entries(vars).reduce((vars, [name, value]) => {
    return value !== undefined ? { ...vars, [`--${name}`]: value } : vars
  }, {})
}

export const openPopupWindow = ({ url, width, height }: { url: string; width: number; height: number }) => {
  const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY
  const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX

  const screenWidth = window.innerWidth
    ? window.innerWidth
    : document.documentElement.clientWidth
    ? document.documentElement.clientWidth
    : screen.width

  const screenHeight = window.innerHeight
    ? window.innerHeight
    : document.documentElement.clientHeight
    ? document.documentElement.clientHeight
    : screen.height

  const systemZoom = screenWidth / window.screen.availWidth
  const left = (screenWidth - width) / 2 / systemZoom + dualScreenLeft
  const top = (screenHeight - height) / 2 / systemZoom + dualScreenTop

  const newWindow = window.open(
    url,
    '_blank',
    `top=${top},left=${left},width=${width / systemZoom},height=${height / systemZoom}`
  )

  return newWindow
}

export const months = [
  { label: 'January', value: 1 },
  { label: 'February', value: 2 },
  { label: 'March', value: 3 },
  { label: 'April', value: 4 },
  { label: 'May', value: 5 },
  { label: 'June', value: 6 },
  { label: 'July', value: 7 },
  { label: 'August', value: 8 },
  { label: 'September', value: 9 },
  { label: 'October', value: 10 },
  { label: 'November', value: 11 },
  { label: 'December', value: 12 },
]
