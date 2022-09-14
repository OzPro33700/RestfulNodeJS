const lib = require('../lib');
const db = require('../db');
const mail = require('../mail');

/*describe('absolute', () => {
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
    const args = [null, undefined, NaN, '', 0, false];

    args.forEach((a) => {
      expect(() => {
        lib.registerUser(null);
      }).toThrow();
    });
  });

  it('should return a user object if valid username is passed', () => {
    const result = lib.registerUser('mosh');
    expect(result).toMatchObject({ username: 'mosh' });
    expect(result.id).toBeGreaterThan(0);
  });
});*/

describe('testFizzBuzz', () => {
  it('should raise an exception if input is not a number', () => {
    const args = [
      null,
      undefined,
      NaN,
      '',
      false,
      { a: 1 },
      [1, 2],
      new Error('abc'),
    ];

    args.forEach((a) => {
      expect(() => {
        lib.fizzBuzz(a).toThrow();
      });
    });
  });

  it('should return the provided input, assuming it is a number', () => {
    const args = [Number.MIN_VALUE, -1, 0, -0.1, 0.1, 1, Number.MAX_VALUE];

    args.forEach((a) => {
      expect(() => {
        lib.fizzBuzz(a).toBeCloseTo(a);
      });
    });
  });

  it('should return FizzBuzz, assuming the number is divisible both per 3 and 5', () => {
    const args = [-15, 15];
    const args_neg_case = [-3, -5, 3, 5];

    args.forEach((a) => {
      expect(() => {
        lib.fizzBuzz(a).toBe('FizzBuzz');
      });
    });

    args.forEach((a) => {
      expect(() => {
        lib.fizzBuzz(args_neg_case).not.toBe('FizzBuzz');
      });
    });
  });

  it('should return Fizz, assuming the number is divisible per 3', () => {
    const args = [-15, -3, 3, 15];
    const args_neg_case = [-5, 0, 5];

    args.forEach((a) => {
      expect(() => {
        lib.fizzBuzz(a).toBe('Fizz');
      });
    });

    args.forEach((a) => {
      expect(() => {
        lib.fizzBuzz(args_neg_case).not.toBe('Fizz');
      });
    });
  });

  it('should return Buzz, assuming the number is divisible per 5', () => {
    const args = [-15, -5, 5, 15];
    const args_neg_case = [-3, 0, 3];

    args.forEach((a) => {
      expect(() => {
        lib.fizzBuzz(a).toBe('Buzz');
      });
    });

    args.forEach((a) => {
      expect(() => {
        lib.fizzBuzz(args_neg_case).not.toBe('Buzz');
      });
    });
  });
});

describe('applyDiscount', () => {
  it('should apply 10% discount if customer has more than 10 points', () => {
    // MOCK (simulating access to database)
    db.getCustomerSync = function (customerId) {
      console.log('Fake reading customer...');
      return { id: customerId, points: 20 };
    };

    const order = { customerId: 1, totalPrice: 10 };
    lib.applyDiscount(order);
    expect(order.totalPrice).toBe(9);
  });
});

describe('notifyCustomer', () => {
  it('should send an email to the customer', () => {
    // Enrich the DB mock, to return simply a value and make the process go through
    db.getCustomerSync = jest.fn().mockReturnValue({ email: 'a' });
    mail.send = jest.fn();

    lib.notifyCustomer({ customerId: 1 });
    expect(mail.send).toHaveBeenCalled();
    /* Check arguments passed to the function:
    First array mock.calls dimension : the call number
    Second array mock.calls dimension : the first, second, ..., nth passed argument */
    expect(mail.send.mock.calls[0][0]).toBe('a');
    expect(mail.send.mock.calls[0][1]).toMatch(/order/);
  });
});
