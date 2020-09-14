const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports.findBalanceByUserId = async (userId) => {
  const balance = await prisma.balance.findOne({
    where: {
      userId: userId,
    },
  });
  if (balance) return balance;
  throw new Error("balance not found");
};
