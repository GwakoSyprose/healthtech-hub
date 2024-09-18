import { defineStore } from 'pinia'
import axios from 'axios'

export const useBlogStore = defineStore('blogStore', {

    state: () => ({
        blogs: [],
        topics: [],
        blogsFilter: [],
        errorMessage: '',
        loading: false
    }),
    actions: {
        async fetchBlogs() {

            this.loading = true

            try {
                const response = await axios.get('https://demo.api.nuvoteq.io/api/blog/get')

                if (response.status === 200) {
                    this.blogs = response.data
                    this.loading = false
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

            this.loading = true

            try {
                const response = await axios.get('https://demo.api.nuvoteq.io/api/topic/get')

                if (response.status === 200) {
                    this.topics = response.data.map(topic => ({
                        id: topic.id.toString(),
                        title: topic.title
                    }))

                    this.loading = false
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
            this.blogsFilter = topicIDS
        },

        setCurrentBlog(blog) {

            this.selectedBlog = blog
        }
    },

    getters: {

        blogsFilteredByTopic() {
            return this.blogsFilter.length
                ? this.blogs.filter(blog => this.blogsFilter.includes(blog.topic_id.toString()))
                : this.blogs
        },

        todaysDate: () => new Date(),

        getCustomDate: (dateString) => new Date(dateString)
    },
})

