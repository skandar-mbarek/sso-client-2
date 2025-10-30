import axiosInstance from "../config/axios-config";


export interface ExchangeTokenRes{
    token : string;
}
export interface ExchangeTokenReq{
    code: string;
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
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error during exchange token:', error);
        throw new Error('AuthorizeClient');
    }
}
