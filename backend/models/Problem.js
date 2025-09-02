import mongoose from 'mongoose';

const problemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], default: 'Medium' },
  link: { type: String },
  pattern: { type: String },
  node: { type: mongoose.Schema.Types.ObjectId, ref: 'MindmapNode' },
}, { timestamps: true });

export default mongoose.model('Problem', problemSchema);

// import mongoose from 'mongoose';

// const problemSchema = mongoose.Schema({
//   // FIX: Changed 'title' to 'name' to match the incoming data from seedData.js
//   name: {
//     type: String,
//     required: true,
//   },
//   nodeId: {
//     type: String,
//     required: true,
//   },
//   difficulty: {
//     type: String,
//     required: true,
//   },
// });

// const Problem = mongoose.model('Problem', problemSchema);
// export default Problem;
