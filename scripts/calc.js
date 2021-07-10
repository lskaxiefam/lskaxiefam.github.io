var calc = {
  enemyEnergy: 0,
  enemyCards: 0,
  start: function() {
    this.enemyEnergy = 3;
    this.enemyCards = 6;
    this.updateUi();
  },
  keyup: function(event) {
    var addToEnemyEnergy = ['5','d'].indexOf(event.key) != -1;
    var removeFromEnemyEnergy = ['2','c'].indexOf(event.key) != -1;
    var addToEnemyCards = ['6','f'].indexOf(event.key) != -1;
    var removeFromEnemyCards = ['v','3'].indexOf(event.key) != -1;
    var nextRound = ['=','r', '-'].indexOf(event.key) != -1;
    var reset = ['Escape'].indexOf(event.key) != -1;

    if (addToEnemyCards) {
      calc.addToEnemyCards(1);

    } else if (removeFromEnemyCards) {
      calc.addToEnemyCards(-1);

    } else if (addToEnemyEnergy) {
      calc.addToEnemyEnergy(1);

    } else if (removeFromEnemyEnergy) {
      calc.addToEnemyEnergy(-1);

    } else if (nextRound) {
      calc.nextRound();

    } else if (reset) {
      calc.start();
    }
  },
  nextRound: function() {
    this.addToEnemyCards(3);
    this.addToEnemyEnergy(2);
  },
  addToEnemyCards: function(amount) {
    this.enemyCards = this.enemyCards + amount;
    if (this.enemyCards < 0) {
      this.enemyCards = 0;
    }
    if (this.enemyCards > 12) {
      this.enemyCards = 12;
    }
    this.updateUi();
  },
  addToEnemyEnergy: function(amount) {
    this.enemyEnergy = this.enemyEnergy + amount;
    if (this.enemyEnergy < 0) {
      this.enemyEnergy = 0;
    }
    if (this.enemyEnergy > 10) {
      this.enemyEnergy = 10;
    }
    this.updateUi();
  },
  updateUi: function() {
    $('#enemyEnergy').html(this.enemyEnergy);
    $('#enemyCards').html(this.enemyCards);
  },
  close: function() {
    $('.modal').removeClass('is-active');
    document.removeEventListener('keyup', this.keyup);
  },
  open: function() {
    $('.modal').addClass('is-active');
    this.start();
    document.addEventListener('keyup', this.keyup);
  }
}
