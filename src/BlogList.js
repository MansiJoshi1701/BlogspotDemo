import { Link } from "react-router-dom";

const BlogList = ( {Blogs , title} ) => {

//Since this is being called in the HOME section so this is a blueprint of how all blogs 
//will be displayed/rendered in the home page

    return (
        <div className="blog-list">
            <h2>{ title }</h2>  
            {Blogs.map((blog) => (
                <div className="blog-preview">
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