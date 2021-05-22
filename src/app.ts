import dotenv from "dotenv";

import { IntegrationEditData, Message, Role, User } from "discord.js";

dotenv.config();

const Discord = require("discord.js");
const client = new Discord.Client();

// The data for our command
type Member = {
  user: User;
  roles: Role;
  premium_since: Date;
  permissions: string;
  pending: boolean;
  nick: string;
  mute: boolean;
  joined_at: Date;
  is_pending: boolean;
  deaf: boolean;
};

type DataOptions = {
  options: [
    {
      name: string;
      value: string;
    }
  ];
  name: string;
  id: string;
};

interface Interaction {
  type: number;
  token: string;
  member: Member;
  id: string;
  guild_id: string;
  data: DataOptions;
  channel_id: string;
}

const commandData = {
  name: "echo",
  description: "Replies with your input!",
  options: [
    {
      name: "input",
      type: "STRING",
      description: "The input which should be echoed back",
      required: true,
    },
  ],
};

client.on("message", async (message: Message) => {
  if (!client.application?.owner) await client.application?.fetch();

  if (
    message.content.toLowerCase() === "!deploy" &&
    message.author.id === client.application?.owner.id
  ) {
    const data = {
      name: "ping",
      description: "Replies with Pong!",
    };

    const command = await client.guilds.cache
      .get(process.env.GUILD_ID)
      ?.commands.create(data);
    console.log(command);
  }
});

client.once("ready", () => {
  // Creating a global command
  client.application.commands.create(commandData);

  // Creating a guild-specific command
  client.guilds.cache.get("id").commands.create(commandData);
});

client.on("interaction", (interaction: Interaction) => {
  // If the interaction isn't a slash command, return
  if (!interaction.isCommand()) return;

  // Check if it is the correct command
  if (interaction.commandName === "echo") {
    // Get the input of the user
    const input = interaction.options[0].value;
    // Reply to the command
    interaction.reply(input);
  }
});
