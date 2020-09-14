const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports.findBalanceByUserId = async (userId) => {
  const balance = await prisma.balance.findMany({
    where: {
      user: {
        id: userId,
      },
    },
  });
  if (balance) return balance[0];
  throw new Error("balance not found");
};
