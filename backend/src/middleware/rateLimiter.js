export async function rateLimiter(req, res, next){

    try{
        const { success } = await ratelimit.limit("mylimitKey");
 
        if (!success) {
            return res.status(429).json({message: "Too many requests, please try again later"});
        }
    }
    catch(error){
        console.error("Rate limit error: ",error);
    }
    next();
}