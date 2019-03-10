import axios from 'axios'

export default axios.create({
  baseURL: 'https://sandbox.usaepay.com/api/v2/',
  command: 'cc:sale',
  headers: {
    'User-Agent': 'uelib v6.8',
    'Content-Type': 'application/json',
    'Authorization': 'sBasic X1Y4N1F0YjUxM0NkM3ZhYk03UkMwVGJ0SldlU284cDc6czIvYWJjZGVmZ2hpamtsbW5vcC9iNzRjMmZhOTFmYjBhMDk3NTVlMzc3ZWU4ZTIwYWE4NmQyYjkyYzNkMmYyNzcyODBkYjU5NWY2MzZiYjE5MGU2'
  }
})
