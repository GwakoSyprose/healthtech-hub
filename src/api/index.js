import axios from "axios"

const API_URL = "https://demo.api.nuvoteq.io/api/"

const fetch = async (url) => {
    try {
        const response = await axios.get(url)

        return {
            success: true,
            data: response.data,
            status: response.status
        }
    } catch (error) {
        // TODO: Handle different types of errors
        if (error.response) {
            return {
                success: false,
                error: error.response.data,
                status: error.response.status
            }
        } else if (error.request) {
            return {
                success: false,
                error: "No response received from server",
                status: 0
            }
        } else {
            return {
                success: false,
                error: error.message,
                status: 500
            }
        }
    }
}

const post = async (url, data) => {
    try {
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        })

        return {
            success: true,
            data: response.data,
            status: response.status
        }
    } catch (error) {

        if (error.response) {
            return {
                success: false,
                error: error.response.data,
                status: error.response.status
            }
        } else if (error.request) {
            return {
                success: false,
                error: "No response received from server",
                status: 0
            }
        } else {
            return {
                success: false,
                error: error.message,
                status: 500
            }
        }
    }
}

export const getBlogs = async () => {
    return fetch(`${API_URL}blog/get`)
}

export const getTopics = async () => {
    return fetch(`${API_URL}topic/get`)
}

export const postBlog = async (blog) => {
    return post(`${API_URL}blog/create`, blog)
}
