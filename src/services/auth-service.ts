import axiosInstance from "../config/axios-config";

export const ClientToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjkxODYwZDYzLTM5MGUtNDU0NC1iYmNjLTkxMDc4ZjFiOWQwOSIsIkNMSUVOVF9JRCI6ImJvb2tpbmktdHJhdmVsIiwiZXhwIjoxNzkzNDQwMTIxLCJpc3MiOiJCb29raW5pLklkZW50aXR5LkFQSSIsImF1ZCI6IkJvb2tpbmkuSWRlbnRpdHlDbGllbnQifQ.DIzUyGljeJgYn90VJTuBxOQm3KdnDyoGtzx62Wzy80I";

export interface ExchangeTokenRes{
    access_token : string;
}
export interface ExchangeTokenReq{
    code: string;
}
export interface AuthorizeClientRes{
    access_token: string;
}
export const ExchangeToken= async (request: ExchangeTokenReq):Promise<ExchangeTokenRes>=>{
    try {
        console.log("ExchangeToken",request.code);
        const response = await axiosInstance.post<ExchangeTokenRes>(
            '/api/connect/exchange',
            null,
            {
                params: {
                    code: request.code,
                },
                withCredentials: true
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error during exchange token:', error);
        throw new Error('AuthorizeClient');
    }
}


export const AuthorizeClient = async (): Promise<AuthorizeClientRes> => {
    const currentUrl = window.location.href; // Capture current page URL

    try {
        const response = await axiosInstance.get<AuthorizeClientRes>(
            '/api/connect/authorize',
            {
                headers: {
                    'clientToken': ClientToken
                },
                validateStatus: () => true ,
                withCredentials: true

            }
        );
        if (response.status === 200 && response.data?.access_token) {
            return response.data;
        }

        if (response.status === 400) {
            const redirectUrl = `https://main-sso-front.netlify.app?clientUrl=${encodeURIComponent(currentUrl)}`;
            window.location.href = redirectUrl;
            throw new Error('BadRequest - Redirecting to login');
        }
        throw new Error(`Unexpected response: ${response.status}`);
    } catch (error) {
        console.error('Error during Authorize Client', error);
        throw new Error('AuthorizeClient');
    }
};