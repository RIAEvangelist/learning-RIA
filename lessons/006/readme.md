User Media in RIA
===
***Learing RIA lesson 006***

Audio & Video in HTML
---

HTML5 introduces built-in media support via the `<audio>` and `<video>` elements, offering the ability to easily embed media into HTML documents.

#### Embedding media
Embedding media in your HTML document is trivial:

    <video src="http://v2v.cc/~j/theora_testsuite/320x240.ogg" controls>
      Your browser does not support the <code>video</code> element.
    </video>

This example plays a sample video, with playback controls, from the Theora web site.

Here is an example for embedding audio into your HTML document

    <audio src="/test/audio.ogg">
        <p>Your browser does not support the audio element.</p>
    </audio>

The src attribute can be a URL of the audio file or the path to the file on the local system.

    <audio src="audio.ogg" controls autoplay loop>
        <p>Your browser does not support the audio element </p>
    </audio>

This code example uses attributes of the `<audio>` element:

| attribute    | use      |
|---|---|
|controls | Displays the standard HTML5 controls for the audio on the web page.|
|autoplay | Makes the audio play automatically.|
|loop     | Make the audio repeat (loop) automatically.|

    <audio src="audio.mp3" preload="auto" controls></audio>

The preload attribute is used in the audio element for buffering large files. It can take one of 3 values:

|value | use       |
|---|---|
|"none" | does not buffer the file  |
|"auto" | buffers the media file  |
|"metadata" | buffers only the metadata for the file  |

Multiple source files can be specified using the `<source>` element in order to provide video or audio encoded in different formats for different browsers. For instance:

    <video controls>
      <source src="foo.ogg" type="video/ogg">
      <source src="foo.mp4" type="video/mp4">
      Your browser does not support the <code>video</code> element.
    </video>

This plays the Ogg file in browsers supporting the Ogg format. If the browser doesn't support Ogg, the browser uses the MPEG-4 file. See also the list of media formats supported by the audio and video elements in different browsers.

See Media events for a complete list of events associated with media playback. For details on media formats supported by different browsers, see Media formats supported by the audio and video elements.

#### Controlling media playback
Once you've embedded media into your HTML document using the new elements, you can programmatically control them from JavaScript code. For example, to start (or restart) playback, you can do this:

    var v = document.getElementsByTagName("video")[0];
    v.play();

Controlling an HTML5 audio player to play, pause, increase and decrease volume using some Javascript is straightforward.

    <audio id="demo" src="audio.mp3"></audio>
    <div id='controls'>
      <button id="play">Play the Audio</button>
      <button id="pause">Pause the Audio</button>
      <button id="volU">Increase Volume</button>
      <button id="volD">Decrease Volume</button>
    </div>
    
    <script>
        document.querySelector('#controls').addEventListener(
            'click',
            function(e){
                var demo=document.getElementById('demo');
                
                switch(e.target.id){
                    case 'play' :
                        demo.play();
                        break;
                    case 'pause' :
                        demo.pause();
                        break;
                    case 'volU' :
                        demo.volume+=0.1;
                        break;
                    case 'volD' :
                        demo.volume-=0.1;
                        break;
                }
            }
        );
    </script>
    
### Webcam and Microphone Access
---

#### Syntax
    
    navigator.getUserMedia ( constraints, successCallback, errorCallback );

***Example***
Here's an example of using getUserMedia() with browser prefixes.

HTML
   
   <html>
       <head></head>
       <body>
            <video></video>
       </body>
   </html>
JS

    navigator.getUserMedia = ( navigator.getUserMedia ||
                           navigator.webkitGetUserMedia ||
                           navigator.mozGetUserMedia ||
                           navigator.msGetUserMedia);

    if (navigator.getUserMedia) {
       navigator.getUserMedia (

          // constraints
          {
             video: true,
             audio: true
          },

          // successCallback
          function(localMediaStream) {
             var video = document.querySelector('video');
             video.src = window.URL.createObjectURL(localMediaStream);
             // Do something with the video here, e.g. video.play()
          },

          // errorCallback
          function(err) {
             console.log("The following error occured: " + err);
          }
       );
    } else {
       console.log("getUserMedia not supported");
    }
    
***Parameters***
|parameter |	Required/Optional |	Description |
|---|---|----|
|constraints | Required | The media types that support the LocalMediaStream object returned in the successCallback.|
|successCallback | Required | The function on the calling application to invoke when passing the LocalMediaStream object.|
|errorCallback | Optional | The function on the calling application to invoke if the call fails. Please note, this argument is required in recent versions of Firefox. Not providing this argument will throw a NS_ERROR_XPC_NOT_ENOUGH_ARGS error.

***constraints***

The constraints parameter is a MediaStreamConstraints object with two Boolean members: video and audio. These describe the media types supporting the LocalMediaStream object. Either or both must be specified to validate the constraint argument. If a specified constraint is not supported by the browser, getUserMedia invokes the errorCallback with the NOT_SUPPORTED_ERROR. If the browser cannot find any media track with the specified type, getUserMedia invokes the errorCallback with the MANDATORY_UNSATISFIED_ERR.

If the value or the member is not specified in the object, the value for the member defaults to false. The following demonstrates how to set the constraints for both audio and video:

    { 
        video: true, 
        audio: true 
    }
    
***successCallback***

The getUserMedia function will call the function specified in the successCallback with the LocalMediaStream object that contains the media stream. You may assign that object to the appropriate element and work with it, as shown in the following example:

function(localMediaStream) {
   var video = document.querySelector('video');
   video.src = window.URL.createObjectURL(localMediaStream);
   video.onloadedmetadata = function(e) {
      // Do something with the video here.
   };
}

***errorCallback***

The getUserMedia function will call the function specified in the errorCallback with a code argument. The error codes are described as follows:

|Error 	| Description |
|---|---|
|PERMISSION_DENIED 	|The user denied permission to use a media device required for the operation.|
|NOT_SUPPORTED_ERROR |A constraint specified is not supported by the browser.|
|MANDATORY_UNSATISFIED_ERROR |No media tracks of the type specified in the constraints are found.|


