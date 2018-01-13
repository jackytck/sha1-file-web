/* global FileReader */
import crypto from 'crypto-js'
import sha1 from 'crypto-js/sha1'

/**
 * sha1 hash a html file in browser.
 */
function sha1sum (file) {
  return new Promise(resolve => {
    const reader = new FileReader()
    reader.onload = function () {
      const wordArray = crypto.lib.WordArray.create(this.result)
      resolve(sha1(wordArray).toString())
    }
    reader.readAsArrayBuffer(file)
  })
}

export default sha1sum
