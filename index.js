const mqtt = require('mqtt');

const pub = mqtt.connect('mqtt://bemfa.com', {
    port: 9501,
    clientId: 'c076b39a71a74a179959b1f87b2b8468'
});
const sub = mqtt.connect('mqtt://192.168.3.4');


pub.subscribe('keting002');
pub.subscribe('men001');


pub.on('message', (subject, msg) => {
   
    msg = String(msg);

    console.log(subject, msg);

    if(subject === 'keting002') sub.publish('hass/ctl/liv/light', msg==='on'?'1':'0');
    if(subject === 'men001') sub.publish('hass/ctl/hall/doorSwi', msg==='on'?'1':'0');
});
