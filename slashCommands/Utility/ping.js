
module.exports = {
    name: "ping",
    category: "Utility",
    description: "Verificar a latência do bot",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`🏓 Ping...`);

        const pingEmbed = new client.discord.EmbedBuilder()
            .setTitle(':signal_strength: 🏓 Pong')
            .addFields(
                {name:"Latência", value:`${Math.floor(msg.createdAt - interaction.createdAt)}ms`},
                {name:"API Ping", value:`${client.ws.ping}ms`}
                )
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });

        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};
