const express = require('express')
const app = express()
const PORT = 8080

app.get('/', (req, res) => {
    res.send("99 Little bugs in the code " + `<a href='/98'> take one down, patch it around </a>`)
})

app.get('/:number_of_bugs', (req, res) => {
    const bugs = req.params.number_of_bugs
    const buggedBugs = parseFloat(bugs) + Math.floor(Math.random()*100)
    const boolean = Math.random() < 0.7
    console.log(buggedBugs)
    if(bugs > 0){
        if(boolean){
            res.send(`${bugs} little bugs in the code </br> 
             ${bugs}  little bugs </br> 
             Take one down  </br> 
             Patch it around  </br> 
            <a href='/${bugs -1}'>${bugs -1} bugs in the code </a>`)
        } else{
            res.send(`${bugs} little bugs in the code </br> 
             ${bugs}  little bugs </br> 
             Take one down  </br> 
             Patch it around  </br> 
            <a href='/${buggedBugs}'>${buggedBugs} bugs in the code </a>`)
        }
    }else{
        res.send("<a href='/'>Start Over</a>")
    }
})



// app.get('/', (req, res) => {
//     res.send("99 Bottles of beer on the wall " + `<a href='/98'> take one down, pass it around </a>`)
// })

// app.get('/:number_of_bottles', (req, res) => {
//     const bottles = req.params.number_of_bottles
//     // const bottlesMinusOne = bottles - 1
//     if(bottles > 0){
//         res.send(bottles + " Bottles of beer on the wall." + `<a href='/${bottles -1}'>take one down, pass it around </a>`)
//     }else{
//         res.send("<a href='/'>Start Over</a>")
//     }
// })






app.listen(PORT, () => {
    console.log(`listening on port: ` + PORT);
  });