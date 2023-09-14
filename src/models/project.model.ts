import mongoose, { Schema } from 'mongoose';

const projectSchema = new Schema({
  id: Number,
  name: String,
  visibility: String,
  html_url: String,
  description: String,
  license: Object,
  topics: Array,
  forks: Number,
  stargazers_count: Number,
  contributors: Array,
  trafficClones: Object,
  trafficViews: Object,
  languages: Object,
  private: {
    type: Boolean,
    default: true,
  },
  images: [
    {
      url: String,
      uid: String,
    },
  ],
  created_at: Date,
  updated_at: Date,
});
const Project = mongoose.model('Project', projectSchema);

export default Project;
