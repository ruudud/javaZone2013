javaZone2013
============

The Sound of #javazone

The idea is this: 

I was thinking we can take all tweets with the #javazone hash tag and play them through the Iterate VoiceBox ™

I believe that we can build a "good enough" voice box by sampling the x most common words (taken from last years tweets), and then do some creative guess work for the words we dont have... think Levenshtein... There will also be plenty of room for Easter Eggs :)

My laptop will have enough resources to support user controlled loop playback and a couple of drum kits/funny samples, so that people can interact with something which is very immediate... 

I think it will be captivating... monotonic tweets being read out with instrumental chaos in the background... perhaps the sound of a world without Java

Architecture is still based around Node.js with Socket.io.. We could add some kind of REST API as well if needed.. It would be great if we got several services doing the same thing written in some different languages... we could even have a competition for the one which controls the VoiceBox in the most natural way!
