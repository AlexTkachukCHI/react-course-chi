// Enums і Union
enum Days {
    Monday = 'Понеділок',
    Tuesday = 'Вівторок',
    Wednesday = 'Середа',
    Thursday = 'Четвер',
    Friday = 'П\'ятниця',
    Saturday = 'Субота',
    Sunday = 'Неділя',
  }
  
  function getActivity(day: Days): string {
    switch (day) {
      case Days.Monday:
      case Days.Tuesday:
      case Days.Wednesday:
      case Days.Thursday:
      case Days.Friday:
        return 'Робочий день';
      case Days.Saturday:
      case Days.Sunday:
        return 'Відпочинок';
    }
  }
  
  // Дженерики
  class Queue<T> {
    private items: T[] = [];
  
    enqueue(item: T): void {
      this.items.push(item);
    }
  
    dequeue(): T | undefined {
      return this.items.shift();
    }
  }
  
  const stringQueue = new Queue<string>();
  stringQueue.enqueue('Hello');
  stringQueue.enqueue('World');
  console.log(stringQueue.dequeue()); // Output: 'Hello'
  
  const numberQueue = new Queue<number>();
  numberQueue.enqueue(42);
  numberQueue.enqueue(123);
  console.log(numberQueue.dequeue()); // Output: 42
  
  // Type Aliases та Literal Types
  type StringOrNumber = string | number;
  
  function combine(input1: StringOrNumber, input2: StringOrNumber): StringOrNumber {
    if (typeof input1 === 'string' && typeof input2 === 'string') {
      return input1 + input2;
    } else if (typeof input1 === 'number' && typeof input2 === 'number') {
      return input1 + input2;
    } else {
      throw new Error('Invalid types. Both values must be either strings or numbers.');
    }
  }
  
  // Розширені можливості інтерфейсів
  interface IPerson {
    name: string;
    age: number;
  }
  
  interface IWorker extends IPerson {
    position: string;
    salary: number;
  }
  
  class MyWorker implements IWorker {
    constructor(public name: string, public age: number, public position: string, public salary: number) {}
  
    getSalary(): number {
      return this.salary;
    }
  
    setSalary(newSalary: number): void {
      this.salary = newSalary;
    }
  }
  
  const john: MyWorker = new MyWorker('Mike Salivan', 30, 'Developer', 50000);
  console.log(john.getSalary()); // Output: 50000
  john.setSalary(60000);
  console.log(john.getSalary()); // Output: 60000
  