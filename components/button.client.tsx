"use client";
interface ButtonProps<T> {
    address?: string;
    data?: T;
}

export default function Button<T>({ data, address }: ButtonProps<T>) {
    return data ? <button onClick={() => console.log("Data check: ", data)}>Log check</button> : <button onClick={() => console.log("Address check: ", address)}>Log check</button>;
}
