export interface User {
    username: string;
    role: string;
    registrationDate?: Date;
    iat?: number;
    exp?: number; 
}
