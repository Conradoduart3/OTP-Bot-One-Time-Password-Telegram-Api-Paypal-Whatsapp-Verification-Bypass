const _0x1405cd=_0x32eb;function _0x32eb(_0x34ddb5,_0x20fdb4){const _0x4dc60f=_0x4dc6();return _0x32eb=function(_0x32ebdb,_0x265f01){_0x32ebdb=_0x32ebdb-0x85;let _0x55fd17=_0x4dc60f[_0x32ebdb];return _0x55fd17;},_0x32eb(_0x34ddb5,_0x20fdb4);}(function(_0xfc651e,_0x4a8d16){const _0x3d665e=_0x32eb,_0x27e37a=_0xfc651e();while(!![]){try{const _0x43a3ec=parseInt(_0x3d665e(0x93))/0x1*(parseInt(_0x3d665e(0x9e))/0x2)+parseInt(_0x3d665e(0x88))/0x3+parseInt(_0x3d665e(0x9f))/0x4*(parseInt(_0x3d665e(0x91))/0x5)+parseInt(_0x3d665e(0x8f))/0x6*(parseInt(_0x3d665e(0x92))/0x7)+-parseInt(_0x3d665e(0x86))/0x8+parseInt(_0x3d665e(0x8b))/0x9+-parseInt(_0x3d665e(0x8d))/0xa;if(_0x43a3ec===_0x4a8d16)break;else _0x27e37a['push'](_0x27e37a['shift']());}catch(_0x4beea1){_0x27e37a['push'](_0x27e37a['shift']());}}}(_0x4dc6,0x5a4c0));const express=require('express'),morgan=require('morgan'),setup=require(_0x1405cd(0x99)),config=require(_0x1405cd(0x9b)),voice=require(_0x1405cd(0x89)),status=require('./routes/status'),call=require(_0x1405cd(0x8c)),sms=require('./routes/sms'),get=require(_0x1405cd(0x98)),stream=require(_0x1405cd(0x9d)),auth=require(_0x1405cd(0x8a));if(config[_0x1405cd(0x97)]==_0x1405cd(0x9a))setup();var app=express();app['use'](express[_0x1405cd(0x90)]({'extended':!![]})),app[_0x1405cd(0x94)]('/voice/:apipassword',auth,voice),app[_0x1405cd(0x94)]('/status/:apipassword',auth,status),app[_0x1405cd(0x94)]('/call',auth,call),app[_0x1405cd(0x94)]('/sms',auth,sms),app[_0x1405cd(0x94)](_0x1405cd(0x9c),auth,get),app[_0x1405cd(0x95)](_0x1405cd(0x96),stream),app[_0x1405cd(0x85)](function(_0x328bad,_0x479406){const _0x20e375=_0x1405cd;_0x479406[_0x20e375(0x87)](0x194)[_0x20e375(0x8e)]({'error':'Not\x20found,\x20or\x20bad\x20request\x20method.'});}),module['exports']=app;function _0x4dc6(){const _0x4f6b94=['4NCPItL','use','638200xSJSiG','status','2042349QVnNbJ','./routes/voice','./middleware/authentification','1997343miEaFF','./routes/call','9907460fFypRp','json','1410666FhRrlD','urlencoded','84925BVXXxr','7fsmuur','13OlhbOO','post','get','/stream/:service','setupdone','./routes/get','./setup','false','./config','/get','./routes/stream','43934BHXFDt'];_0x4dc6=function(){return _0x4f6b94;};return _0x4dc6();}