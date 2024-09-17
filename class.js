class Animal {
  name;
  species;
  sound;

  constructor(name, species, sound) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }

  makeSound() {
    console.log(`The ${this.name} says ${this.sound}`);
  }
}

const cat = new Animal("Pika", "Cat", "Meow Meow");
cat.makeSound();
