export const getEnvVariables = () => {
    return {
        VITE_API_URL: import.meta.env,
    };
};
