A tutorial on building a WebRTC video  meeting rooms using WebRTC agora packages and Angular 11. 
 A simple side app for video calling between two people. User can join with the links 
  Video App conferencing tool using Angular framework

 If you are running project on local 
 
 http://localhost:4200/user/1 
 http://localhost:4200/user/2 
http://localhost:5000/live

After opening this link click on user 1
After opening this link click on user 2
 
For APPID create an app on below site
https://console.agora.io/

Add your APPID here to run project-

branches active-
master

# Basic-Video-Broadcasting
Sample app to join/leave a channel. 
# TODO- Features/app/functionality need to  implement-
* option to create a public broadcast URL for the call as well. 
* Diagnostic check
* Log file
* Add call duration
* close the call after a certain period.
* set the role as a host/audience, 
* mute/unmute, 
* switch between front/rear cameras, 
* set the video parameters.
Agora on angular project with  Angular Universal SSR  - ng add @nguniversal/express-engine@next
show the audio status (Mute/Unmute) and video status (yes/no) of every attendee in the video call.
annotation and the breakout rooms feature
authenticating users with tokens and  redirect them out of the page once the token has expired. 
image beautify
Screen share
audio/video tracks play
recording
call analytics (They offer a restful API for analytics.)
peer to peer call(engagement between one to one)
listen peer user Decline event 
 
 send RTMP stream to agora server which can take the input and convert it to HLS and play it in a video player which can be viewed on web by anyone

Record a channel ( audio only)
Take a screenshot in the video call - https://davidwalsh.name/browser-camera
Cloud recording
Chat recording
Diagnostic check
Log file
call duration
close the call after a certain period of time.
building a simple side project app for video calling between two people with an option to create a public broadcast URL for the call as well.
send desktop sound also with screen share
count audience in a channel
kick user from channel   https://docs.agora.io/en/Interactive%20Broadcast/faq/kick_user
you can also use rest api to kick user from channel
https://api.agora.io/dev/v2/apps/{appid}/channels/{cname}/accounts/{account}/properties
https://docs.agora.io/en/live-streaming/rtc_channel_management_restfulapi?platform=RESTful#online-channel-statistics-query

save audio recording from a video call
Pause and play recodring
play recorded streams on the web from AWS S3?
record videos, camera and screensharing at the same
people enter as an audience or you can generate the m3u8 link to broadcast on videoJS
transcode original video and generate HLS output (m3u8) For this you need chrome Extension- hls player m3u8 - to play file and after that you need to work on .mp4 to .hls
create Video Broadcasting app with Live Chat
blurred background functionality
add video background (blur) for RTCClient
custom background in agora web video/livestream calls
store chat messages history agora
managing watermarks in the Live to Facebook?
add watermark in agora cloud recording
voice to text from the calls https://github.com/akshatvg/Agora-Transcription
listen hook channel (user leave, user join) on the server
integrate live chat
basic rtm setup
rtm message save
RTM how to send message and images both at the same time
SEND FILE from one place to another using agora rtm in chat
how can I show unread messages count, is agora RTM - find a way
send file/image messages. Sending audio messages, images or files
where the chats are stored I want to counter number of messages for each user

whiteboard room
How we can leave a whiteboard room
integrate the Whiteboard to Apps built with App builder
whiteboard default pencil color and strockwidth
Color selection and line thickness
netless white board
AEC(echo cancellation) feature
3rd party lib - alternative of streaming- With this you can also connect external device https://www.videosdk.live/

using App builder you can implement these features- 
Showing meeting agenda
Each agenda item has a timer
Polling

Agora flexible classroom  flexible-classroom-sdk 1.1.5
 end the class when teacher left the flexible classroom

check bundle size agora
agora builder is using which database ?

add video call as a texture in threejs
You are on mute. If you wish to speak please unmute yourself
rtm library 
loader- connecting
error hadling - api failure
log the whole call

build a webgl application using agora and trying to implement spatial audio functions

You can use positional audio from threejs.org for getting spatial audio in webGL
let audioElement = document.getElementById("remoteAudio" + uid);
    let positionalAudio = new THREE.PositionalAudio(listener);
    positionalAudio.setMediaStreamSource(audioElement.srcObject);

Agora supports WebGl for spatial/positional voice chat?
https://gist.github.com/EkaanshArora/bc13915ec7922cee40ab5d47075c45e4   spatial audio effect

share both my camera and screen tracks and I want to push it to CDN for a large number of users.
media push RTMP stream - https://docs.agora.io/en/video/cdn_streaming_web_ng?platform=Web
https://docs.agora.io/en/Interactive%20Broadcast/cdn_streaming_web_ng?platform=Web
you can Listen for the AgoraRTCClient.on("live-streaming-error") and AgoraRTCClient.on("live-streaming-warning")
It allows you to stream my video to other outflow sources? FB Live, Twitch, Twitter, etc? I've seen RTMP streams setup like this but wasn't sure which API to use.
https://docs.agora.io/en/live-streaming/cdn_streaming_web_ng?platform=Web

agora flow with cypress? Or other testing tool in github action
write automated tests to turn on the webcam and test for an agora-based apps
https://www.cypress.io/

cancel the call from console dashboard agora

implement a DRM for application - implement DRM through agora or maybe from server - block the user from capturing the screen (since we have a recording feature).
agora only provides AES encryption
group calling with invite link
people invite
In Interactive Live Streaming, can you dynamically change the person's role ?

check if the meeting ended or not. 
method to check if a user tries to join a meeting created by someone else and the meeting has already ended? Do we check the channel for this? what approach we can use here.
build a "watch party" application.
check if the remote user's camera is on or off ?
remove any user from call

voip functionality using agora
get total users watching stream - rtc rtm
using agora live stream, but video is very zoomed in, how can we adjust this setting
get live stream audience count
get an array of the audience on the stream
check if live stream is live or not

Is it possible to configure Signalwire in order to reroute users to different channels based on a PIN code. Is it possible with Turbobridge. use PSTN to dial into meeting using phone numbers you can look at our partner TurboBridge (https://www.agora.io/en/partners/turbobridge/)
with this you can use TurboBridge with Agora?

API to analysis the Live stream in real-time
http://.../live/<LIVE_ID>/details

plans to release vp9 or av1 codecs in the nearest feature
add password for access to any meeting. - create a project like that
Turn off the audio track of all users

breakout classes like zoom and meet is providing
minBitrate in sdk 4
Is there any way to switch to wide-angle and zoom lens on an iPhone (iOS / WebKit)?AgoraRTC.getCameras() only returns a Front Camera and a Back Camera.What about the other two back cameras
switch front and back camera while using application on mobile device?
screen share tabs only implementation
implement - multiple scenes like obs
way for agora io to detect when user mutes audio by using shortcut key on the laptop keyboard

display list of remote users video by using this npm package: https://www.npmjs.com/package/ng-image-slider 
agora builder in Docker
timer in agora call 
with transcoding  you can control the width height in call recording of screen share
With live transcoding you can arrange the streams in a layout and it enables delivering to a public RTMP endpoint. 

SQS - Webinar time tracking - kind of analytics

if i have a video uploaded on AWS S3 and have its video url. This video is available on my website and i want to stream it using agora rtc web sdk. Is it possible? 
for call invitation  use agora rtm sdk
save logs on console.agora or server rather that showing on client side console.
create a Proximity based Spatial voice chat for our multiplayer game based on WEB .

use  web component for video call functionality
# Topics
angular webrtc video-conferencing agoraio agora-rtc-sdk-ng agora-rtm-sdk video 

# Important commands
npm install agora-rtc-sdk-ng --save
# DEPLOYMENT
https://angulardevelopment.github.io/agora-live-streaming-app/

ng build --prod --baseHref="https://angulardevelopment.github.io/agora-live-streaming-app/"

# Awesome Things You Can Do with Agora.io platform
suppose you have 500 peoples as audience and you want them to raise hand if they want to be host and then only allow them to take on the role of co-host.
https://agoraio-community.github.io/AgoraWebSDK-NG/docs/en/media_relay
https://docs.agora.io/en/Interactive%20Broadcast/media_relay_web_ng?platform=Web

# agora extensions
To enable extension you need credit card-
https://www.agora.io/en/agora-extensions-marketplace/  
https://www.agora.io/en/agora-extensions-marketplace/symbl-transcription-conversation-analytics/
symbl.ai
use AR with agora
https://www.banuba.com/
https://banuba.medium.com/virtual-backgrounds-for-video-conferencing-improve-privacy-and-add-fun-462178423d8c
https://www.agora.io/en/blog/build-sign-language-recognition-app-using-agora-video-sdk/

# Real time Project - popular use cases
https://tulu.la/  - all-in-one platform for creating and running engaging online events for your communities.
https://www.airmeet.com/  - platform to host webinar, conferences etc. 
https://www.producthunt.com/posts/remotion-2  - Quick video chat with your remote team
https://www.agora.io/en/blog/new-program-schools-businesses-covid-19-agora
Live Audio Stream  - clubhouse

# For hackathons and more related projects to streaming.
https://rte.devpost.com/ 
https://devpost.com/software/curtncall-j8x5bs

# sample offical app to test
https://videocall.agora.io/







agora on-premises recording using nodejs

https://docs.agora.io/en/cloud-recording/product_cloud_recording?platform=RESTful

https://docs.agora.io/en/cloud-recording/cloud_recording_rest#enable-cloud-recording

https://agoradoc.github.io/en/edu-cloud-service/restfulapi/#/

https://medium.com/agora-io/agora-cloud-recording-quickstart-guide-with-postman-demo-c4a6b824e708

https://docs.agora.io/en/cloud-recording/cloud_recording_merge_files?platform=RESTful

https://www.agora.io/en/blog/using-agora-cloud-recording-for-a-video-chat-web-app/  react


https://www.agora.io/en/products/real-time-messaging/
https://docs.agora.io/en/Real-time-Messaging/upload_download_media_web?platform=Web
https://docs.agora.io/en/Real-time-Messaging/rtm_invite_web?platform=Web
https://docs.agora.io/en/Real-time-Messaging/run_rtm_web?platform=Web


https://docs.agora.io/en/Voice/faq/audience_event



pubnub




https://www.agora.io/en/products/agora-app-builder/

https://appbuilder.agora.io/docs

https://appbuilder.agora.io/



https://docs.agora.io/en/whiteboard/join_whiteboard_room_web?platform=Web

https://whiteboard.akshatvg.com/



# agora support
vineeth@agora.io
community@agora.io
william.du@agora.io
ekaansh@agora.io
https://agora-ticket.agora.io/v1







https://docs.agora.io/en/agora-class/agora_class_prep?platform=Web

https://docs.agora.io/en/agora-class/agora_class_quickstart_web?platform=Web




https://docs.agora.io/en/Video/API%20Reference/web_ng/interfaces/iagorartc.html#processexternalmediaaec





https://docs.agora.io/en/rtc/restfulapi/#/

https://docs.agora.io/en/agora%20platform/dashboard_restful_communication




https://stackoverflow.com/questions/69436596/agora-track-setdevice-timeout

https://testrtc.com/


# Course materials and recording: 
https://bit.ly/3u4MzCH

# Slack channel support: 
https://www.agora.io/en/join-slack/



https://stackoverflow.com/questions/18383470/using-video-as-texture-with-three-js

https://stackoverflow.com/questions/51659276/how-do-i-use-a-webcam-feed-as-an-a-frame-texture

https://agoraio-community.github.io/AgoraWebSDK-NG/docs/en/release_note/#audio-playback-device-management














https://docs.agora.io/en/All/faq/host_set_role




https://docs.agora.io/en/All/faq/microphone_camera_status

https://www.agora.io/en/blog/muting-and-unmuting-a-remote-user-in-a-video-call-web/

https://webdemo.agora.io/agora-web-showcase/examples/Agora-Web-RTS-Tutorial-1to1/ 
# pricing
minutes charges? 
count per viewer/session charges? Does agora count minutes per viewer or per session?
E,g if i run 100 streams each will have 100 viewers does it mean my stream can be 1minute only if i want to fit into 10,000 minutes or it can be 100minutes each
https://www.agora.io/en/pricing/


# With JS only
implementation using javascript
https://www.agora.io/en/blog/add-video-calling-in-your-web-app-using-the-agora-web-ng-sdk/



https://docs.agora.io/en/live-streaming/start_live_web_ng?platform=Web#test-your-app




https://github.com/akshatvg/Agora-Microphone-Muted-Notification
https://stackoverflow.com/questions/63068313/how-to-check-microphone-volume-in-angular

https://github.com/webrtc/samples/tree/gh-pages/src/content/getusermedia/volume

https://webrtc.github.io/samples/src/content/getusermedia/volume/

https://stackoverflow.com/questions/63094193/agora-websdk-ng-audio-visualizer

https://developers.google.com/web/updates/2017/06/play-request-was-interrupted



For loader- https://stackoverflow.com/questions/63972300/cannot-publish-rtc-client-on-mobile-data-with-agora-web-sdk-ng#

 

13:34:50:406 Agora-SDK [WARNING]: [track-ff0cccb7] play warning:  DOMException: The play() request was interrupted by a call to pause(). https://goo.gl/LdLk22


[client-4d1d4] Choose server https://webrtc2-ap-web-4.agoraio.cn/api/v1 failed, message: AgoraRTCError CAN_NOT_GET_GATEWAY_SERVER: unable to allocate services in this area, retry: false




 TypeError: Cannot read property 'sendMessage' of null

http://api.agora.io/beta/analytics/call/lists?start_ts=1623695400&end_ts=1623847080&appid=


https://github.com/AgoraIO-Community/ContentContributorGuides

https://www.agora.io/en/blog/building-a-raise-your-hand-feature-for-live-streams-using-the-agora-web-sdk/
React: https://www.agora.io/en/blog/adding-admin-functionality-for-group-video-call-apps-in-react-js-and-agora/ 
https://mohd4yousuf.medium.com/implement-basic-video-calling-in-react-using-agorawebsdk-ng-24b8920063f



https://stackoverflow.com/questions/tagged/agora-web-sdk-ng?tab=Newest


https://agoraio-community.github.io/AgoraWebSDK-NG/docs/en/migration_guide
SMS api like Twilio SMS service integrations

 tensorflow model

https://github.com/AgoraIO-Community/agora-rtc-react

https://www.agora.io/en/blog/agora-web-uikit-add-video-calling-or-live-streaming-to-your-website-in-minutes/    angular
https://github.com/AgoraIO-Community/Web-React-UIKit/

ngx-agora
It is an enhanced implementation of the angular-agora-rtc package. These are the libraries that are not in much use nowadays.

https://docs.agora.io/en/Agora%20Platform/firewall

https://docs.agora.io/en/All/faq/call_invite_notification  for Callkeep, calls receiving notification


Agora is a fully backed Communications Platform as a Service (CPaaS)
