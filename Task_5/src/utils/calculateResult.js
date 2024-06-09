export const calculateResult = (a, b, sign) => {
    const operations = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      'x': (a, b) => a * b,
      '/': (a, b) => {
        if (b === 0) return 'Error'; // Handling division by zero
        return a / b;
      },
    };
    return operations[sign](parseFloat(a), parseFloat(b));
  };
  