// Step 1: The Telephone Class
class Telephone {
    constructor() {
        this.phoneNumbers = [];  // List to store phone numbers
        this.observers = [];     // List to store observers
    }

    // Add a new phone number
    addPhoneNumber(number) {
        this.phoneNumbers.push(number);  // Add the number to the list
        console.log(`Phone number ${number} added.`);
    }

    // Remove a phone number
    removePhoneNumber(number) {
        const index = this.phoneNumbers.indexOf(number);
        if (index !== -1) {
            this.phoneNumbers.splice(index, 1);  // Remove the number from the list
            console.log(`Phone number ${number} removed.`);
        } else {
            console.log(`Phone number ${number} not found.`);
        }
    }

    // Dial a phone number and notify observers
    dialPhoneNumber(number) {
        if (this.phoneNumbers.includes(number)) { // Check if the number is in the list
            console.log(`Dialing ${number}...`);
            this._notifyObservers(number);  // Notify observers that the number is being dialed
        } else {
            console.log(`Phone number ${number} not found.`);
        }
    }

    // Add an observer to be notified when a phone number is dialed
    addObserver(observer) {
        this.observers.push(observer);
    }

    // Remove an observer
    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);  // Remove observer from list
        }
    }

    // Notify all observers about a dialed number
    _notifyObservers(number) {
        for (let observer of this.observers) {
            observer.update(number); // Call the update method of each observer
        }
    }
}

// Step 2: The Observer Class (Base Class)
class Observer {
    // Every observer must have an 'update' method that gets called when notified
    update(number) {
        throw new Error("You need to implement this method in a subclass!");
    }
}

// Step 3: Concrete Observer 1 - Prints the phone number
class PhoneNumberObserver extends Observer {
    update(number) {
        console.log(`Dialing phone number: ${number}`);  // Prints the phone number
    }
}

// Step 4: Concrete Observer 2 - Prints "Now Dialling {Number}"
class DialingMessageObserver extends Observer {
    update(number) {
        console.log(`Now Dialling ${number}`);  // Prints a custom message
    }
}

// Example Usage:
const telephone = new Telephone(); // Create a new telephone object

// Create two observers
const phoneNumberObserver = new PhoneNumberObserver();
const dialingMessageObserver = new DialingMessageObserver();

// Add observers to the telephone object
telephone.addObserver(phoneNumberObserver);
telephone.addObserver(dialingMessageObserver);

// Add some phone numbers
telephone.addPhoneNumber("2347064670360");
telephone.addPhoneNumber("1234640360");

// Dial a phone number
telephone.dialPhoneNumber("2347086735");

// Remove a phone number and try dialing it again
telephone.removePhoneNumber("123456789");
telephone.dialPhoneNumber("123456987");
