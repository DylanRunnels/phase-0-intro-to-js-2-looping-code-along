function writeCards(names, eventNames) {
    let messages = [];
  
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
  
    return messages;
  }
  
  let messagesArray = writeCards(['Guadalupe', 'Ollie', 'Aki']);
  console.log(messagesArray);
  function countDown(num) {
    while (num >= 0) {
      console.log(num);
      num--;
    }
  }