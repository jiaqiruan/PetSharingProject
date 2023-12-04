import express from 'express';
import { getPosts,createPost,updatePost,getPost,deletePost,feedPost} from '../controllers/posts.mjs';
import auth from '../middleware/auth.mjs';
const router = express.Router();

router.get('/',getPosts);

router.post('/',auth,createPost);

router.get('/:id', getPost);
router.patch('/:id',auth,updatePost);
router.delete('/:id',auth,deletePost);
router.patch('/:id/feedPost',auth,feedPost);

export default router;