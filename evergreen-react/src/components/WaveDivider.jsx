export default function WaveDivider({ topColor = '#ffffff', bottomColor = '#f5f0e8', flip = false }) {
  return (
    <div
      className="wave-divider"
      style={{
        background: topColor,
        transform: flip ? 'scaleY(-1)' : 'none',
      }}
    >
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  )
}
