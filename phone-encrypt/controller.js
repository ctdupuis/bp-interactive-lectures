module.exports = {
    encryptNumber: (req, res) => {
        // uses key lookup to change the digits
        let numberPattern = {
            "1": "9",
            "2": "8",
            "3": "7",
            "4": "6",
            "5": "0",
            "6": "4",
            "7": "3",
            "8": "2",
            "9": "1",
            "0": "5"
        };

        // req.body = { "phone": "546465465" }
        let { phone } = req.body;

        // Sets encrypted to split the string, map over and get a new array containing the encrypted number, then joins that array back to a string
        // digit === phone.split[i]
        let encrypted = phone.split("").map(digit => numberPattern[digit]).join("");

        // sending back a 200 status code and a response with the encrypted number
        res.status(200).send(encrypted);
    }
}