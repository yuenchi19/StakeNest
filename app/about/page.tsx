// app/about/page.tsx
export default function AboutPage() {
  return (
    <div>
      <section className="hero-section">
        <h1>About Our NFT Dashboard</h1>
        <p>Learn more about our platform and what we offer.</p>
        <button className="button">Learn More</button>
      </section>
      
      <section className="content-section">
        <div className="card">
          <h3>Our Mission</h3>
          <p>To provide a seamless experience for NFT enthusiasts.</p>
        </div>
        <div className="card">
          <h3>Our Vision</h3>
          <p>Building a bridge between NFTs and the digital world.</p>
        </div>
        <div className="card">
          <h3>Join Us</h3>
          <p>Become a part of our growing community.</p>
        </div>
      </section>
    </div>
  );
}
