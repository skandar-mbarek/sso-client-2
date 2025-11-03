import React from 'react';

const LoginPage: React.FC = () => {



    const handleLogin = () => {
        const currentUrl = window.location.href;
        window.location.href =`http://localhost:3000?clientUrl=${encodeURIComponent(currentUrl)}` ;
    };

    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            fontFamily: 'Arial, sans-serif'
        }}>
            <div style={{
                maxWidth: '450px',
                width: '100%',
                backgroundColor: 'white',
                borderRadius: '20px',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
                padding: '40px',
                textAlign: 'center'
            }}>
                <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: '#667eea',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px',
                    color: 'white',
                    fontSize: '32px'
                }}>
                    🔐
                </div>
                <h1 style={{
                    fontSize: '28px',
                    fontWeight: 'bold',
                    color: '#333',
                    marginBottom: '8px'
                }}>
                    Client App 2
                </h1>
                <p style={{
                    color: '#666',
                    marginBottom: '32px',
                    fontSize: '16px',
                    lineHeight: '1.5'
                }}>
                    Sign in to access your account
                </p>

                <button
                    onClick={handleLogin}
                    style={{
                        width: '100%',
                        backgroundColor:   '#667eea',
                        color: 'white',
                        border: 'none',
                        borderRadius: '12px',
                        padding: '16px 24px',
                        fontSize: '16px',
                        fontWeight: '600',
                        cursor:  'pointer',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        boxShadow:  '0 4px 15px rgba(102, 126, 234, 0.3)',
                        transform:  'translateY(0)',
                        opacity:  1
                    }}
                >

                    <>
                        <span>🚀</span>
                        <span>Login with Bookini Identity</span>
                    </>

                </button>

                <div style={{
                    marginTop: '24px',
                    padding: '16px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px',
                    border: '1px solid #e9ecef'
                }}>
                    <p style={{
                        color: '#6c757d',
                        fontSize: '14px',
                        margin: 0,
                        lineHeight: '1.4'
                    }}>
                        Secure authentication powered by OAuth 2.0 protocol
                    </p>
                </div>
            </div>

            <style>
                {`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                `}
            </style>
        </div>
    );
};

export default LoginPage;