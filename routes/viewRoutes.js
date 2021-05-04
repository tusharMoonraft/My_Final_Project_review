const express=require('express');
const viewsController=require('../controllers/viewsController');
const Tour = require('./../models/tourModel');
const tourController = require('./../controllers/tourController');
const reviewController = require('./../controllers/reviewController');



const authController=require('../controllers/authController');
const router=express.Router();
const multer=require('multer');

 
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
      cb(null,'public/img/tours');
    },
    filename:(req,file,cb)=>{
      const ext=file.mimetype.split('/')[1];
      cb(null,`tour-${file.originalname}-${Date.now()}.${ext}`);
    }
  });

  const upload=multer({
    storage:storage

  })


router.get('/',authController.isLoggedIn,viewsController.getOverview);
router.get('/tour/:slug', authController.isLoggedIn,viewsController.getTour);
router.get('/login',authController.isLoggedIn,viewsController.getLoginForm);
router.get('/signup',viewsController.getSignupForm);
router.get('/create-review',authController.isLoggedIn,viewsController.getReviewCreateForm).post('/create-review',authController.isLoggedIn,reviewController.createReview)

router.get('/tour-create',authController.isLoggedIn,viewsController.getTourCreateForm).post('/tour-create',authController.isLoggedIn,tourController.uploadTourImages,
tourController.createTour)
// .post('/tours/tour-create',upload.array('images',3),async (req,res,next)=>{
//     var fileinfo=req.files;
//     var photos=fileinfo.map(el=>el.filename)
//     const doc = await Tour.create({
//         name:req.body.name,
//         images:photos

//     });
//     console.log('handleFactory',doc)
//     res.status(201).render('account',{
//         title:'Done'
//     });
    
//     console.log('photos',photos)
// });
router.get('/me',authController.protect, viewsController.getAccount);

router.post('/submit-user-data',authController.protect ,viewsController.updateUserData);




module.exports=router;