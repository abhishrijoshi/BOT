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
    else if(message.body === 'hi') {
		message.reply('Hello i am a user bot ');
    }
    else if(message.body === 'noob') {
		message.reply('Dont call him ');
	}
    else if(message.body === 'Noob') {
		message.reply('Dont call him ');
	}
    else if(message.body === 'soja') {
		message.reply('Hmm ,yeah Good night ');
	}

    else if(message.body === 'Soja') {
		message.reply('Hmmm , yeah Good night');
	}
    else if(message.body === 'gn') {
		message.reply(' Good night');
	}
    else if(message.body === 'Gn') {
		message.reply(' Good night');
	}
    else if(message.body === 'good morning') {
		message.reply(' Good morning');
	}
	else if(message.body === 'Good morning') {
		message.reply(' Good morning');
        }
}
});




 
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
    else if (msg.body.startsWith('!covid')) {
        https.get(`https://api.covid19india.org/v4/data.json `, function(response) {
        var buffer = '';
        response.on('data', function(d) {
        buffer += d;
        }).on('end', function() {
        var body;
        try {
        body = JSON.parse(buffer);
        msg.reply(`${body.TT.total.confirmed} confirmed cases \n${body.TT.total.tested } people are tested`);
        }
        catch (err) {
        return msg.reply(err);
      }
    }).setEncoding('utf8');
    });
        }
    else if (msg.body.startsWith('!iss')) {
        http.get(`  http://api.open-notify.org/iss-now.json`, function(response) {
        var buffer = '';
        response.on('data', function(d) {
        buffer += d;
        }).on('end', function() {
        var body;
        try {
        body = JSON.parse(buffer);
        
        msg.reply(`${body.timestamp}  TIME \n${body.iss_position.latitude} LATITUDE   \n${body.iss_position.longitude} LONGITUDE `);
      } catch (err) {
        return msg.reply(err);
      }
    }).setEncoding('utf8');
    });
         }
    });





//Google Meet links 



client.on('message', message => {

 
    if(message.body === '!link') {
        
    var date = new Date(); 
    const link = new Date(date);
    const day = link.getDay();
    console.log(day);
    
    if(day =='1') {
      
		message.reply(" TEST 1 ");
	}
	else if (day == '2') { 
        
        	message.reply(" TEST 2 ");
	}
	else if (day == '3') { 
        
        	message.reply(" TEST 3");
	}
    else if (day == '4') { 
        
        	message.reply(" TEST 4 ");
	}
        else if (day == '5') { 
        
        	message.reply(" TEST 5 ");
	}
        
    }
	
	});


   client.on('message', async (msg) => {

        const fs = require('fs');
        const attachmentData = await msg.downloadMedia();
        var extension = "";
        if (attachmentData.mimetype == "application/pdf") 
        extension = "pdf";
        if (extension == "")
        return;
    var base64Data = attachmentData.data.replace(/^data:image\/png;base64,/, "");
    const new_filename = "./" + msg.id.id + "." + extension;
    fs.writeFile( new_filename, base64Data, 'base64', function(err) {
      console.log("saved");
        if (err != null) {
      
            return;
        }
    });
})





client.initialize();
