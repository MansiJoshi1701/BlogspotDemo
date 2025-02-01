import { useState , useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs , setBlogs] = useState(null);
    const [isPending , setIsPending] = useState(true);
    const [error , setError] = useState(null);
    

    const handleDelete = (id) => {

        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);

    }

    useEffect(() => {
        //This function runs at EVERY RENDER i.e. everytime page changes, this function runs
        //If I only want it to run once on initial render, then pass and empty dependancy array []
        fetch('http://localhost:8000/blogs')
            .then(res => {
                if(!res.ok){
                    throw Error('Could not fetch data for that resource');
                }
                return res.json(); //parses the res object into a json object
            })
            .then(data => { //this will fire once above then function is executed i.e. once res is fully received
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                setIsPending(false);

            })
    } , [])

    return ( 
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading. . .</div>}
            {blogs && <BlogList Blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>}
            
        </div>
     );
}
 
export default Home;