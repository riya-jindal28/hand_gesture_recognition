import { Finger, FingerCurl, FingerDirection ,GestureDescription} from 'fingerpose';

// describe victory gesture ✌️
export const rockhandGesture = new GestureDescription('rock_hand');


// thumb:
rockhandGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
rockhandGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
rockhandGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

// index:
rockhandGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
rockhandGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
rockhandGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
rockhandGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);
rockhandGesture.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
rockhandGesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

// middle:
rockhandGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
rockhandGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);

// ring:
rockhandGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
rockhandGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

// pinky:
rockhandGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
rockhandGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
rockhandGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
rockhandGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);
rockhandGesture.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);
rockhandGesture.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);
