import { excludeOwnerName } from './ShipsList';

describe('excludeOwnerName function', () => {
  it('should return the country of origin when owner name contains parentheses', () => {
    const ownerName = 'Owner (France)';
    const result = excludeOwnerName(ownerName);
    expect(result).toBe('France');
  });

  it('should return "No country of origin" when owner name does not contain parentheses', () => {
    const ownerName = 'Owner';
    const result = excludeOwnerName(ownerName);
    expect(result).toBe('No country of origin');
  });
});