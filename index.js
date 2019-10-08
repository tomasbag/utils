const roundNumber = (digit, precision=2, maxDecimals=7) => {
  const MAX_DECIMALS = maxDecimals
  let roundedNumber = Number(Math.round(`${digit}e${precision}`) + `e-${precision}`)
  if(roundedNumber === 0) {
    for(let n = precision+1; n<=MAX_DECIMALS; n++){
      roundedNumber = Number(Math.round(`${digit}e${n}`) + `e-${n}`)
      if(roundedNumber > 0) break
    }
  }
  return roundedNumber
}

export {
  roundNumber
}
