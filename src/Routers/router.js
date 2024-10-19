 import express from "express";
 import testConstroller from "../Controllers/testConstrole.js";
 const router=express.Route();
 router.get("/test-user",testConstroller);


 export default {router};
