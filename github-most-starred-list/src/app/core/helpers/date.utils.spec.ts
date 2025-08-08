import { getDateFromNowThirtyDaysAgo } from './date.utils';

describe('getDateFromNowThirtyDaysAgo', () => {
  it('should return the date 30 days ago from now', () => {
    const result: string = getDateFromNowThirtyDaysAgo();
    expect(typeof result).toBe('string');
    expect(result).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });
});
