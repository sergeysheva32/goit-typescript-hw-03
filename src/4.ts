class Key {
  private signature: number = Math.random();
  getSignature(): number { return this.signature; }
}


class Person {
  constructor(private key: Key) { }

  getKey(): Key { return this.key }
}


abstract class House {
  protected door: boolean = false;
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
      console.log(`${person.getKey().getSignature()} ввійшов в будинок.`);
    } else {
      console.log("Вхід заборонено.");
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key) {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("Двері відкриті.");
    } else {
      console.log("Не вдалося відкрити двері.");
    }
  }
}

// Приклад використання класів
const myKey = new Key();

const myHouse = new MyHouse(myKey);
const person = new Person(myKey);

myHouse.openDoor(person.getKey());

myHouse.comeIn(person);

export { };