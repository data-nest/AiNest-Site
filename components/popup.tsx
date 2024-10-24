import React from 'react'

interface PopupProps {
  title: string
  content: string
  onClose: () => void
}

const Popup: React.FC<PopupProps> = ({ title, content, onClose }) => (
  <div
    className="fixed inset-0 bg-grey-800 bg-opacity-75 flex justify-center items-center z-50"
    onClick={onClose}
  >
    <div
      className="relative bg-slate-700 p-8 rounded-lg max-w-sm mx-4"
      onClick={(e) => e.stopPropagation()}
      style={{
        boxShadow: '0 4px 15px rgba(100, 116, 139, 0.4), 0 0 30px rgba(226, 232, 240, 0.6)',
        // overflow: 'hidden',
      }}
    >
      <h4 className="bg-gradient-to-r from-cyan-300 via-fuchsia-700 to-red-500 bg-clip-text text-transparent font-bold text-2xl mb-2">{title}</h4>
      <p>{content}</p>
      <button
        className="mt-4 text-fuchsia-500 hover:text-fuchsia-700"
        onClick={onClose}
      >
        Close
      </button>

      {/* Ball Animations */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ position: 'absolute', inset: 0 }}
      >
        <div
          className="absolute w-4 h-4 bg-cyan-500 rounded-full "
          style={{
            animation: 'rollClockwise 15s linear infinite',
            position: 'absolute',
            width: '16px',
            height: '16px',
            backgroundColor: '#00FFFF',
            borderRadius: '50%',
          }}
        ></div>
        <div
          className="absolute w-4 h-4 bg-cyan-500 rounded-full pt-3"
          style={{
            animation: 'rollAnticlockwise 15s linear infinite',
            position: 'absolute',
            width: '16px',
            height: '16px',
            backgroundColor: '#00FFFF',
            borderRadius: '50%',
          }}
        ></div>
      </div>
    </div>
  </div>
)

export default Popup

// Inline Styles for Animations
const styles = `
@keyframes rollClockwise {
  0% { top: -2px; left: -2px; }
  25% { top: -2px; left: calc(100% - 14px); }
  50% { top: calc(100% - 14px); left: calc(100% - 14px); }
  75% { top: calc(100% - 14px); left: -2px; }
  100% { top: -2px; left: -2px; }
}

@keyframes rollAnticlockwise {
  0% { top: calc(100% - 14px); left: calc(100% - 14px); }
  25% { top: calc(100% - 14px); left: -2px; }
  50% { top: -2px; left: -2px; }
  75% { top: -2px; left: calc(100% - 14px); }
  100% { top: calc(100% - 14px); left: calc(100% - 14px); }
}
`

// Inject the styles into the document head
// const styleSheet = document.createElement('style')
// styleSheet.type = 'text/css'
// styleSheet.innerText = styles
// document.head.appendChild(styleSheet)
