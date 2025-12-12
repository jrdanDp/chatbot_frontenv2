import './SecurityBadge.css';

const SecurityBadge = ({ compact = false }) => {
  if (compact) {
    return (
      <div className="security-badge compact">
        <span className="badge-icon">🔒</span>
        <span className="badge-text">Anónimo</span>
      </div>
    );
  }

  return (
    <div className="security-badge">
      <div className="badge-content">
        <span className="badge-icon">🔒</span>
        <div className="badge-text-group">
          <p className="badge-title">Completamente Seguro</p>
          <p className="badge-subtitle">Tus conversaciones no se guardan. SerenBot es anónimo.</p>
        </div>
      </div>
    </div>
  );
};

export default SecurityBadge;
