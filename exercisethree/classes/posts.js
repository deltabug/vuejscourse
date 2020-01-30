import baseaxios from "./baseaxios";

const resource = "/posts";
export default {
  get() {
    return baseaxios.get(`${resource}`);
  },

  getPost(postId) {
    return baseaxios.get(`${resource}/${postId}`);
  },

  createPost(payload) {
    return baseaxios.post(`${resource}`, payload);
  }
};
