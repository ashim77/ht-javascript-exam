function generateRandomPassword(length) {
    const characterSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = "";

    if (length <= 0) {
        return "Password length must be greater than 0.";
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }

    return password;
}

// Example usage: generate a random password with a length of 12
const randomPassword = generateRandomPassword(12);
console.log(randomPassword);