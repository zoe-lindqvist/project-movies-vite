import "./MovieHeader.css";

export const MovieHeader = () => {
  return (
    <header className="movie-header">
      <div className="movie-header-logo">
        <span className="movie-header-icon">🎬</span>
        <h1 className="movie-header-title">CineTime</h1>
      </div>
    </header>
  );
};