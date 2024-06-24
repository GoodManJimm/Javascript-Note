import { useEffect } from "react"

export default function useDocumentClick()
{
    useEffect(() => {

        const clickEvent = (e) => 
            {
              console.log("Document is clicked")
            }
    
        document.addEventListener('click',clickEvent)
        
        return () => {
            document.removeEventListener('click',clickEvent)
        }
    })

}