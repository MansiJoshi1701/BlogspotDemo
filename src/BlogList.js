import { Link } from "react-router-dom";

//Since this is being called in the HOME section so this is a blueprint of how all blogs 
//will be displayed/rendered in the home page

const BlogList = ({Blogs}) => {

    return (
        <div className="blog-list">  
            {Blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to = {`/blogs/${blog.id}`}>
                        <h2>{ blog.title }</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;