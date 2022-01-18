import { CommonService } from './../services/common.service';
import { ActivatedRoute, ActivationStart, Router } from '@angular/router';
import { MessagingService } from './../services/messaging.service';
import { ApiService } from './../services/api.service';
import { StreamService } from './../services/stream.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-staging',
  templateUrl: './staging.component.html',
  styleUrls: ['./staging.component.scss'],
})
export class StagingComponent implements OnInit {
  hideBtns = true;
  userName = '';
  urlId;
  subscriptions: Subscription[] = [];

  constructor(
    public stream: StreamService,
    public api: ApiService,
    private router: Router,
    public message: MessagingService,
    private route: ActivatedRoute,
    private common: CommonService
  ) {
    this.urlId = this.route.snapshot.params['id'];
    if (this.urlId == '1') {
      this.common.uid1 = this.common.generateUid();
      this.userName = this.common.name1;
    } else {
      this.common.uid2 = this.common.generateUid();
      this.userName = this.common.name2;
    }

    this.subscriptions.push(
      this.common.pong.subscribe(async (data) => {
        if (data.peerId) {
          const user = await this.message.rtmclient.getUserAttributes(
            data.peerId.toString()
          ); // senderId means uid getUserInfo
          console.log(data, user, 'pong');
        }
      })
    );
  }

  check() {
    return this.urlId == '1' ? this.common.uid1 : this.common.uid2;
  }
  async ngOnInit(): Promise<void> {
    await this.rtmUserLogin(this.check());
  }

  async startCall() {
    if (this.userName) {
      // const uid = this.common.generateUid();
      const uid = this.check();
      const rtcDetails = await this.common.generateTokenAndUid(uid);
      // rtm
      // await this.rtmUserLogin(uid);

      // rtc
      this.stream.rtc.client = this.stream.createRTCClient();
      this.stream.agoraServerEvents(this.stream.rtc);
      this.router.navigate([`/user/${this.urlId}`]);
      await this.stream.localUser(rtcDetails.token, uid);

      this.message.sendMessageChannel(this.message.channel, 'ping');

      // this.hideBtns = false;
    } else {
      alert('Enter name to start call');
    }
  }

  async rtmUserLogin(uid) {
    this.message.rtmclient = this.message.createRTMClient();

    this.message.channel = this.message.createRtmChannel(
      this.message.rtmclient
    );
    const rtmDetails = await this.common.generateRtmTokenAndUid(uid);

    await this.message.signalLogin(
      this.message.rtmclient,
      rtmDetails.token,
      uid.toString()
    );
    await this.message.joinchannel(this.message.channel);
    await this.message.setLocalAttributes(
      this.message.rtmclient,
      this.userName
    );
    this.message.RTMevents(this.message.rtmclient);
    this.message.receiveChannelMessage(
      this.message.channel,
      this.message.rtmclient
    );
  }
}
