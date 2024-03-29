// all commands for staff
const Discord = require("discord.js");
const client = new Discord.Client();
global.discordJsClient = client;

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const { createUser, updateBalanceAdd, updateBalanceStrike } = require("../services/staff_services");

module.exports.singUp = async (id, discordName) => {
  try {
    const user = await createUser(id, discordName);
    console.log(user);
    const userSignUp = new Discord.MessageEmbed()
      .setColor("#008000")
      .setTitle("Sign Up")
      .addFields({
        inline: true,
        name: discordName,
        value: "account for user <@" + id + "> successfully created",
      })
      .setTimestamp()
      .setFooter("boost community");
    return userSignUp;
  } catch (error) {
    const userSignUp = new Discord.MessageEmbed()
      .setColor("#FF0000")
      .setTitle("Sign Up")
      .addFields({ inline: true, name: "Error", value: error.message })
      .setTimestamp()
      .setFooter("boost community");
    return userSignUp;
  }
};

module.exports.addBalance = async (id, amount) => {
  try {
    const balance = await updateBalanceAdd(id, amount);
    const balanceUpdated = new Discord.MessageEmbed()
      .setColor("#008000")
      .setTitle("Balance")
      .addFields({ inline: true, name: "Balance Updated", value: "Balance for user <@" + id + "> has been updated" })
      .setTimestamp()
      .setFooter("boost community");
    return balanceUpdated;
  } catch (error) {
    const balanceUpdate = new Discord.MessageEmbed()
      .setColor("#FF0000")
      .setTitle("Update Balance")
      .addFields({ inline: true, name: "Error", value: error.message })
      .setTimestamp()
      .setFooter("boost community");
    return balanceUpdate;
  }
};

module.exports.strikeBalance = async (id, amount) => {
  try {
    const balance = await updateBalanceStrike(id, amount);
    const balanceUpdated = new Discord.MessageEmbed()
      .setColor("#008000")
      .setTitle("Strike")
      .addFields({ inline: true, name: "Balance Strike", value: "<@" + id + "> was stike for **" + amount + "** golds. Have fun bitch" })
      .setTimestamp()
      .setFooter("boost community");
    return balanceUpdated;
  } catch (error) {
    const balanceUpdate = new Discord.MessageEmbed()
      .setColor("#FF0000")
      .setTitle("Update Balance")
      .addFields({ inline: true, name: "Error", value: error.message })
      .setTimestamp()
      .setFooter("boost community");
    return balanceUpdate;
  }
};

module.exports.resetRoles = async (message) => {

  try {
    if (message.member.roles.some(r=>["epic tank", "rare tank", "commun tank", "epic healer", "rare healer", "commun healer", "epic dps", "rare dps", "commun dps"].includes(r.name))){
      console.log(e)
    }
  }catch (error) {
    console.log(error.message)
    return "error"
  }
}