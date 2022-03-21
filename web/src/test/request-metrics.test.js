/* global test, expect, describe */

import RequestMetrics from '../lib/request-metrics'

describe('RequestMetrics', () => {
  describe('queueTimeFromHeaders', () => {
    test('Handle Heroku router format', () => {
      const now = new Date('2012-12-12T12:12:12.012Z')
      const requestStart = new Date(now.getTime() - 100).getTime().toString()
      const headers = { 'x-request-start': requestStart }

      expect(RequestMetrics.queueTimeFromHeaders(headers, now)).toBe(100)
    })
  })
})
