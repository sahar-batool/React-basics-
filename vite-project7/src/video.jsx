import { useRef } from "react";



function Video(){
const videoRef = useRef(null)

function handelStart(){
    videoRef.current.play();
}

function handelPause(){
    videoRef.current.pause();
}

function handelRestart(){
    videoRef.current.currentTime = 0;
    videoRef.current.play();
}

function handelIncrease(){
    videoRef.current.currentTime+=5;
    videoRef.current.play();

}

function handelDecrease(){
    videoRef.current.currentTime-=5;
    videoRef.current.play();
    
}
    return(
        <>
        <video ref={videoRef} src="/fox.mp4" width="600px" height="400px" ></video>
        <button onClick={handelStart}>Start</button>
        <button onClick={handelPause}>Pause</button>
        <button onClick={handelRestart}>Restart</button>
        <button onClick={handelIncrease}>Increase</button>
        <button onClick={handelDecrease}>Decrease</button>
        </>
    )

}
export default Video;