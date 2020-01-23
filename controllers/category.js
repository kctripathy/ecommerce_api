const Category = require("../models/category");
const { errorHandler } = require('../helpers/dbErrorHandler');

//===================================================================
//
//===================================================================
exports.categoryById = (req,res,next,id)=>{
	Category.findById(id).exec((err,category)=>{
		if (err || !category){
			return res.status(400).json({
				error: "Category does not exists"
			});
		}
		req.category = category;
		next();
	});
};

//===================================================================
//
//===================================================================
exports.createCategory = (req,res)=>{
	//res.send(".....from category controller!!! create")
	console.log(req.body);
	const category = new Category(req.body);
	category.save((err,data)=>{
			if (err){
					return (
							res.status(400).json({
								//error: errorHandler(err)
								error: errorHandler(err) || "Failed to create a category!"
							})
						)
			}
			// if not error return success
			res.json({data})
			// return (
			// 	res.status(200).json({
			// 		data: result
			// 	})
			// )
	})	
};

//===================================================================
//
//===================================================================
exports.readCategories = (req,res)=>{
	//res.send("readCategories.....from category controller!!! create")
	return res.json(req.category)
};

//===================================================================
//
//===================================================================
exports.listCategories = (req,res)=>{
	//res.send("listCategories.....from category controller!!! create")
	Category.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};

//===================================================================
//
//===================================================================
exports.updateCategory = (req,res)=>{
	res.send("updateCategory.....from category controller!!! create")
};

//===================================================================
//
//===================================================================
exports.deleteCategory = (req,res)=>{
	res.send("deleteCategory.....from category controller!!! create")
};