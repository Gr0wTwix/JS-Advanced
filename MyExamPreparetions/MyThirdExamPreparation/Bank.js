class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        if(this.allCustomers.includes(customer)) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }
        this.allCustomers.push(customer);
        return customer;
    }

    depositMoney(personalId, amount) {
        for (let curCustomer of this.allCustomers) {
            let person = this.allCustomers.find((c) => {
                return c.personalId === personalId;
            });

            if(!curCustomer.personalId === personalId) {
                throw new Error(`We have no customer with this ID!`);
            }
            
            if(isNan(curCustomer.totalMoney)) {
                curCustomer.totalMoney = amount;
            } else {
                curCustomer.totalMoney += amount;
            }
            
        }
    }
}



let bank = new Bank(`SoftUni Bank`);

console.log(bank.newCustomer({firstName: `Svetlin`, lastName: `Nakov`, personalId: 6233267}));
console.log(bank.newCustomer({firstName: `Mihaela`, lastName: `Mileva`, personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
