import { Inter } from "next/font/google";
import {Video} from "@/components/video";
import {getAllItems} from "@/lib/contentfull";
import {CardList} from "@/components/card-list";
import {Header} from "@/components/header";
import {CommentSection} from "@/components/coment-section";

const inter = Inter({ subsets: ["latin"] });


export async function getStaticProps() {
    const items = await getAllItems();
    return {
        props: {
            items: items,
        },
        revalidate: 1,
    };
}

export default function Home({items}: {items:any[]}) {

  return (
   <main>
        <Header/>
        <CardList items={items}/>

       <div className={"flex container m-auto gap-3"}>

        <Video/>
       <CommentSection/>
       </div>

   </main>
  );
}
