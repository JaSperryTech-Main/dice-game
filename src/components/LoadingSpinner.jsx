const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="spinner-blade"
            style={{
              animationDelay: `${i * 0.08333}s`,
              transform: `rotate(${i * 30}deg) translate(0, -140%)`,
            }}
          />
        ))}
      </div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
