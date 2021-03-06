const Post = require('../models/post.model');
const uuid = require('uuid');

// get all posts

exports.getPosts = async (req, res) => {
    try {
        res.status(200).json(await Post.find());
    } catch(err) {
        res.status(500).json(err);
    }
};

//get single post

exports.getSinglePost = async (req, res) => {
    
    try {
        res.status(200).json(await Post.find({id: req.params.id}));
      } catch(err) {
        res.status(500).json(err);
      }
  
  };

// exports.getSinglePost = async(req, res) => {
//     Post.findOne({ id: req.params.id }).exec((err, post) => {
//         if (err) {
//             res.status(500).send(err);
//         }
//         res.json( post );
//     });
// };

//add new post
exports.addPost = async function (req, res) {
    try {
        const { title, author, content } = req.body;

        let newPost = new Post();
        newPost.title = title;
        newPost.author = author;
        newPost.content = content;
        newPost.id = uuid();

        postSaved = await newPost.save();
        res.status(200).json(postSaved);
    } catch (err) {
        res.status(500).json(err);
    }
};

//get posts by range
exports.getPostsByRange = async (req, res) => {

    try {
        let { startAt, limit } = req.params;

        startAt = parseInt(startAt);
        limit = parseInt(limit);

        let posts = await Post.find().skip(startAt).limit(limit);
        let amount = await Post.countDocuments();

        res.status(200).json({
            posts,
            amount,
        });

    } catch (err) {
        res.status(500).json(err);
    }
};