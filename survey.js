const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer) => {
  console.log(`Thank you for your name: ${answer}`);

  rl.question('What activity do you like? ', (answer2) => {
    console.log(`That sounds fun: ${answer2}`);

    rl.question('What do you listen to while doing that? ', (answer3) => {
      console.log(`That sounds interesting: ${answer3}`);

      rl.question('What is your favorite meal? ', (answer4) => {
        console.log(`Yummy: ${answer4}`);

        rl.question('Which sport is your absolute favorite? ', (answer5) => {
          console.log(`I like ${answer5} too!`);

          rl.question('What is your superpower? ', (answer6) => {
            console.log(`Wow, you're amazing at ${answer6}!`);

            // Construct profile paragraph here if needed

            rl.close(); // Close readline interface to exit the application
          });
        });
      });
    });
  });
});
