const qrcode = require('qrcode-terminal');


const { http, https } = require('follow-redirects');
const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('READY TO GET BANNED ?!');
});



client.on('message', message => {
	if(message.body === 'Hi') {
		message.reply('Hello i am a user  bot ');
	}
});



client.on('message', message => {
	if(message.body === 'hi') {
		message.reply('Hello i am a user bot ');
	}
});


client.on('message', message => {
	if(message.body === 'noob') {
		message.reply('Dont call him ');
	}
});


client.on('message', message => {
	if(message.body === 'Noob') {
		message.reply('Dont call him ');
	}
});






client.on('message', async (msg) => {
    const mentions = await msg.getMentions();
    
    for(let contact of mentions) {
        console.log(`${contact.pushname} was mentioned`);
 
        
 
    }
})



client.on('message', message => {
	if(message.body === 'soja') {
		message.reply('Hmm ,yeah Good night ');
	
        
        
    }
});


client.on('message', message => {
	if(message.body === 'Soja') {
		message.reply('Hmmm , yeah Good night');
	
        
        
    }
});


client.on('message', message => {
	if(message.body === 'gn') {
		message.reply(' Good night');
	
        
        
    }
});

client.on('message', message => {
	if(message.body === 'Gn') {
		message.reply(' Good night');
	
        
        
    }
});




client.on('message', message => {
	if(message.body === 'good morning') {
		message.reply(' Good morning');
	
        
        
    }
});




client.on('message', message => {
	if(message.body === 'Good morning') {
		message.reply(' Good morning');
	
        
        
    }
});










client.on('message', async (msg) => {
  
    
  // for api 
    if (msg.body == ' your command ') {
        https.get(`  api url  `, function(response) {
        var buffer = '';
        response.on('data', function(d) {
        buffer += d;
        }).on('end', function() {
        var body;
        try {
        obj = JSON.parse(buffer);
        msg.reply(`${obj.setup} \n${obj."change object here exclude the quotes after "}`);
      } catch (err) {
        return msg.reply(err);
      }
    }).setEncoding('utf8');
    });
     
    
    
    
    
 
    }
})





client.on('message', async (msg) => {
    if(msg.body === '!everyone') {
        const chat = await msg.getChat();
        
        let text = "";
        let mentions = [];

        for(let participant of chat.participants) {
            const contact = await client.getContactById(participant.id._serialized);
            
            mentions.push(contact);
            text += `@${participant.id.user} `;
        }

        chat.sendMessage(text, { mentions });
    }
});





//Google Meet links 
var date = new Date(); 
const link = new Date(date);
const day = link.getDay();
console.log(day);
    
if(day =='1') {
client.on('message', message => {
	if(message.body === '!link') {
	
	message.reply(' "Yor link here of day order 1      ' );
        
        
    }
});

}


if(day =='2') {
client.on('message', message => {
	if(message.body === '!link') {

        message.reply(' "Yor link here of day order 2      ' );
        
    }
});

}


if(day =='3') {
client.on('message', message => {
	if(message.body === '!link') {
	message.reply(' "Yor link here of day order 3      ' );
        	
	}
        
    
});

}

    
if(day =='4') {
client.on('message', message => {
	if(message.body === '!link') {
	
		message.reply(' "Yor link here of day order 4     ' );
        
        
    }
});

}


if(day =='5') {
client.on('message', message => {
	if(message.body === '!link') {
	message.reply(' "Yor link here of day order 5      ' );
	
        
        
    }
});

}


if(day =='6') {
client.on('message', message => {
	if(message.body === '!link') {
		
		message.reply(' "Yor link here of day order 6      ' );
                                                                                                                     
        
    }
});

}


client.initialize();
