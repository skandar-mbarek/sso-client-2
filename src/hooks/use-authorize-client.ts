import {useNavigate} from "react-router-dom";
import {useMutation} from "@tanstack/react-query";
import {
    AuthorizeClient,
    AuthorizeClientRes
} from "../services/auth-service";

export const useAuthorizeClient = () => {
    const navigate = useNavigate();
    const mutation = useMutation({
        mutationFn: () => AuthorizeClient(),
        onSuccess: (data: AuthorizeClientRes) => {

            if (data.access_token) {
                localStorage.setItem('token', data.access_token);
            }
            navigate(`/`);
        },
        onError: (error: Error) => {
            console.error('Login failed:', error);
        },
    });

    return mutation;
};