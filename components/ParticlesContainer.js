const ParticlesContainer = () => {
  return (
    <div className="w-full h-full absolute translate-z-0 pointer-events-none overflow-hidden">
      {/* Lightweight animated gradient orbs instead of heavy tsparticles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 dark:bg-accentDark/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-2/3 right-1/4 w-48 h-48 bg-accent/5 dark:bg-accentDark/5 rounded-full blur-2xl animate-pulse delay-1000" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-1/4 left-1/2 w-32 h-32 bg-accent/8 dark:bg-accentDark/8 rounded-full blur-xl animate-pulse" style={{ animationDelay: "4s" }} />
    </div>
  );
};

export default ParticlesContainer;
