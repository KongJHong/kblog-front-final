export interface ResultDTO<T> {
    data: T;

    code: number;

    message: string;
}