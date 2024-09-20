import { defineStore } from 'pinia'

export const useBlogStore = defineStore('blogStore', {

    state: () => ({
        blogs: [],
        topics: [],
        topicFilterIDs: [],
        selectedBlog: {}
    }),
    actions: {
        
        setBlogs(newBlogs) {
            this.blogs = newBlogs
        },

        setTopics(newTopics) {
            this.topics = newTopics.map(topic => ({
                id: topic.id,
                title: topic.title
            }))
        },

        addBlog(newBlog) {

            this.blog.push(newBlog)
        },

        setCurrentBlog(id) {

            this.selectedBlog = this.blogs.find(blog => blog.id === parseInt(id))
        },

        toggleTopic(topicId) {

            const index = this.topicFilterIDs.indexOf(topicId)

            if (index > -1) {
                this.topicFilterIDs.splice(index, 1)
            } else {
                this.topicFilterIDs.push(topicId)
            }
        },

    },

    getters: {

        blogsFilteredByTopic() {
            return this.topicFilterIDs.length
                ? this.blogs.filter(blog => this.topicFilterIDs.includes(blog.topic_id))
                : this.blogs
        },

        todaysDate: () => new Date(),

        getCustomDate: (dateString) => new Date(dateString)
    },
})

