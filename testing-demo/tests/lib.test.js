const lib = require('../lib');

describe('absolute', () => {
  it('should return a positive number if input is positive', () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  it('should return a positive number if input is negative', () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  it('should return a zero number if input is zero', () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

describe('greet', () => {
  it('should return the greeting message', () => {
    const result = lib.greet('Mosh');
    expect(result).toMatch(/Mosh/);
  });
});

describe('getCurrencies', () => {
  it('should return supported currencies', () => {
    const result = lib.getCurrencies();

    // Proper way
    expect(result).toContain('USD');
    expect(result).toContain('AUD');
    expect(result).toContain('EUR');

    // Other good way (for strict-matching array)
    expect(result).toEqual(expect.arrayContaining(['EUR', 'USD', 'AUD']));
  });
});

describe('getProduct', () => {
  it('should return the product with the given id', () => {
    const result = lib.getProduct(1);
    expect(result).toMatchObject({ id: 1, price: 10 });
    expect(result).toHaveProperty('id');
  });
});

describe('registerUser', () => {
  it('should throw if username is falsy', () => {
    expect(() => {
      lib.registerUser(null);
    }).toThrow();
  });
});
