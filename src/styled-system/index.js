import space from './space'
import color from './color'
import typography from './typography'
import layout from './layout'
import flexbox from './flexbox'
import grid from './grid'
import background from './background'
import border from './border'
import position from './position'
import shadow from './shadow'

const decorators = {
    ...space,
    ...color,
    ...typography,
    ...layout,
    ...flexbox,
    ...grid,
    ...background,
    ...border,
    ...position,
    ...shadow,
    // TODO: figure out how to handle compose
    // Ditto variant (if anything)
}
const transformStyledSystemProps = (name, props) => {

    return { ...decorators[name] || {}, ...props }
}

export default transformStyledSystemProps