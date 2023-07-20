import React from 'react';
import QRCode from 'qrcode';

import styles from './styles.module.css';

export default function QrGenerator() {
  const [text, setText] = React.useState('');
  const [qrCodeDataUrl, setQrCodeDataUrl] = React.useState('');
  const [svgContent, setSvgContent] = React.useState('');

  const generateQRCode = async () => {
    try {
      const pngDataUrl = await QRCode.toDataURL(text, { width: 1080, margin: 0 });
      setQrCodeDataUrl(pngDataUrl);

      const svgDataUrl = await QRCode.toString(text, { type: 'svg' }); // Generate SVG data URL
      setSvgContent(svgDataUrl);
    } catch (error) {
      console.error('QR Code generation failed:', error);
    }
  };

  const downloadQRCode = () => {
    const link = document.createElement('a');
    link.href = qrCodeDataUrl;
    link.download = 'qrcode.png';
    link.click();
  };

  const downloadQRCodeSVG = () => {
    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
  
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'qrcode.svg';
    link.click();
  
    URL.revokeObjectURL(link.href);
  };
  

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>QR Code Generator</h1>
      <input
        type="text" 
        placeholder="Enter text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={styles.input}
      />
      <button onClick={generateQRCode} className={styles.button}>
        Generate QR Code
      </button>
      {qrCodeDataUrl && (
        <div className={styles.qrCodeContainer}>
          <img src={qrCodeDataUrl} alt="QR code" className={styles.qrCodeImage} />
          <div className={styles.downloadButtonContainer}>
            <button onClick={downloadQRCode} className={styles.downloadButton}>
              Download as PNG (1080x1080)
            </button>
            {svgContent && (
              <button onClick={downloadQRCodeSVG} className={styles.downloadButton}>
                Download as SVG
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
