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
      this.common.newUserJoined.subscribe(async (data) => {
        if (data.peerId) {
          try {
            const user = await this.message.rtmclient.getUserAttributes(
              data.peerId.toString()
            ); // senderId means uid getUserInfo
            console.log(data, user, 'userinfo');
          } catch (error) {
            console.log(error);
          }
        }
      })
    );
  }

  check() {
    return this.urlId == '1' ? this.common.uid1 : this.common.uid2;
  }
  async ngOnInit(): Promise<void> {
    try {
      await this.rtmUserLogin(this.check());
    } catch (error) {
      console.log(error);
    }
  }

  async startCall() {
    try {
      if (this.userName) {
        // const uid = this.common.generateUid();
        const uid = this.check();
        const rtcDetails = await this.common.generateTokenAndUid(uid);
        this.stream.rtc.token = rtcDetails.token;
        // rtc
        this.stream.rtc.client = this.stream.createRTCClient('host');
        this.stream.agoraServerEvents(this.stream.rtc);
        this.router.navigate([`/user/${this.urlId}`]);
        await this.stream.localUser(
          rtcDetails.token,
          uid,
          'host',
          this.stream.rtc
        );

        this.message.sendMessageChannel(this.message.channel, 'ping');

        // this.hideBtns = false;
      } else {
        alert('Enter name to start call');
      }
    } catch (error) {
      console.log(error);
    }
  }

  async rtmUserLogin(uid: number) {
    try {
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
      this.message.rtmEvents(this.message.rtmclient);
      this.message.receiveChannelMessage(
        this.message.channel,
        this.message.rtmclient
      );
    } catch (error) {
      console.log(error);
    }
  }
}
