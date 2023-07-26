import Table from 'react-bootstrap/Table';




const PostsList = ({posts,name,deleteAction})=>{

    return(
        <div className='container'>
            <h1>{name}</h1>
            <Table striped bordered hover variant="white">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>-Delete-</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts && posts.map((post) => (
                        
                        <tr key={post.id}>
                        <td>{post.id}</td>
                        <td> {post.title} </td>
                        <td> {post.body} </td>
                        <td> <button onClick={() => deleteAction(post.id)} type='button' className='btn btn-danger' >Delete</button>  </td>
                        </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );

}

export default PostsList;