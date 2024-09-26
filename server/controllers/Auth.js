const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

exports.signUp = async(req,res) => {
    try {
        const {name,email,password} = req.body;
        
        const existingUser = await User.findOne({email})

        if(existingUser){
            return res.status(409).json({
                success:false,
                message:"User already exists",
                alert:"User already exist"
            })
        }

        let HashedPassword

        try{
            HashedPassword = await bcrypt.hash(password,10)
           }catch(err){
            return res.status(500).json({
                success:false,
                message:"Error in hashing password"
            })
           }

           //create Entry for user
           const user =  await User.create({
            name:name,
            email:email,
            password:HashedPassword
           })
           
           return res.status(200).json({
            success:true,
            message:"User created successfully",
            alert:"User created" 
           })


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message
        })   
    }
}

exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message: "Please fill all the details carefully",
        });
      }
  
      let user = await User.findOne({ email });
  
      if (!user) {
        return res.status(401).json({
          success: false,
          message: "User is not registered",
        });
      }
  
      const payload = {
        email: user.email,
        id: user._id,
        role: user.role,
      };
  
      // Compare the provided password with the hashed password in the database
      if (await bcrypt.compare(password, user.password)) {
        // Password matches
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "2h",
        });
  
        user = user.toObject();
        user.token = token; // Assign the token to the user object
        user.password = undefined; // Remove the password from the user object
  
        const options = {
          expires: new Date(Date.now() + 30000), // Token expires in 30 seconds (for testing)
          httpOnly: true, // Cookie is only accessible by the server
        };
  
        // Send the token as a cookie and include it in the response
        return res.cookie("token", token, options).status(200).json({
          success: true,
          token,
          user,
          message: "User logged in successfully",
        });
      } else {
        return res.status(401).json({
          success: false,
          message: "Incorrect password",
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };


  exports.logout = async(req,res) =>{
    try {
      res.cookie('token','').json(true)
    } catch (error) {
       res.status(500).json({
        success:false,
        message:'Error loging out'
       })
    }
  }

