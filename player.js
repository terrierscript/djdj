const React = require("react")
const ReactDom = require("react-dom")
const { Component } = React
const fs = require("fs")
const path = require("path")
const baseDir = "/Users/inuscript/otake"
const audios = fs.readdirSync(baseDir).filter( (file) => {
  return file.indexOf("mp3") > -1
}).map ( (file) => {
  return path.resolve(baseDir , file)
})

const Audio = ( {title, url} ) => {
  return <div>
    <div>{title}</div>
    <audio src={url} controls/>
  </div>
}

const Button = () => {
  return <div>play</div>
}

class Player extends Component{
  render(){
    let players = audios.map( (path, i) => {
      return <Audio url={path} title={path} key={i}/>
    })
    return <div>
      {players}
    </div>
  }
}

var container = document.querySelector("#container")

ReactDom.render(<Player />, container)
