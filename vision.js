function makeVision(bot) {

  // حماية قوية
  if (!bot || !bot.entity) {
    return Array(64).fill().map(() =>
      Array(64).fill('#000000')
    )
  }

  const size = 64
  const pixels = []

  for (let y = 0; y < size; y++) {

    const row = []

    for (let x = 0; x < size; x++) {

      // 👇 رؤية بسيطة تعتمد على وجود البوت فقط
      const dy = bot.entity.position.y

      if (y < 32) {
        row.push('#00ff00') // أرض
      } else {
        row.push('#87ceeb') // سماء
      }
    }

    pixels.push(row)
  }

  return pixels
}

module.exports = { makeVision }