import book from "../models/book-model.js";


//! handleCreateBook-->
async function handleCreateNewBook(req, res) {
    console.log("server run");
    
//   try {
//     const newBookData = req.body;
//     let newlyCreateBook = await book.create(newBookData);
//     res.status(201).json({
//         success : true,
//         message : "Book Created",
//         data : newlyCreateBook
//     })
//   } catch (er) {
//     res.status(500).json({   
//       success: false,
//       message : "unable to create a book",
//       data :er.message
//     });
//   }
}

//! handleCGetAllBook-->
async function handleGetAllBook(req, res) {
    try{
    const allBook = await book.find({})
     if(allBook.length>0){
      res.status(200).json({
        success : true,
        message : "Fetch All Book",
        data : allBook
      })
     }
     else{
        res.status(400).json({
            success : false,
            message : "Book Not Found",
        })
     }
    }
    catch(er){
    res.status(500).json({
        success : false,
        message :"Something Went Wrong"
    })
    }
}
async function handleGetSingleBook(req, res){
    try{
        const BookID = req.params.id
        let data = await book.findById(BookID)
        if(data){
            res.status(200).json({
                success:true,
                message:"Fetch Single Data",
                data
            })
        }
        else{
            res.status(404).json({
                success:false,
                message:"Book Not Found"
            })
        }
    }
    catch(er){
    res.status(500).json({
        success:false,
        message:"something went wrong"
    })
    }
}

async function handleUpdateBook(req, res) {
    try{
        const bookId = req.params.id
        const updateBookData = req.body
        let data  = await book.findByIdAndUpdate(bookId,updateBookData,{new:true})

        if(data){
             res.status(200).json({
                success:true,
                message:"book updated successfully",
                data
            })
        }
           else{
            res.status(404).json({
                success:false,
                message:"Book Not Found"        
            })
        }

    }
    catch(er){
        res.status(500).json({
        success:false,
        message:"something went wrong"
    })
    }
}
async function handleDeleteBook(req, res) {
    try{

        let bookId = req.params.id
        const data = await book.findByIdAndDelete(bookId)

        if(data){
            res.status(200).json({
                success : true,
                message: "Book Deleted",
                data 
            })
        }
        else{
            res.status(404).json({
                success:false,
                message: "book not deleted"

            })
        }

    }
    catch(er){
            res.status(404).json({
                success:false,
                message:"Book Not Found"
            })
    }
}

export {
  handleGetAllBook,
  handleGetSingleBook,
  handleCreateNewBook,
  handleUpdateBook,
  handleDeleteBook, 
};
