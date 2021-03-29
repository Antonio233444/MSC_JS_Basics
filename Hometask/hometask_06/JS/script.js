class Tiger {
  constructor(name) {
    this.name = name;
  }

  feedCat() {
    return 'Purrrrrrrrrr';
  }
}


class AngryTiger extends Tiger {
  throwDart() {
    return 'Zzzzzzzzz';
  }
}

const firstCat = new Tiger('Рыжик');
console.log(firstCat.feedCat());

const secondCat = new AngryTiger('Дымок');
console.log(secondCat.throwDart())























