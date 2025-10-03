import React from 'react';

const GlowEffect = ({ 
  intensity = 'medium',
  className = '' 
}) => {
  const intensityStyles = {
    low: 'opacity-30',
    medium: 'opacity-50', 
    high: 'opacity-70'
  };

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {/* Outer Purple Elliptical Glow */}
      <div className="absolute inset-0">
        {/* COLOR 1: Outer gradient - cosmic-purple */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-transparent via-transparent to-cosmic-purple/20 blur-3xl"></div>
        {/* COLOR 2: Top-left purple glow */}
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-cosmic-purple/30 rounded-full blur-[100px] animate-pulse"></div>
        {/* COLOR 3: Bottom-right purple glow */}
        <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-cosmic-purple/25 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Middle Glowing Section - Hyperbolic Shape */}
      <div className={`absolute inset-0 ${intensityStyles[intensity]}`}>
        {/* Central hyperbolic glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[60vh]">
          <div 
            className="w-full h-full bg-gradient-conic from-cosmic-glow/40 via-transparent to-cosmic-glow/40 blur-2xl"
            style={{
              background: `
                radial-gradient(ellipse 80% 30% at center, 
                  rgba(96, 165, 250, 0.3) 0%,     /* COLOR 4: Blue glow #60a5fa */
                  rgba(96, 165, 250, 0.1) 30%,    /* COLOR 5: Lighter blue */
                  transparent 60%
                ),
                radial-gradient(ellipse 120% 20% at center, 
                  rgba(139, 92, 246, 0.2) 0%,     /* COLOR 6: Purple glow #8b5cf6 */
                  transparent 50%
                )
              `,
              transform: 'rotate(-15deg)'
            }}
          ></div>
        </div>

        {/* Secondary hyperbolic curves */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[40vh]">
          <div 
            className="w-full h-full blur-xl"
            style={{
              background: `
                radial-gradient(ellipse 90% 25% at center, 
                  rgba(96, 165, 250, 0.25) 0%,    /* COLOR 7: Blue glow */
                  rgba(96, 165, 250, 0.05) 40%,   /* COLOR 8: Faded blue */
                  transparent 70%
                )
              `,
              transform: 'rotate(15deg)'
            }}
          ></div>
        </div>

        <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 translate-y-1/2 w-[100vw] h-[40vh]">
          <div 
            className="w-full h-full blur-xl"
            style={{
              background: `
                radial-gradient(ellipse 90% 25% at center, 
                  rgba(96, 165, 250, 0.25) 0%,    /* COLOR 9: Blue glow */
                  rgba(96, 165, 246, 0.05) 40%,   /* COLOR 10: Faded blue */
                  transparent 70%
                )
              `,
              transform: 'rotate(-15deg)'
            }}
          ></div>
        </div>
      </div>

      {/* Central Transparent Glow - Hyperbola Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vh]">
        <div 
          className="w-full h-full blur-sm"
          style={{
            background: `
              radial-gradient(ellipse 60% 20% at center, 
                rgba(255, 255, 255, 0.1) 0%,     /* COLOR 11: White center */
                rgba(96, 165, 250, 0.15) 20%,    /* COLOR 12: Blue transition */
                rgba(96, 165, 250, 0.05) 40%,    /* COLOR 13: Faded blue */
                transparent 60%
              )
            `,
            maskImage: `
              radial-gradient(ellipse 70% 25% at center, 
                transparent 0%, 
                black 30%, 
                black 70%, 
                transparent 100%
              )
            `
          }}
        ></div>
      </div>

      {/* Additional accent glows using your color palette */}
      {/* COLOR 14: Primary blue accent */}
      <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-primary-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '4s' }}></div>
      {/* COLOR 15: Cosmic purple accent */}
      <div className="absolute bottom-1/3 right-1/5 w-24 h-24 bg-cosmic-purple/25 rounded-full blur-xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
      {/* COLOR 16: Cosmic glow accent */}
      <div className="absolute top-2/3 left-1/3 w-20 h-20 bg-cosmic-glow/30 rounded-full blur-lg animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
    </div>
  );
};

export default GlowEffect;
