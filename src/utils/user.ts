import { useUser } from '../stores/user'
const user = useUser()

const constant = 0.2

export const calculateLevel = (exp: number) => {
  const pseudoLevel = Math.floor(constant * Math.sqrt(exp))

  const level = pseudoLevel + 1

  return level
}

export const calculateLevelProgress = (exp: number) => {
  const pseudoLevel = Math.floor(constant * Math.sqrt(exp))
  const forCurrentLevel = Math.pow(pseudoLevel / constant, 2)
  const forNextLevel = Math.pow((pseudoLevel + 1) / constant, 2)
  const levelDifference = forNextLevel - forCurrentLevel
  const toNextLevel = forNextLevel - exp

  const progress = ((levelDifference - toNextLevel) / levelDifference) * 100

  return progress
}
