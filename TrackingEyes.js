// Elements
const videoElement = document.createElement('video');
videoElement.style.display = 'none';
document.body.appendChild(videoElement);

const leftPupil = document.getElementById('left-pupil');
const rightPupil = document.getElementById('right-pupil');

async function startCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoElement.srcObject = stream;
    await videoElement.play();

    initFaceMesh();
  } catch (error) {
    console.error("Camera access denied or not available:", error);
  }
}

function initFaceMesh() {
  const faceMesh = new FaceMesh({
    locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,
  });

  faceMesh.setOptions({
    maxNumFaces: 1,
    refineLandmarks: true,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5,
  });

  const camera = new Camera(videoElement, {
    onFrame: async () => {
      await faceMesh.send({ image: videoElement });
    },
    width: 640,
    height: 480,
  });
  camera.start();

  let lastExecutionTime = 0; // To track the last execution time
  const throttleInterval = 100; // Delay in milliseconds (100ms = 10 FPS)

  faceMesh.onResults((results) => {
    const currentTime = Date.now();
    if (currentTime - lastExecutionTime < throttleInterval) {
      return; // Skip processing if interval has not passed
    }
    lastExecutionTime = currentTime;

    if (results.multiFaceLandmarks && results.multiFaceLandmarks.length > 0) {
      const landmarks = results.multiFaceLandmarks[0];

      const updatePupilPosition = (pupil, center) => {
        const x = -(center.x - 0.5) * 150; // Adjust sensitivity
        const y = (center.y - 0.5) * 150;
        pupil.style.transform = `translate(${x}px, ${y}px)`;
      };

      // Correctly map left and right eye tracking
      updatePupilPosition(leftPupil, landmarks[468]); // Left eye
      updatePupilPosition(rightPupil, landmarks[473]); // Right eye
    }
  });
}

startCamera();
