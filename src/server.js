const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
const {pageStudy, pageGiveClass, pageHome,saveClasses} = require('./pages')

nunjucks.configure('src/views',{
    express: server,
    noCache: true,

})

server.use(express.static("public"))

.get("/", pageHome)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClass)
.post("/save-classes", saveClasses)
.listen(5000)


