import React from 'react'
import ReactDOM from 'react-dom'

import $ from 'jquery'
import Post from '@models/post'
import './styles/style.css'
import './styles/less.less'
import './styles/scss.scss'
// import json from './assets/json'
import './babel'
// import xml from './assets/data.xml'
// import csv from './assets/data-csv.csv'
import WebpackLogo from '@/assets/webpack-logo.png'

let post = new Post('Webpack post title', WebpackLogo)

$('pre').addClass('code').html(post.toString())

const App = () => (
    <div className="container">
        <h1>Webpack test</h1>
        <hr />
        <div className="logo"></div>
        <hr />
        <pre></pre>
        <hr />
        <div className="box">
            <h2>Less</h2>
        </div>
        <hr />
        <div className="box2">
            <h2>SASS</h2>
        </div>
    </div>
)

ReactDOM.render(<App/>, document.getElementById('app'))

// console.log('Post to string', post.toString())
// console.log('JSON: ', json)
// console.log('XML: ', xml)
// console.log('CSV: ', csv)