

// const sqlite3  = require('sqlite3')   
// const { open } = require('sqlite')

import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

// este é um await de nível superior 
async function openDb () {
  return open({
    filename: 'database.db',
    driver: sqlite3.Database
  })
}

// module.exports = openDb

export { openDb }