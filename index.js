import express from "express"
import morgan from "morgan"
import bodyParser from "body-parser"



const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(morgan("tiny"));
const port = 3000;
let blogs = [];
let idCounter = 0;


app.get("/", (req, res) => {
    res.render("index.ejs", { blogs })
})

app.get("/blog/:id", (req, res) => { const blog = blogs.find(b => b.id == req.params.id);



     if (!blog) {
    return res.send("Blog not found");
  }
     res.render("blog.ejs", { blog }); });



app.get("/newBlog", (req, res) => {
    res.render("newBlog.ejs")
})


app.post("/submit", (req, res) => {

    const blog = {
        id: idCounter++,
        title: req.body.title,
        content: req.body.content

    }
    blogs.push(blog);
    console.log(blogs)
    res.redirect("/")


})

app.listen(port, () => {
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

                        I am using wrong approach Instead of using object I using 
                        two arrays separate arrays or content title and I should add ID to an object also 

                        I forgot let or var

*/

