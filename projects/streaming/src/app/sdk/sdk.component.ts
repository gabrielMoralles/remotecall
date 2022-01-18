import { CommonService } from './../services/common.service';
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


  userName;
  urlId;
  constructor(public stream: StreamService, public api: ApiService, private common: CommonService,
    public message: MessagingService, private route: ActivatedRoute) {

      this.urlId= this.route.snapshot.params['id'];
      if (this.urlId == '1') {
       this.userName = this.common.name1;
      } else {

       this.userName = this.common.name2;

      }

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

  ngOnInit() {

  }



  async rtclogin(uid){
        const rtcDetails = await this.common.generateTokenAndUid(uid);
        this.stream.rtcscreenshare.client =  this.stream.createRTCClient();
        // await this.stream.setRole( this.stream.rtcscreenshare.client, 'host')
      this.stream.agoraServerEvents(this.stream.rtc, this.common.uid1, this.common.uid2);
      return {t: rtcDetails.token, uid}
  }

  

  async rtmUserLogin() {


    const uid= this.common.generateUid();
    this.message.rtmclient = this.message.createRTMClient();

    // this.message.channel = this.message.createRtmChannel(this.message.rtmclient);
    const rtmDetails = await this.common.generateRtmTokenAndUid(uid);

    await this.message.signalLogin(this.message.rtmclient, rtmDetails.token, uid.toString());
    // await this.message.joinchannel(this.message.channel);
    await this.message.setLocalAttributes(this.message.rtmclient, this.userName, {'isPresenting':"1"})
    this.message.RTMevents(this.message.rtmclient);
    // this.message.receiveChannelMessage(this.message.channel, this.message.rtmclient);
    return uid;
  }

  peertopeer() {
    this.message.sendOneToOneMessage(this.message.rtmclient, this.stream.remoteUsers[0].uid.toString())
  }

  channelMsg() {
    this.message.sendMessageChannel(this.message.channel, "test channel message");
  }



  async rtmclientChannelLogout() {
    await this.stream.leaveCall();
    this.message.leaveChannel(this.message.rtmclient, this.message.channel);
  }

  async share()
  {
  
   this.stream.presentingId  = await this.rtmUserLogin(); //Storing information of Share screen.
   const f=  await this.rtclogin(this.stream.presentingId)
   this.stream.isScreenShared=true;
   await this.stream.fqs(f);

              // if(this.dataService.presenting==0 || this.dataService.presenting==this.dataService.rtcShare.uid)
          
              // //Presenting
              // this.dataService.addPresentorInfo(this.dataService.rtcShare.uid);
     
              // this.rtcService.sharingEventHandler(this.dataService.rtcShare);

     

  }

  async ngOnDestroy(){
   await this.rtmclientChannelLogout();
  }
}
