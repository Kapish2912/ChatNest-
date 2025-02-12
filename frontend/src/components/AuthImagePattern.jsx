const AuthImagePattern = ({ title, subtitle }) => {
    const shapes = [
      "aspect-square rounded-2xl", // Square with rounded edges
      "aspect-square rounded-full", // Circle
      "w-12 h-12", // Base shape for clip-path ones
    ];
  
    const clipPaths = [
      "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)", // Hexagon
      "polygon(50% 0%, 0% 100%, 100% 100%)", // Triangle
      "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)", // Star
    ];
  
    return (
      <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
        <div className="max-w-md text-center">
          <div className="grid grid-cols-3 gap-3 mb-8">
            {Array.from({ length: 9 }).map((_, i) => {
              const shape = i % 2 === 0 ? shapes[i % shapes.length] : "w-12 h-12";
              const clipPath = i % 2 !== 0 ? clipPaths[i % clipPaths.length] : "";
  
              return (
                <div
                  key={i}
                  className={`${shape} bg-gradient-to-br from-primary to-secondary shadow-lg ${
                    i % 2 === 0 ? "animate-pulse" : "animate-glow"
                  }`}
                  style={clipPath ? { clipPath } : {}}
                />
              );
            })}
          </div>
          <h2 className="text-2xl font-bold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            {title}
          </h2>
          <p className="text-base-content/60">{subtitle}</p>
        </div>
      </div>
    );
  };
  
  export default AuthImagePattern;
  