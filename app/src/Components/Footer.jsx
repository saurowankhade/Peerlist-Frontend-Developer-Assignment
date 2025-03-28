import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const Footer = ({isDisable,setIsDisable}) => {
  const data = useSelector((state) => state.input.data);
  const formTitle = useSelector((state) => state.input.title);
   const router = useRouter();

  const saveDraftButton = ()=>{
    const error = data.some((items)=>items?.isQuestion === false);
    if(error) {
      toast.dismiss()
      toast.error('fill the question name')
    } else if(!formTitle){
      toast.dismiss()
      toast.error('Form title missing.')
    } else{
      toast.success('Saved!')
    }
  }
  const publishedButton = ()=>{
    const error = data.some((items)=>items?.isQuestion === false);
    if(error) {
      toast.dismiss()
      toast.error('fill the question name')
    } else if(!formTitle){
      toast.dismiss()
      toast.error('Form title missing.')
    } else{
      router.push('/preview')
    }
  }
  return (
    <div className="h-[64px] w-full flex justify-between items-center 
    sm:pl-[24px] sm:pr-[24px] pl-[12px] pr-[12px]
    fixed bg-[#F6F8FAE5]/90  bottom-0 lg:w-[640px] border-t">
      <button onClick={saveDraftButton} disabled={isDisable} className={` ${isDisable ? 'cursor-not-allowed' : 'cursor-pointer custom-shadow-draft '}  flex items-center justify-center pt-[6px] pr-[16px] pb-[6px] pl-[14px] gap-[4px] border-1 rounded-[12px] bg-[#fff]  transition-all duration-300  shadow-[0px_3px_3px_-1.5px_#00000008] hover:shadow-[0px_12px_12px_-6px_#00000008,0px_6px_6px_-3px_#00000008,0px_3px_3px_-1.5px_#00000008]`}>
       {
        isDisable ?  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.1668 7.33337V6.66671C13.1668 4.15255 13.1668 2.89547 12.3857 2.11442C11.6047 1.33337 10.3476 1.33337 7.83347 1.33337H7.16687C4.65272 1.33337 3.39564 1.33337 2.6146 2.11441C1.83355 2.89545 1.83354 4.15252 1.83352 6.66666L1.8335 9.33337C1.83347 11.8475 1.83346 13.1046 2.61448 13.8856C3.39553 14.6666 4.65265 14.6667 7.1668 14.6667" stroke="#959DA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4.8335 4.66663H10.1668M4.8335 7.99996H10.1668" stroke="#959DA5" strokeWidth="1.5" strokeLinecap="round"/>
        
        <path d="M8.8335 13.8846V14.6667H9.61576C9.8887 14.6667 10.0252 14.6667 10.1478 14.6159C10.2706 14.565 10.367 14.4686 10.56 14.2756L13.7758 11.0596C13.9578 10.8776 14.0488 10.7866 14.0974 10.6885C14.19 10.5017 14.19 10.2824 14.0974 10.0956C14.0488 9.99744 13.9578 9.90644 13.7758 9.72444C13.5937 9.54244 13.5027 9.45144 13.4045 9.40277C13.2177 9.31024 12.9984 9.31024 12.8116 9.40277C12.7134 9.45144 12.6224 9.54244 12.4404 9.72444L9.22463 12.9404C9.03163 13.1334 8.93516 13.2298 8.88436 13.3525C8.8335 13.4752 8.8335 13.6116 8.8335 13.8846Z" stroke="#959DA5" strokeWidth="1.5" strokeLinejoin="round"/>
        </svg> : 
        <svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.1668 7.33337V6.66671C13.1668 4.15255 13.1668 2.89547 12.3857 2.11442C11.6047 1.33337 10.3476 1.33337 7.83347 1.33337H7.16687C4.65272 1.33337 3.39564 1.33337 2.6146 2.11441C1.83355 2.89545 1.83354 4.15252 1.83352 6.66666L1.8335 9.33337C1.83347 11.8475 1.83346 13.1046 2.61448 13.8856C3.39553 14.6666 4.65265 14.6667 7.1668 14.6667"
          stroke="#24292E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.8335 4.66663H10.1668M4.8335 7.99996H10.1668"
          stroke="#24292E"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M8.83347 13.8846V14.6667H9.61573C9.88867 14.6667 10.0251 14.6667 10.1478 14.6159C10.2705 14.565 10.367 14.4686 10.56 14.2756L13.7757 11.0596C13.9577 10.8776 14.0487 10.7866 14.0974 10.6885C14.19 10.5017 14.19 10.2824 14.0974 10.0956C14.0487 9.99744 13.9577 9.90644 13.7757 9.72444C13.5937 9.54244 13.5027 9.45144 13.4045 9.40277C13.2177 9.31024 12.9983 9.31024 12.8115 9.40277C12.7134 9.45144 12.6223 9.54244 12.4403 9.72444L9.2246 12.9404C9.0316 13.1334 8.93513 13.2298 8.88433 13.3525C8.83347 13.4752 8.83347 13.6116 8.83347 13.8846Z"
          stroke="#0D0D0D"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
      
       }

        <span className={` w-[91px] h-[20px] text-sm ${isDisable ? 'text-[#959DA5]' : 'text-[#0D0D0D]'  } font-[600] `}>Save as Draft</span>
    </button>

    <button onClick={publishedButton} disabled={isDisable} className={` ${isDisable ? 'cursor-not-allowed bg-[#219653] border-[#219653] opacity-50' : 'cursor-pointer bg-[#00AA45] border-[#1E874B] custom-shadow-publish'} flex items-center justify-center pt-[6px] pr-[16px] pb-[6px] pl-[14px] gap-[4px] border-1 rounded-[12px]  transition-all duration-300  shadow-[0px_3px_3px_-1.5px_#00000008] hover:shadow-[0px_12px_12px_-6px_#00000008,0px_6px_6px_-3px_#00000008,0px_3px_3px_-1.5px_#00000008] `}>
    <svg
  width={16}
  height={16}
  viewBox="0 0 16 16"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M3 8.38091L6 11.1666L13 4.66663"
    stroke="white"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

        <span className=' w-[91px] h-[20px] text-sm text-[#FFFFFF] font-[600] '>Publish form</span>
    </button>
      </div>
  )
}

export default Footer
