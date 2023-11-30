import Comment from "./Comment";
const CommentList = () => {
  return (
        <>
            <div className="">
      <Comment
        message="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
    perspiciatis!"
      />
      <div className="ml-5">
        <Comment
          message="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
    perspiciatis!"
        />
        <div className="ml-5">
          <Comment
            message="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
    perspiciatis!"
          />
        </div>
      </div>
    </div>
     <div className="">
     <Comment
       message="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
   perspiciatis!"
     />
     <div className="ml-5">
       <Comment
         message="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
   perspiciatis!"
       />
       <div className="ml-5">
         <Comment
           message="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
   perspiciatis!"
         />
       </div>
     </div>
   </div>
        </>
  );
};

export default CommentList;
