import {Finger, FingerCurl, FingerDirection, GestureDesciption} from "fingerpose";
//Define Gesture description 

export const rockGesture=new GestureDesciption('rock');

//Index 

rockGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
rockGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.25);

//Pinky

rockGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0)
rockGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.25);

//For rest of the fingers

for(let finger of[Finger.Thumb, Finger.Middle, Finger.Ring]){
    rockGesture.addCurl(finger, FingerCurl.FullCurl, .75);
    rockGesture.addDirection(finger, FingerDirection.VerticalDown, 0.25);
}