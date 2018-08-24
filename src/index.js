import React from 'react'

const Wrapper = {
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
}
const DashStyle = {
  display: 'flex',
  width: '8px',
  height: '2px',
}

const BreakerStyle = {
  display: 'flex',
  alignItems: 'center',
  fontStyle: 'italic',
  fontWeight: 'bold',
}

const CircleStyle = {
  fontWeight: 'bold',
  border: '2px solid',
  borderRadius: '50%',
  width: '25px',
  height: '25px',
  fontSize: '16px',
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
}

const CircleSelectedStyle = {
  width: '35px',
  height: '35px',
  fontSize: '20px'
}

const DEFAULT_CIRCLE_COLORS = {
  DONE: {
    border: '#25BCEB',
    background: '#ffffff',
    font: '#25BCEB'
  },
  UNDONE: {
    border: '#C7C7C7',
    background: '#ffffff',
    font: '#C7C7C7'
  },
  LAST: {
    border: '#60D172',
    background: '#ffffff',
    font: '#60D172'
  },
  CURRENT: {
    border: '#25BCEB',
    background: '#25BCEB',
    font: '#ffffff'
  }
}

export default function Stepper ({maxSteps, steps, selected, colors}) {

  const CIRCLE_COLORS = colors || DEFAULT_CIRCLE_COLORS

  const CONNECTOR_COLORS = {
    DONE: CIRCLE_COLORS.DONE.border,
    UNDONE:  CIRCLE_COLORS.UNDONE.border
  }

  const getCircleColors = (number, selection, lastStep) => {
    if (number < selection) {
      return CIRCLE_COLORS.DONE
    } else if (number === selection) {
      return CIRCLE_COLORS.CURRENT
    } else if (number === lastStep) {
      return CIRCLE_COLORS.LAST
    } else {
      return CIRCLE_COLORS.UNDONE
    }
  }

  const getConnectorColor = (number, selection) => {
    if (number <= selection) {
      return CONNECTOR_COLORS.DONE
    } else {
      return CONNECTOR_COLORS.UNDONE
    }
  }

  const Circle = (props) => {
    let style = props.selected ? {...CircleStyle, ...CircleSelectedStyle} : CircleStyle
    return (
      <div style={{...style, color: props.colors.font, backgroundColor: props.colors.background, borderColor: props.colors.border}}>
        {props.number}
      </div>
    )
  }

  const Breaker = (props) => (
    <div style={{...BreakerStyle, color: props.color}}>
      <Dash color={props.color} />||<Dash color={props.color} />
    </div>
  )

  const Dash = (props) => (
    <div style={{...DashStyle, backgroundColor: props.color}} />
  )

  // Build the stepper array
  let stepsArr = Array.from(Array(steps)).map((e, i) => i + 1)

  const arrayDeleteFromEnds = (a, b, exclude, arr) => {
    if (arr[a] !== exclude) {
      stepsArr.splice(a, 1)
    } else if (arr[b] !== exclude) {
      stepsArr.splice(b, 1)
    }
  }

  // Compressing the steps with a breaker (-//-) connector.
  while (stepsArr.length > maxSteps) {
    let first = 1
    let last = stepsArr.length - 2

    if (selected < maxSteps - 1) {
      arrayDeleteFromEnds(last, first, selected, stepsArr)
    } else {
      arrayDeleteFromEnds(first, last, selected, stepsArr)
    }
  }

  // Inflate steps to UI elems.
  let stepperElms = []
  let previous = 0
  stepsArr.forEach(s => {
    if (previous !== 0) {
      if (s === previous + 1) {
        stepperElms.push(<Dash key={'d' + s} color={getConnectorColor(s, selected)} />)
      } else {
        stepperElms.push(<Breaker key={'b' + s} color={getConnectorColor(s, selected)} />)
      }
    }
    previous = s
    stepperElms.push(<Circle key={'c' + s} colors={getCircleColors(s, selected, stepsArr[stepsArr.length - 1])} number={s} selected={(selected === s)} />)
  })

  return (
    <div style={Wrapper}>{stepperElms}</div>
  )
}

Stepper.propTypes = {
  steps: function (props, propName, componentName) {
    if (!Number.isInteger(props[propName]) || props[propName] < 0) {
      return new Error(
        `Props "${propName}" must be > 0.`
      )
    }
  },
  maxSteps: function (props, propName, componentName) {
    if (props[propName] && !Number.isInteger(props[propName])) {
      return new Error(
        `Props "${propName}" must be an integer`
      )
    }
  },
  selected: function (props, propName, componentName) {
    if (props[propName] &&  (!Number.isInteger(props[propName]) || props[propName] < 1 || props[propName] > props['steps'])) {
      return new Error(
        `Props "${propName}" must be in [1, steps].`
      )
    }
  }
}
