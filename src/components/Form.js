
const Form = () =>{

    let email;
    return(
        <div>
            <form >
                <div className="formElement">
                    <label > <h1>Username</h1></label>
                    <input type="text" id="email" value={email}  />
                </div>
                <div className="formElement">
                    <label > <h1>Password</h1></label>
                    <input type="text" id="password" />
                </div>
                <div className="formElement">
                    <input type="submit" value="Next" />
                </div>
            </form>
        </div>
    )
}

export default Form;

{/* <form onSubmit={handleFormSubmission}>
<div className="formElement">
<label htmlFor="description">Description: </label>
<input type="text" id="description" value={description} onChange={handleDescriptionChange}/>
</div>
<div className="formElement">
<label htmlFor="priority">Priority: </label>
<input type="text" id="priority" value={priority} onChange={handlePriorityChange}/>
</div>
<div className="formElement">
<input type="submit" value="Add Task" />
</div>
</form> */}
