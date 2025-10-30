import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {ExchangeToken, ExchangeTokenReq, ExchangeTokenRes} from "../services/auth-service";



export const useExchangeToken = () => {
    const navigate = useNavigate();
    const mutation = useMutation({
        mutationFn: (credentials: ExchangeTokenReq) => ExchangeToken(credentials),
        onSuccess: (data: ExchangeTokenRes, variables: ExchangeTokenReq) => {

            if (data.token) {
                localStorage.setItem('token', data.token);
            }
            navigate(`/`);
        },
        onError: (error: Error) => {
            console.error('Login failed:', error);
        },
    });

    return mutation;
};