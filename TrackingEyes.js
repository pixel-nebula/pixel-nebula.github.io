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

  faceMesh.onResults((results) => {
    if (results.multiFaceLandmarks && results.multiFaceLandmarks.length > 0) {
      const landmarks = results.multiFaceLandmarks[0];

      const updatePupilPosition = (pupil, center) => {
        // Adjust sensitivity by increasing the scaling factor
        const x = -(center.x - 0.5) * 150; // Increased sensitivity (from 60 to 100)
        const y = (center.y - 0.5) * 150;  // Increased sensitivity (from 60 to 100)
        pupil.style.transform = `translate(${x}px, ${y}px)`;
      };

      // Correctly map left and right eye tracking
      updatePupilPosition(leftPupil, landmarks[468]); // Left eye
      updatePupilPosition(rightPupil, landmarks[473]); // Right eye
    }
  });
}

startCamera();
