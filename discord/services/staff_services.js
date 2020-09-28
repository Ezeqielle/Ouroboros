const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const { findUserByDiscId } = require("../services/user_services");
const { findBalanceByUserId } = require("../services/balance_service");

module.exports.createUser = async (discordId, discordName) => {
  const newUser = await prisma.user.create({
    data: {
      discord_id: discordId,
      discord_name: discordName,
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

module.exports.updateBalanceAdd = async (discordId, amount) => {
  const user = await findUserByDiscId(discordId);
  const balance = await findBalanceByUserId(user.id);
  const newBalance = balance.amount + parseInt(amount);
  if (user) {
    const nextBalance = await prisma.balance.updateMany({
      where: {
        user: {
          id: user.id,
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

module.exports.updateBalanceStrike = async (discordId, amount) => {
  const user = await findUserByDiscId(discordId);
  const balance = await findBalanceByUserId(user.id);
  const newBalance = balance.amount - parseInt(amount);
  if (newBalance > 0) {
    if (user) {
      const nextBalance = await prisma.balance.updateMany({
        where: {
          user: {
            id: user.id,
          },
        },
        data: {
          amount: newBalance,
        },
      });
    } else {
      throw new Error("user not found");
    }
  } else {
    const newBalance = 0;
    if (user) {
      const nextBalance = await prisma.balance.updateMany({
        where: {
          user: {
            id: user.id,
          },
        },
        data: {
          amount: newBalance,
        },
      });
    } else {
      throw new Error("user not found");
    }
  }
};
