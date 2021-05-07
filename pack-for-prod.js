const fs = require('fs')
const { name, version, dependencies, description } = require('./package.json')

const main = () => {
  console.log('Creating the package.json file for production (azure app services)')
  fs.writeFileSync('dist/package.json', JSON.stringify({
    name, version, dependencies, description, scripts: {
      start: 'node main.js'
    }
  }))
}

main()