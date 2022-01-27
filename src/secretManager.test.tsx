import {getSecret} from "./secretManager";

describe('SecretManager tests', () => {
    test('Get secret success', () => {
        const secret = getSecret();
        expect(secret).toEqual('I_am_a_secret');
    });
});
