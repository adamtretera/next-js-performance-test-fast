import dynamic from "next/dynamic";

const Picker = dynamic(
    () => {
        return import('emoji-picker-react');
    },
    { ssr: false }
);
export const CommentSection = () => {



    return (
        <div className={"p-10 bg-green-400 shadow rounded-2xl m-4"}>
      <textarea
          placeholder="Write your comment..."
          rows={4}
          cols={50}
      />
        <Picker autoFocusSearch={false}     />
        </div>
    );
};

