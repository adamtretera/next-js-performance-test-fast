import dynamic from "next/dynamic";
import {useState} from "react";



const Picker = dynamic(() => import('emoji-picker-react'), { ssr: false })

export const CommentSection = () => {

    const [showMore, setShowMore] = useState(false)


    return (
        <div className={"p-10 bg-green-400 shadow rounded-2xl m-4"}>
      <textarea
          placeholder="Write your comment..."
          rows={4}
          cols={50}
      />

            <div>
                <button onClick={() => setShowMore(!showMore)}>Toggle</button>
                {showMore &&  <Picker autoFocusSearch={false}     />}
            </div>


        </div>
    );
};

