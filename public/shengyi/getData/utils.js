import { imgBaseUrl } from './env'

export const imgResolve = path => {
  return imgBaseUrl + path
}

export const timeResolve = timer => {
  if (typeof timer !== 'number') return;
  let time
  timer = parseInt(timer) * 1000
  time = new Date(timer).toLocaleDateString().replace(/\//g, '-')
  return time
}