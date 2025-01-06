const person = {
    name : "vivek",
    greet(){
        console.log(`hi, i am ${this.name}`);
    }
}

person.greet();

const greetfunction = person.greet
greetfunction()

const boundgreet = person.greet.bind({name:"hitesh"});
boundgreet()


//bind ,call and apply