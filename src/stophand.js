import { Finger, FingerCurl, FingerDirection ,GestureDescription} from 'fingerpose';

// describe victory gesture ✌️
export const stophandGesture = new GestureDescription('stop_hand');


// thumb:
stophandGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
stophandGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
stophandGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
stophandGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
stophandGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);
stophandGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);

// index:
stophandGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
stophandGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
stophandGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
stophandGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);
stophandGesture.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
stophandGesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

// middle:
stophandGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
stophandGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
stophandGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
stophandGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);
stophandGesture.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);
stophandGesture.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);

// ring:
stophandGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
stophandGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
stophandGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
stophandGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);
stophandGesture.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1.0);
stophandGesture.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 1.0);

// pinky:
stophandGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
stophandGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
stophandGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
stophandGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);
stophandGesture.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1.0);
stophandGesture.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 1.0);
