class Card {

    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    // constructor(owner) {
    //     this.owner = owner;
    //     this.balance = 0;
    // }

    setBalance(accountBalance) {
        this.balance = accountBalance;
    }

    getBalance() {
        return this.balance;
    }

    addBalance(sum) {
        this.balance += sum;
    }

    reduceBalance(sum) {
        return this.balance -= sum;
    }

    getConvertionBalance(conversionRate) {
        this.balance *= conversionRate;
        return this.balance;
    }
}

class CreditCard extends Card {

    constructor(owner, balance) {
        super(owner, balance);
    }
}

class DebitCard extends Card {

    constructor(owner, balance) {
        super(owner);
        if (balance < 0) {
            throw new Error("Нельзя использовать отрицательные значения");
        } else {
            super.setBalance(balance);
        }
    }

    reduceBalance(sum) {
        if (super.reduceBalance(sum) < 0) {
            throw new Error("Суммы не хватает для снятия денег");
        } else {
            return this.balance;
        }
    }
}

class Atm {

    setCard(card) {
        this.card = card;
    }

    checkCard() {
        if (this.card == null) {
            throw new Error("Вставьте карту")
        }
    }

    addBalance(sum) {
        this.checkCard();
        console.log("Cумма на счёте: " + this.card.getBalance().toFixed(2));
        this.card.addBalance(sum);
        console.log("Cумма на счёте после пополнения: " + this.card.getBalance().toFixed(2));
    }

    reduceBalance(sum) {
        this.checkCard();
        try {
            console.log("Cумма на счёте: " + this.card.getBalance().toFixed(2));
            this.card.reduceBalance(sum);
            console.log("Cумма на счёте после снятия: " + this.card.getBalance().toFixed(2));
        } catch (e) {
            console.log(e);
        }
    }
}

let firstCard = new DebitCard("Рома", 7.03);
let secondCard = new CreditCard("Roma", 602);

let atm = new Atm();

atm.setCard(firstCard);
atm.reduceBalance(8);

atm.setCard(secondCard);
atm.reduceBalance(7913);