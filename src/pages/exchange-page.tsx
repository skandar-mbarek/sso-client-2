import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useExchangeToken } from "../hooks/use-exchange-token";

const ExchangePage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const exchangeCode = searchParams.get("exchangeCode") ?? "";

    const exchangeTokenMutation = useExchangeToken();

    useEffect(() => {
        if (!exchangeCode) {
            console.error("Missing exchangeCode in query params");
            navigate("/login");
            return;
        }

        // Automatically call the exchange token hook
        exchangeTokenMutation.mutate({ code: exchangeCode });
    }, [exchangeCode]);

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                fontFamily: "Arial, sans-serif",
            }}
        >
            {/* Spinner & Text */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "20px",
                }}
            >
                <div
                    style={{
                        width: "70px",
                        height: "70px",
                        border: "6px solid rgba(255,255,255,0.3)",
                        borderTop: "6px solid #fff",
                        borderRadius: "50%",
                        animation: "spin 1s linear infinite",
                    }}
                ></div>

                <div
                    style={{
                        fontSize: "22px",
                        fontWeight: "600",
                        textAlign: "center",
                    }}
                >
                    Validate Authorization...
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

export default ExchangePage;
