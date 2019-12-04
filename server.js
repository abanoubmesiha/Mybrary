const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const indexRouter = require('./routes');

app.set('view engine','ejs')
app.set('view',__dirname + '/views')
app.set('layout', 'layout/layout');
app.use(expressLayouts)
app.use(express.static('public'));
app.use('/',indexRouter);


app.listen(process.env.PORT || 3000)

