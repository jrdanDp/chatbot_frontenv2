import './Testimonial.css';

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="container-sm">
        <div className="testimonial-card">
          <div className="testimonial-icon">💚</div>
          <p className="testimonial-text">
            Aquí puedes expresarte sin miedo. Este es tu espacio seguro.
          </p>
          <div className="testimonial-badge">
            <span>SerenBot</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
