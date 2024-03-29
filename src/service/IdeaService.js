import HttpClient from "./HttpClient";

export default class IdeaService {

    static async generateIdea(prompt, count) {
        const response = await HttpClient.post('/generate', {
            prompt,
            count
        });

        return response.data;
    }

    static async justGpt(prompt) {
        const response = await HttpClient.post('/gpt', {
            prompt
        });
        return response.data;
    }
};
