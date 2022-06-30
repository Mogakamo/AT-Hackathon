const credentials = require("../config/credentials");

const AfricasTalking = require("africastalking")(credentials);

const payments = AfricasTalking.PAYMENTS;

async function initiateStash() {
  const options = {
    productName: "Elimisha",
    currencyCode: "KES",
    amount: 1000,
    metadata: {
      Metadata: "This is a test",
    },
  };
  try {
    const result = await payments.topupStash(options);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

initiateStash();