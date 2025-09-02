import mongoose from 'mongoose';

const mindmapNodeSchema = new mongoose.Schema({
  label: { type: String, required: true },
  description: { type: String },
  pattern: { type: String },
  problems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Problem' }],
  parent: { type: mongoose.Schema.Types.ObjectId, ref: 'MindmapNode' },
  children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MindmapNode' }],
  order: { type: Number },
}, { timestamps: true });

export default mongoose.model('MindmapNode', mindmapNodeSchema);
