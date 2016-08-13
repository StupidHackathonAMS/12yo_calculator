import React from 'react'
import ReactDOM from 'react-dom'

let display = "0"

const vulgar_options = ['PENIS', 'BOOBIES']

const icon_map = {
  '*': 'times',
  '/': 'divide',
  '+': 'plus',
  '-': 'minus',
  '.': 'dot',
  '=': 'equal',
  'sqrt': 'square',
}

const buttonClicked = (label) => {
  if(display === 'ERR' && label !== 'CLR') { return }

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
    case '.':
      if(display.length > 0 && display[0].match(/[1-9]/)) {
        if(display.length > 8) {
          display = 'ERR'
        } else {
          display += label
        }
      } else {
        display = label[0]
      }
      break
    case '=':
      if(display.length > 0 && display.match(/[0-9.]/)) {
        display = vulgar_options[Math.round(Math.random() * (vulgar_options.length - 1))]
      }
      break
    case 'sqrt':
      display = 'ERR'
      break
    case 'CLR':
      display = '0'
      break
    case '+':
    case '-':
    case '/':
    case '*':
      display = label
      break
    default:
      display = 'ERR'
  }

  render()
}

const Button = (props) => <div onClick={(event) => buttonClicked(props.label)} className="button">
  <img src={ `design/${icon_map[props.label] || props.label}.png` } />
</div>

const Calculator = (props) => <div className="calculator">
  <img className="solar_panel" src="design/solar_panel.png" />
  <div className="display">{ props.display }</div>
  <img className="sliders" src="design/button.png" />
  <div className="buttons">
    <div className="top_buttons">
      <Button label="eex" />
      <Button label="m_minus" />
      <Button label="m-plus" />
      <Button label="mrc" />
      <Button label="mu" />
    </div>
    <div className="top_buttons">
      <Button label="one_x" />
      <Button label="percent_t" />
      <Button label="percent" />
      <Button label="plus_minus" />
      <Button label="triangle_percent" />
    </div>
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
    <div className="part_row">
      <div>
        <Button label="1" />
        <Button label="2" />
        <Button label="3" />
      </div>
      <div>
        <Button label="0" />
        <Button label="00" />
        <Button label="." />
      </div>
    </div>
    <div className="part_row">
      <Button label="+" />
    </div>
    <div className="part_row">
      <div>
        <Button label="*" />
      </div>
      <div>
        <Button label="=" />
      </div>
    </div>
    <div className="row">
    </div>
  </div>
</div>

const render = () => {
  ReactDOM.render(<Calculator display={display} />, document.getElementById('react-root'))
}
render()
