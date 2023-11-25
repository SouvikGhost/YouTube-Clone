const data=[
    {
        name:"Souvik Ghosh",
        text:"hello my name is Souvik Ghosh",
        replies:[]
    },
    
    {
        name:"Souvik Ghosh",
        text:"hello my name is Souvik Ghosh",
        replies:[{
            name:"Souvik Ghosh",
            text:"hello my name is Souvik Ghosh",
            replies:[{
                name:"Souvik Ghosh",
                text:"hello my name is Souvik Ghosh",
                replies:[]
            },{
                name:"Souvik Ghosh",
                text:"hello my name is Souvik Ghosh",
                replies:[]
            },{
                name:"Souvik Ghosh",
                text:"hello my name is Souvik Ghosh",
                replies:[]
            }]
        },{
            name:"Souvik Ghosh",
            text:"hello my name is Souvik Ghosh",
            replies:[]
        },{
            name:"Souvik Ghosh",
            text:"hello my name is Souvik Ghosh",
            replies:[]
        },]
    },
    
    {
        name:"Souvik Ghosh",
        text:"hello my name is Souvik Ghosh",
        replies:[{
            name:"Souvik Ghosh",
            text:"hello my name is Souvik Ghosh",
            replies:[]
        },{
            name:"Souvik Ghosh",
            text:"hello my name is Souvik Ghosh",
            replies:[]
        },{
            name:"Souvik Ghosh",
            text:"hello my name is Souvik Ghosh",
            replies:[{
                name:"Souvik Ghosh",
                text:"hello my name is Souvik Ghosh",
                replies:[]
            },{
                name:"Souvik Ghosh",
                text:"hello my name is Souvik Ghosh",
                replies:[]
            },{
                name:"Souvik Ghosh",
                text:"hello my name is Souvik Ghosh",
                replies:[{
                    name:"Souvik Ghosh",
                    text:"hello my name is Souvik Ghosh",
                    replies:[]
                },{
                    name:"Souvik Ghosh",
                    text:"hello my name is Souvik Ghosh",
                    replies:[{
                        name:"Souvik Ghosh",
                        text:"hello my name is Souvik Ghosh",
                        replies:[]
                    },{
                        name:"Souvik Ghosh",
                        text:"hello my name is Souvik Ghosh",
                        replies:[]
                    },{
                        name:"Souvik Ghosh",
                        text:"hello my name is Souvik Ghosh",
                        replies:[]
                    }]
                },{
                    name:"Souvik Ghosh",
                    text:"hello my name is Souvik Ghosh",
                    replies:[]
                }]
            }]
        }]
    },
    
    {
        name:"Souvik Ghosh",
        text:"hello my name is Souvik Ghosh",
        replies:[{
            name:"Souvik Ghosh",
            text:"hello my name is Souvik Ghosh",
            replies:[]
        },{
            name:"Souvik Ghosh",
            text:"hello my name is Souvik Ghosh",
            replies:[]
        },{
            name:"Souvik Ghosh",
            text:"hello my name is Souvik Ghosh",
            replies:[]
        },]
    },
    
    {
        name:"Souvik Ghosh",
        text:"hello my name is Souvik Ghosh",
        replies:[]
    },
    

]


export const OneComent=({data})=>{
    if(!data) return null;
    const {snippet}=data
    return (
        <div className="bg-gray-300 p-2 rounded-lg mt-3 ">

        <div className="flex ">
            <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="logo" className="h-6 " />
            <h1 className="text-base font-semibold text-black ml-2">{snippet?.topLevelComment?.snippet?.authorDisplayName}</h1>
        </div>
            <p className="pt-1">{snippet?.topLevelComment?.snippet?.textDisplay}</p>
        </div>

    )
    
}
const CommentsList=({data})=>{
    return(
       
        <div className="">
            {data.map((comment,index)=>
            <div key={index}>

                
                <OneComent data={comment}/>
                <div className="ml-4 border border-l-black pl-5">
                    {/* Recursion --- calling same component inside that same component */}
                    <CommentsList data={comment.replies}/>
                </div>
            </div>
            
            )}
        </div>

        

    )

}
const Comments = () => {
  return (
    <>
    <div>
        <h1 className="text-xl font-bold py-5 ">Comments:---</h1>
    </div>
       <CommentsList data={data}/>
    </>
  )
}

export default Comments