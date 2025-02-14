import { useState } from "react";

const Create = () => {

    const [title , setTitle] = useState('');
    const [body , setBody] = useState('');
    const [author , setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title , body , author };
        console.log(blog);
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
                <button>Add Blog</button>
                <p>{ title }</p>
            </form>
        </div>
     );
}
 
export default Create