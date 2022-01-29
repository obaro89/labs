class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super(name); 
    }
  
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  let dog1 = new Dog('German Shepherd');
  dog1.speak(); // German Shepherd