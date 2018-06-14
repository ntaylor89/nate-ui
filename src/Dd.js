import system from 'system-components'

export default system(props => ({
  is: 'dd',
  color: props.color,
  ...(props.center && { textAlign: 'center' })
}))
