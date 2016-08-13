import React from 'react'
import ReactDOM from 'react-dom'

let display = ""

const vulgar_options = ['PENIS', 'BOOBIES']

const buttonClicked = (label) => {
  switch(label) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '00':
      if(display.length > 0 && display[display.length - 1].match(/[0-9]/)) {
        display += label
      } else {
        display = label
      }
      break
    case '=':
      if(display.length > 0 && display.match(/[0-9.]/)) {
        display = vulgar_options[Math.round(Math.random() * (vulgar_options.length - 1))]
      }
      break
    case 'CLR':
      display = ''
      break
    default:
      display = label
  }

  render()
}

const Button = (props) => <div onClick={(event) => buttonClicked(props.label)}>
  { props.label }
</div>

const Calculator = (props) => <div>
  <div className="display">{ props.display }</div>
  <div className="row">
    <Button label="7" />
    <Button label="8" />
    <Button label="9" />
    <Button label="sqrt" />
    <Button label="CLR" />
  </div>
  <div className="row">
    <Button label="4" />
    <Button label="5" />
    <Button label="6" />
    <Button label="-" />
    <Button label="/" />
  </div>
  <div className="row">
    <Button label="1" />
    <Button label="2" />
    <Button label="3" />
    <Button label="+" />
    <Button label="*" />
  </div>
  <div className="row">
    <Button label="0" />
    <Button label="00" />
    <Button label="." />
    <Button label="+" />
    <Button label="=" />
  </div>
</div>

const render = () => {
  ReactDOM.render(<Calculator display={display} />, document.getElementById('react-root'))
}
render()
