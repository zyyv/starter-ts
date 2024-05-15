import { describe, expect, it } from 'vitest'
import { a } from '../packages/core/src'

describe('test', () => {
  it('one', () => {
    expect(a).toBe(1)
  })
})
