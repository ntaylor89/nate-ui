import snapshot from '@compositor/kit-snapshot'
import * as examples from './examples'

beforeAll(() => {
  window.matchMedia = jest.fn(() => ({
    addListener: jest.fn()
  }))
})

describe('snapshots', () => (
  snapshot(examples)
))
