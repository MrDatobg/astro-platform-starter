// src/utils/util.ts

/**
 * Generate a random string of specified length
 * @param length - Length of the random string
 * @returns Random string
 */
export function generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

/**
 * Validate email format
 * @param email - Email to be validated
 * @returns boolean indicating if email is valid
 */
export function validateEmail(email: string): boolean {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.\,;:\s@"]+\.)+[^<>()[\]\.\,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}

/**
 * Hash password
 * @param password - Password to be hashed
 * @returns hashed password
 */
import * as crypto from 'crypto';

export function hashPassword(password: string): string {
    const hash = crypto.createHash('sha256');
    hash.update(password);
    return hash.digest('hex');
}

/**
 * Check if password meets criteria
 * @param password - Password to be checked
 * @returns boolean indicating if password meets criteria
 */
export function validatePassword(password: string): boolean {
    // Password must be at least 8 characters, include a number and a special character
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return re.test(password);
}
