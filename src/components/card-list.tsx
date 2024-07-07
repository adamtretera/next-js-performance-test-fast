import {Card} from "@/components/card";

export function CardList({items}: {items:any[]}) {
    return (
        <div className="grid grid-cols-4 gap-4 container m-auto">
            {items.map((item) => (
                <Card key={item.id} title={item.fields.title} description={item.fields.about}
                      image={item.fields.image.fields.file.url}/>
            ))}
        </div>
    );
}