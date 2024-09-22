import express from "express";
import { updateUser, deleteUser, getUser, getUsers } from "../controllers/user.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req,res,next)=>{
    res.send("Hello user! You are logged in!!")
});

router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
    res.send("Hello user! You are logged in and you can delete your account!!")
});

router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
    res.send("Hello admin! You are logged in and you can delete all accounts!!")
});

router.put("/:id", verifyUser, updateUser);

router.delete("/:id", verifyUser, deleteUser);

router.get("/:id", verifyUser, getUser);

router.get("/", verifyAdmin, getUsers);

export default router;