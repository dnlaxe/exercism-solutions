//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  #balance = 0
  #isOpen = false;
  
  constructor() {
    this.#balance = 0;
    this.#isOpen = false;
  }

  open() {
    if (this.#isOpen) {
      throw new ValueError('Error');
    }
  this.#isOpen= true;
  }

  close() {
    if (!this.#isOpen) {
      throw new ValueError('Error');
    }
    this.withdraw(this.#balance);
    this.#isOpen = false;
  }

  deposit(amount) {
    if (!this.#isOpen || amount < 0) {
      throw new ValueError('Error');
    }
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance || amount < 0 || !this.#isOpen) {
      throw new ValueError('Error');
    }
    this.#balance -= amount;
  }

  get balance() {
    if (!this.#isOpen) {
      throw new ValueError('Error');
    }
    return this.#balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
