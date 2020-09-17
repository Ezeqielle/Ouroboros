const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const { findUserByDiscId } = require("../services/user_services");
const { findBalanceByUserId } = require("../services/balance_service");

module.exports.createUser = async (discordId) => {
  const newUser = await prisma.user.create({
    data: {
      discord_id: discordId,
      blizzard_token: "",
      status: 1,
      characters: [],
      balance: {
        create: {
          amount: 0,
        },
      },
    },
  });
  if (newUser) return newUser;
  throw new Error("User not created");
};

module.exports.updateBalance = async (discordId, amount) => {
  const balance = await findBalanceByUserId(discordId);
  console.log(balance[0]);
  //const newBalance = balance[0] + amount;
  if (user) {
    const nextBalance = await prisma.balance.update({
      where: {
        user: {
          id: userId,
        },
      },
      data: {
        amount: newBalance,
      },
    });
  } else {
    throw new Error("user not found");
  }
};
