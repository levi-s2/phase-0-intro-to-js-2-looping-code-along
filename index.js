const writeCards = (array,event) => {
    const messages = []
    for(let i = 0; i < array.length;i++) {
        
           const greetingMessage = `Thank you, ${array[i]}, for the wonderful ${event} gift!`
           messages.push(greetingMessage)
    }
    return messages

}
console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  };
  

