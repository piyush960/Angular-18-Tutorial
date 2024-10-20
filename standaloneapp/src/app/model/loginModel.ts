export interface loginModel {
    username: string,
    password: string
}

export interface user {
    id: string,
    name: string,
    password: string,
    email: string,
    role: string,
    gender: string
}

export interface Role {
    value: string, 
    viewValue: string
}