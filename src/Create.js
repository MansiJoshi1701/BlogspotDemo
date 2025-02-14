import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title , setTitle] = useState('');
    const [body , setBody] = useState('');
    const [author , setAuthor] = useState('');
    const [isPending , setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {

        setIsPending(true);

        e.preventDefault();
        const blog = { title , body , author };
        
        //we're now going to send a POST request for adding this new data in our json db
        fetch('http://localhost:8000/blogs' , {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog) //this is to convert the blog object to a json string

        })
        .then(() => { //since fetch is an asynchronous function so we can use then method on it
            console.log('new blog added');
            setIsPending(false);
            history.push('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title: </label>
                <input 
                    type="text"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    //value = {title}
                    //onChange is used to tell React to only re-render based on when I say and not at all times.
                    //So here i want it to re-render anytime there's change in this specific field                     
                />
                <label>Blog body:</label>
                <textarea 
                    required
                    value = {body}                    
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>Blog author:</label>
                <select
                    value = {author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mansi">Mansi</option>
                    <option value="joshi">Joshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
     );
}
 
export default Create