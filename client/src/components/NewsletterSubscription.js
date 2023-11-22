import React, { useState } from 'react';

const NewsletterSubscription = () => {
  const [news, setNews] = useState('');
  const [reporterEmail, setReporterEmail] = useState('');

  const handleNewsChange = (e) => {
    setNews(e.target.value);
  };

  const handleReporterEmailChange = (e) => {
    setReporterEmail(e.target.value);
  };

  const handleSubscribe = () => {
    const subject = encodeURIComponent(`News Submission: ${news}`);
    const body = encodeURIComponent(`Submitted News: ${news}\nReporter's Email: ${reporterEmail}`);

    const mailtoLink = `mailto:piyushpatelcodes@gmail.com?subject=${subject}&body=${body}`;

    // Open the user's default email client
    window.location.href = mailtoLink;

    // Optionally, you can reset the form fields
    setNews('');
    setReporterEmail('');
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={{ margin: 0 }}>Submit News and Reporter's Email</h2>
        <p style={{ margin: 0 }}>Share the latest news with us! Enter the details below:</p>
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="news">News:</label>
        <textarea
          id="news"
          value={news}
          onChange={handleNewsChange}
          placeholder="Enter the news"
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="reporterEmail">Your Email:</label>
        <input
          type="email"
          id="reporterEmail"
          value={reporterEmail}
          onChange={handleReporterEmailChange}
          placeholder="Enter your email"
          style={styles.input}
        />
      </div>
      <button onClick={handleSubscribe} style={styles.button}>
        Submit
      </button>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f7f7f7',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    width: '400px',
    margin: 'auto',
  },
  header: {
    backgroundColor: '#4285f4',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  },
  formGroup: {
    padding: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '16px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    boxSizing: 'border-box',
  },
  button: {
    backgroundColor: '#4285f4',
    color: '#fff',
    padding: '12px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    width: '100%',
  },
};

export default NewsletterSubscription;
