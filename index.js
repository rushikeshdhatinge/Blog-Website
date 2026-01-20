import express from "express"
import morgan from "morgan"
import bodyParser from "body-parser"



const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(morgan("tiny"));
const port = 3000 ; 
 let titleArray =[];
    let writingArray =[];


app.get("/", (req,res)=>{
    res.render("index.ejs")
})

app.get("/submit", (req,res)=>{
    res.render("newBlog.ejs",{titleArray})
})

app.get("/blog", (req,res)=>{
    res.render("Blog.ejs",{titleArray})
})

   
    
    // writingArray.push(writing);

app.post("/submit",(req,res)=>{
//  let writing = req.body.writing;

    let Title = req.body.title;
   titleArray.push(Title);
  


  
    
    res.render("index.ejs",{titleArray})
    
    console.log(titleArray)
    
})

app.listen(port,()=>{
    console.log("Your server is running")
})

/* Problems 

I forgot to initialize  app = express()
I forgot to install ejs 
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");


<% titleArray.forEach((title,id)=>{ %>

                    <li> <a href="/blog">
                            <%= title + id %>
                        </a></li>
                  

                        <% }) %> 
                        
                        <% } else{%>
                          <h1>  write something </h1>
                        <% } %>


*/

