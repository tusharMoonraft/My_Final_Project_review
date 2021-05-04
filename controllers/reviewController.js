const Review = require('./../models/reviewModel');
const Tour = require('../models/tourModel');
const User = require('./../models/userModel');


const factory = require('./handlerFactory');
const catchAsync = require('./../utils/catchAsync');

exports.setTourUserIds = (req, res, next) => {
  // Allow nested routes
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.getAllReviews = factory.getAll(Review);
exports.getReview = factory.getOne(Review);
exports.createReview =catchAsync(async (req, res, next) => {
  console.log(req.body.tourname);
  console.log(req.body.username);
  let nameTour = await Tour.findOne({name:req.body.tourname});
  console.log(nameTour)
  var tourId=nameTour._id
  console.log('name',tourId)
  let userName=await User.findOne({name:req.body.username});
  console.log(userName)
  
  var userId=userName._id
  const doc = await Review.create({
    review:req.body.review,
    rating:req.body.rating,
    tour:tourId,
    user:userId
    
    

  });
  console.log('tour controller',doc)

  res.status(201).redirect('/')
});
exports.updateReview = factory.updateOne(Review);
exports.deleteReview = factory.deleteOne(Review);
