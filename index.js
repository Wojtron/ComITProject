const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const {response} = require("express");
const KERNEL = 'https://www.bankier.pl/inwestowanie/profile/quote.html?symbol=KERNEL'

const MOSTAL = 'https://www.bankier.pl/inwestowanie/profile/quote.html?symbol=MOSTALPLC'
const CDPROJEKT = 'https://www.bankier.pl/inwestowanie/profile/quote.html?symbol=CDPROJEKT'
const JR = 'https://www.bankier.pl/inwestowanie/profile/quote.html?symbol=JRHOLDING'


const app = express()
const PORT = 8000


axios(KERNEL)
    .then(response=>{
        const html = response.data
        const $ = cheerio.load(html)
        const articles =[]

        $('.summaryTable',html).each(function (){
            const title= $(this).text().replace(/'|\n/g, '').replace(/\s+/g, ' ').trim()
            const link = $(this).find('tr').attr("class")
            const companyName = title.split(" ").slice(0,1)
            const companyData = title.split(" ").slice(4)

            articles.push({
                companyName,
                companyData
           })
        })
        console.log(articles)
    }).catch(err => console.log(err))


axios(MOSTAL)
    .then(response=>{
        const html = response.data
        const $ = cheerio.load(html)
        const articles =[]

        $('.summaryTable',html).each(function (){
            const title= $(this).text().replace(/'|\n/g, '').replace(/\s+/g, ' ').trim()
            const link = $(this).find('tr').attr("class")
            const companyName = title.split(" ").slice(0,1)
            const companyData = title.split(" ").slice(4)

            articles.push({
                companyName,
                companyData
            })
        })

        console.log(articles)
    }).catch(err => console.log(err))
axios(CDPROJEKT)
    .then(response=>{
        const html = response.data
        const $ = cheerio.load(html)
        const articles =[]

        $('.summaryTable',html).each(function (){
            const title= $(this).text().replace(/'|\n/g, '').replace(/\s+/g, ' ').trim()
            const link = $(this).find('tr').attr("class")
            const companyName = title.split(" ").slice(0,1)
            const companyData = title.split(" ").slice(4)

            articles.push({
                companyName,
                companyData
            })
        })
        console.log(articles)
    }).catch(err => console.log(err))



axios(JR)
    .then(response=>{
        const html = response.data
        const $ = cheerio.load(html)
        const articles =[]

        $('.summaryTable',html).each(function (){
            const title= $(this).text().replace(/'|\n/g, '').replace(/\s+/g, ' ').trim()
            const link = $(this).find('tr').attr("class")
            const companyName = title.split(" ").slice(0,1)
            const companyData = title.split(" ").slice(8)

            articles.push({
                companyName,
                companyData
            })
        })
        console.log(articles)
    }).catch(err => console.log(err))


app.listen(PORT, () =>console.log(`server running on PORT ${PORT}`))