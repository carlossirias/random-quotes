/* eslint-disable react/prop-types */
import { QuotesBackground } from "./QuotesSection"
import { SpinIcon } from "./icons"

export function Card({id, author, content, tags, hasContent})
{
    return(
        <article className="w-full traje max-w-[548px] flex flex-col gap-7 overflow-hidden relative pt-9 pb-10 bg-[#20293A] rounded-xl">
            {hasContent ? <BodyCard
            id={id}
            content={content}
            author={author}
            tags={tags}/> : <WaitingContainer/>}
            <QuotesBackground/> 
        </article>
    )
}

function BodyCard({id, author, content, tags})
{
    return(
        <>
        <header className="flex z-10 flex-col gap-[10px] items-center">
            <h1 className="text-white text-base font-semibold">{author}</h1>
            <div className="flex gap-2">
                {tags?.map((tag, index) => {
                    return <Tag message={tag} key={id + '-' + index} />
                })}
            </div>
        </header>
        <main className="flex z-10 justify-center">
            <p className="text-[#9ba8be] text-center max-w-lg text-2xl leading-tight">&quot;{content}&quot;</p>
        </main>
        </>
    )
}

function Tag({message})
{
    return(
        <span className="px-3 pt-[1.5px] pb-[2px] rounded-full flex items-center justify-center transition hover:text-white hover:bg-[#6466E9]  text-[#6466E9] border border-[#6466E9] "><span className="text-[10px] font-medium">{message}</span></span>
    )
}

function WaitingContainer()
{
    return(
        <div className="w-full h-32 flex items-center justify-center z-10">
            <SpinIcon></SpinIcon>
        </div>
    )
}

