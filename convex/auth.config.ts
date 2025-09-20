export default {
    providers: [
        {
            type: "customJwt",
            applicationID: "scrybe",
            issuer: process.env.VITE_BETTER_AUTH_URL,
            jwks: `${process.env.VITE_BETTER_AUTH_URL}/api/auth/jwks`,
            algorithm: "RS256"
        }
    ]
}
