import { UpdateQuoteIcon, CopyIcon } from "./icons"
import { getRandomQuotes } from "../services/quotes";
import Swal from 'sweetalert2'

export function ActionContainer({message, setQuotes})
{
    const copyToClipboard = async str => {
        try {
          await navigator.clipboard.writeText(str);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            theme:'dark',
            background:'#20293A url(https://i.ibb.co/7nY3C4y/random-quote.png)',
            color:'#9ba8be',
            backdrop:'rgba(18, 22, 38, 0.4)',
            title: 'Successfully copied.',
            showConfirmButton: false,
            timer: 1500
          })
        } catch (error) {
          console.log(error);
        }
    }


    const handleQuote = () =>
    {
        getRandomQuotes()?.then(quote => setQuotes(quote))
    }

    
    return(
        <div className="flex gap-0 overflow-hidden rounded-xl border-2 border-[#20293A]">
            <button className="px-[0.7rem] py-1 border-r-2 transition hover:bg-[#121626] border-[#20293A]" onClick={handleQuote}>
                <UpdateQuoteIcon></UpdateQuoteIcon>
            </button>
            <button className="px-[0.7rem] py-1 transition hover:bg-[#121626]" onClick={()=>{copyToClipboard(message)}}>
                <CopyIcon></CopyIcon>
            </button>
        </div>
    )
}