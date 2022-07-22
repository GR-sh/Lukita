import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';

export default async (client) => {
  let arrayOfCommands = Array()
  let map = Array.from(client.commands)
  for (let command of Object(map)) {
    command = command[1].data
    if (command) arrayOfCommands.push(command)
  }
  let arrayOfCommandsSC = Array()
  let mapSC = Array.from(client.supportCommands)
  for (let commandSC of Object(mapSC)) {
    commandSC = commandSC[1].data
    if (commandSC) arrayOfCommandsSC.push(commandSC)
  }

  const rest = new REST({ version: '9' }).setToken(process.env.TOKEN)

  try {
    console.log('[ / Slash Commands ] Criação e atualização de comandos globais iniciada...');

    console.log(`[ / ListCommands ] Comandos encontrados: \n| ${client.commands.map(a => a.name).join(', ')} |`);
    console.log(`[ / ListCommands ] Quantidade de comandos encontrados: ${arrayOfCommands.length}`);

    await rest.put(
      Routes.applicationCommands(client.user.id),
      { body: arrayOfCommands },
    );
    
    console.log('[ / Slash Commands ] Criação e atualização de comandos globais concluída!');
    console.log('[ / Slash Commands ] Criação e atualização de comandos do suporte iniciada...');

    console.log(`[ / ListCommands ] Comandos do suporte encontrados: \n| ${client.commands.map(a => a.name).join(', ')} |`);
    console.log(`[ / ListCommands ] Quantidade de comandos do suporte encontrados: ${arrayOfCommands.length}`);

    await rest.put(
      Routes.applicationGuildCommands(client.user.id, '995769279733583944'),
      { body: arrayOfCommandsSC },
    );
    
    console.log('[ / Slash Commands ] Criação e atualização de comandos do suporte concluída!');
    
  } catch (error) {
    console.error(error);
  }
}
