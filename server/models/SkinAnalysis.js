import mongoose from 'mongoose';

const schema = new mongoose.Schema({ /*...*/ });
const SkinAnalysis = mongoose.model('SkinAnalysis', schema);
export default SkinAnalysis;