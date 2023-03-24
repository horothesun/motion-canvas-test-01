import {makeScene2D} from '@motion-canvas/2d/lib/scenes'
import {Circle} from '@motion-canvas/2d/lib/components'
import {createRef} from '@motion-canvas/core/lib/utils'
import {all} from '@motion-canvas/core/lib/flow'

const initialColor = '#e13238'
const finalColor = '#e6a700'

export default makeScene2D(function* (view) {
  const myCircle = createRef<Circle>()

  view.add(
    <Circle
      ref = {myCircle}
      x = {-300}
      width = {140}
      height = {140}
      fill = {initialColor}
    />,
  )

  yield* all(
    myCircle().position.x(300, 1).to(-300, 1),
    myCircle().scale(2, 1).to(1, 1),
    myCircle().fill(finalColor, 1).to(initialColor, 1),
  )
})
