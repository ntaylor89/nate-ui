import system from 'system-components'

export default system(props => ({
  is: 'section',
  mt: 5,
  ...(props.measure && { maxWidth: '32rem' })
}))
