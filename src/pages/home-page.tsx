import React from 'react';


const HomePage: React.FC = () => {

    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            fontFamily: 'Arial, sans-serif'
        }}>
            <div style={{
                maxWidth: '500px',
                width: '100%',
                backgroundColor: 'white',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                padding: '40px',
                textAlign: 'center'
            }}>
                <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: '#4CAF50',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px',
                    color: 'white',
                    fontSize: '32px'
                }}>
                    ✓
                </div>
                <h1 style={{
                    fontSize: '32px',
                    fontWeight: 'bold',
                    color: '#333',
                    marginBottom: '8px'
                }}>
                    Client App 2
                </h1>
                <h2 style={{
                    fontSize: '20px',
                    color: '#4CAF50',
                    fontWeight: '600',
                    marginBottom: '16px'
                }}>
                    Home page (Connected)
                </h2>
                <p style={{
                    color: '#666',
                    marginBottom: '24px',
                    lineHeight: '1.5'
                }}>
                    You have successfully connected to the application.
                </p>
                <div style={{
                    backgroundColor: '#f1f8e9',
                    border: '1px solid #c5e1a5',
                    borderRadius: '8px',
                    padding: '16px'
                }}>
                    <p style={{
                        color: '#33691e',
                        fontSize: '14px',
                        margin: 0
                    }}>
                        Your session is active and secure
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;