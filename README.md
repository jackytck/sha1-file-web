## Sha1sum for web file object

### Install

```bash
yarn add sha1-file-web
```

### Usage
```javascript
import sha1 from 'sha1-file-web'

// Input: file is the File object:
// https://developer.mozilla.org/en-US/docs/Web/API/File
// Output: string of sha1 hash
async function test (file) {
  const hash = await sha1(file)
  console.log('hash:', hash)
}
```
