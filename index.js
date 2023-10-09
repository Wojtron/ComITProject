const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const {response} = require("express");
const PORT = 8000

const url = 'https://www.bankier.pl/inwestowanie/profile/quote.html?symbol=KERNEL'

axios(url)
    .then(response=>{
        const html = response.data
        console.log(html)
    })

const app = express()
app.listen(PORT, () =>console.log(`server running on PORT ${PORT}`))