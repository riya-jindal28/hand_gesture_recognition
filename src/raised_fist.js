import {Finger, FingerCurl, FingerDirection, GestureDescription} from "fingerpose";
  
export const raisedfisthandGesture = new GestureDescription("raisedfisthand");
  
  // thumb
  raisedfisthandGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
  raisedfisthandGesture.addDirection(Finger.Thumb,FingerDirection.DiagonalUpLeft,0.75);
  raisedfisthandGesture.addDirection(Finger.Thumb,FingerDirection.DiagonalUpRight,0.75);
  raisedfisthandGesture.addDirection(Finger.Thumb,FingerDirection.HorizontalRight,0.75);
  raisedfisthandGesture.addDirection(Finger.Thumb,FingerDirection.HorizontalLeft,0.75);
  
  for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]){
    raisedfisthandGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
    raisedfisthandGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
  }