const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');

const canvas = createCanvas(1200, 630);
const ctx = canvas.getContext('2d');
const phi = 1.618;

// Dark gradient background matching site theme
const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
gradient.addColorStop(0, '#1a1a2e');
gradient.addColorStop(1, '#16213e');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 1200, 630);

// Add subtle texture
ctx.globalAlpha = 0.02;
for (let i = 0; i < 150; i++) {
  ctx.fillStyle = '#ffffff';
  const size = Math.random() * 3;
  ctx.fillRect(Math.random() * 1200, Math.random() * 630, size, size);
}
ctx.globalAlpha = 1;

// Draw the Cipher icon
const iconSize = 280;
const iconX = 100;
const iconY = (630 - iconSize) / 2;

// Background square with gradient
const bgGradient = ctx.createLinearGradient(iconX, iconY, iconX + iconSize, iconY + iconSize);
bgGradient.addColorStop(0, '#ec4899');
bgGradient.addColorStop(0.5, '#f87171');
bgGradient.addColorStop(1, '#fb923c');
ctx.fillStyle = bgGradient;
ctx.beginPath();
ctx.roundRect(iconX, iconY, iconSize, iconSize, 40);
ctx.fill();

// Draw three overlapping circles
const centerX = iconX + iconSize / 2;
const centerY = iconY + iconSize / 2;
const circleRadius = iconSize / 3.5;
const offset = circleRadius * 0.6;

ctx.globalCompositeOperation = 'multiply';

// Top left circle (purple)
ctx.fillStyle = '#a78bfa';
ctx.beginPath();
ctx.arc(centerX - offset, centerY - offset * 0.6, circleRadius, 0, Math.PI * 2);
ctx.fill();

// Top right circle (pink)
ctx.fillStyle = '#f9a8d4';
ctx.beginPath();
ctx.arc(centerX + offset, centerY - offset * 0.6, circleRadius, 0, Math.PI * 2);
ctx.fill();

// Bottom circle (gray)
ctx.fillStyle = '#9ca3af';
ctx.beginPath();
ctx.arc(centerX, centerY + offset * 0.8, circleRadius, 0, Math.PI * 2);
ctx.fill();

ctx.globalCompositeOperation = 'source-over';

// Main title
ctx.fillStyle = '#eaeaea';
ctx.font = 'bold 96px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
ctx.fillText('Cipher', 450, 240);

// Subtitle with accent color
ctx.fillStyle = '#94a3b8';
ctx.font = '38px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
ctx.fillText('Encrypted Peer-to-Peer', 450, 295);
ctx.fillText('Social Platform', 450, 295 + (38 * phi));

// Features list
const features = [
  'End-to-end encryption',
  'Direct P2P connections',
  'Privacy focused & open source'
];

ctx.font = '26px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
ctx.fillStyle = '#64748b';

let y = 420;
features.forEach(feature => {
  ctx.fillText('• ' + feature, 450, y);
  y += 26 * phi;
});

// Beta badge with site colors
ctx.fillStyle = 'rgba(233, 69, 96, 0.25)';
ctx.strokeStyle = 'rgba(233, 69, 96, 0.5)';
ctx.lineWidth = 2;
const badgeX = 450;
const badgeY = 560;
const badgeWidth = 220;
const badgeHeight = 36;
ctx.beginPath();
ctx.roundRect(badgeX, badgeY, badgeWidth, badgeHeight, 18);
ctx.fill();
ctx.stroke();

ctx.fillStyle = '#e94560';
ctx.font = 'bold 18px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
ctx.textAlign = 'center';
ctx.fillText('BETA • OPEN SOURCE', badgeX + badgeWidth/2, badgeY + 23);
ctx.textAlign = 'left';

// Save to file
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('assets/social-card.png', buffer);
console.log('Social card generated: assets/social-card.png');
