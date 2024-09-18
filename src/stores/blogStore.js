import { defineStore } from 'pinia'
import axios from 'axios'

export const useBlogStore = defineStore('blogStore', {

    state: () => ({
        blogs: [],
        topics: [],
        blogsFilter: [],
        errorMessage: ''
    }),
    actions: {
        async fetchBlogs() {
            try {
                const response = await axios.get('https://demo.api.nuvoteq.io/api/blog/get')

                if (response.status === 200) {
                    this.blogs = response.data
                }
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    this.errorMessage = 'You are not authenticated. Please log in.'
                } else if (error.response && error.response.status === 403) {
                    this.errorMessage = 'You do not have permission to access this resource.'
                } else {
                    this.errorMessage = 'Failed to fetch blogs: ' + error.message
                }
            }
        },

        async fetchTopics() {
            try {
                const response = await axios.get('https://demo.api.nuvoteq.io/api/topic/get')

                if (response.status === 200) {
                    this.topics = response.data.map(topic => ({
                        id: topic.id.toString(),  
                        title: topic.title
                      }))
                    console.log(topics)
                }
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    this.errorMessage = 'You are not authenticated. Please log in.'
                } else if (error.response && error.response.status === 403) {
                    this.errorMessage = 'You do not have permission to access this resource.'
                } else {
                    this.errorMessage = 'Failed to fetch topics: ' + error.message
                }
            }
        },


        async addBlog(blog) {
            try {
                const response = await axios.post('https://demo.api.nuvoteq.io/api/blog/create', blog, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })

                if (response.status === 200) {
                   // this.fetchBlogs() 
                }
            } catch (error) {
                console.log(error)
                if (error.response && error.response.status === 401) {
                    this.errorMessage = 'You are not authenticated. Please log in.'
                } else if (error.response && error.response.status === 403) {
                    this.errorMessage = 'You do not have permission to perform this action.'
                } else {
                    this.errorMessage = 'Error adding blog: ' + error.message
                }
            }
        },

        async addTopic(title) {
            try {
                console.log({ title })
                const response = await axios.post('https://demo.api.nuvoteq.io/api/topic/create', { title }, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })

                if (response.status === 200) {
                    this.fetchTopics() // Refresh topics after adding
                }
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    this.errorMessage = 'You are not authenticated. Please log in.'
                } else if (error.response && error.response.status === 403) {
                    this.errorMessage = 'You do not have permission to add a topic.'
                } else {
                    this.errorMessage = 'Error adding topic: ' + error.message
                }
            }
        },

       
        setFilter(topicIDS) {
            console.log(topicIDS)
            this.blogsFilter = topicIDS
        },
    },

    getters: {

        filteredBlogsByTopic() {
            return this.blogsFilter.length
                ? this.blogs.filter(blog => this.blogsFilter.includes(blog.topic_id.toString()))
                : this.blogs
        },
    },
})

