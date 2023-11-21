import express from 'express';
import { getPosts,createPost,updatePost,getPost,deletePost,feedPost} from '../controllers/posts.mjs';

const router = express.Router();

router.get('/',getPosts);
router.post('/',createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/feedPost',feedPost);

export default router;