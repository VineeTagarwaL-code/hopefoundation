export const call  = ()=>{
    window.location.href = `tel:${process.env.NEXT_PUBLIC_CALL_NUMBER}` 
}