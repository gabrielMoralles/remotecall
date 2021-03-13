import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { MessagingService } from '../services/messaging.service';
import { StreamService } from '../services/stream.service';

@Component({
  selector: 'app-sdk',
  templateUrl: './sdk.component.html',
  styleUrls: ['./sdk.component.scss']
})
export class SdkComponent implements OnInit {
  userName = '';
  uid1 = 1234;
  uid2 = 4321;
  passUid = null;
  passToken = '';
  printMessage = '';

  constructor(public stream: StreamService, public api: ApiService,
     public message: MessagingService, private route: ActivatedRoute) {
      this.route.params.subscribe(params => {
        console.log(params);
        if (params.id === "1") {
          this.passUid = this.uid1;
          this.passToken = "006b1a776384fe24b58a43030c834b8f7ddIAAnp5e+LfcM2hPrmOXCP35cOuVDYiAyOy40JhRZeEzoMaPg45sAAAAAEADhBocBgPNFYAEA6AMQsERg";
        } else {
          this.passUid = this.uid2;
          this.passToken = "006b1a776384fe24b58a43030c834b8f7ddIADU8Oij7fBvT5ygwI8Uh9oAx8NP5bOkhSfHA8jfXrmqD2i/jsQAAAAAEAByVJMERPNFYAEA6APUr0Rg";
        }

  })

 this.stream.updateUserInfo.subscribe(async (id) => {
 if (id) {
  const user = await this.message.rtmclient.getUserAttributes(id.toString()); // senderId means uid getUserInfo

  for (let index = 0; index < this.stream.remoteUsers.length; index++) {
     const element = this.stream.remoteUsers[index];
     if (element.uid == id) {
       element.name = user.name;
     }
   }
 }
  });

}

  ngOnInit(){

  }

  async startCall(){
    if (this.userName) {
   const rtcDetails = await this.generateTokenAndUid(this.passUid);
   await this.rtmUserLogin();
    this.stream.createRTCClient();
   this.stream.agoraServerEvents(this.stream.rtc);
   await this.stream.localUser(rtcDetails.token, this.passUid) ;

  }
  else {
    alert('Enter name to start call');
  }
  }


   async generateTokenAndUid(uid){
    // https://test-agora.herokuapp.com/access_token?channel=test&uid=1234
     let url = 'https://test-agora.herokuapp.com/access_token?';
    //  let uid = this.generateUid();
     const opts = { params: new HttpParams({fromString: "channel=test&uid="+uid}) };
    const data = await this.api.getRequest(url, opts.params).toPromise();
    return {'uid':  uid, token: data['token']}

   }


generateUid(){
  const length = 5;
  const randomNo = (Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1)));
  return randomNo;
}


  async rtmUserLogin(){



   this.message.rtmclient = this.message.createRTMClient();

    this.message.channel = this.message.createRtmChannel(this.message.rtmclient);
    await this.message.signalLogin(this.message.rtmclient, this.passToken, this.passUid.toString());
    await this.message.joinchannel(this.message.channel);
    await this.message.setLocalAttributes(this.message.rtmclient, this.userName)
    this.message.RTMevents(this.message.rtmclient);
    this.message.receiveChannelMessage(this.message.channel, this.message.rtmclient);

  }

   peertopeer(){
this.message.sendOneToOneMessage( this.message.rtmclient)
   }

   channelMsg(){
     this.message.sendMessageChannel(this.message.channel);
   }



  async rtmclientChannelLogout() {
    await this.stream.leaveCall();
    this.message.leaveChannel(this.message.rtmclient,this.message.channel);
    this.userName = '';
  }


}